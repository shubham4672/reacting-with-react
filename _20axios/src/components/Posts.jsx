import { useEffect, useState } from "react";
import { deletePost, getPosts } from "../api/PostAPI";
import Form from "./Form";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [updateDataApi, setUpdateDataApi] = useState({});

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await getPosts();
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await deletePost(id);
      if (res.status === 200) {
        const updatedPosts = posts.filter((post) => post.id !== id);
        setPosts(updatedPosts);
      } else {
        console.log("Something went wrong.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (post) => setUpdateDataApi(post);

  return (
    <>
      <div className='form'>
        <Form
          data={posts}
          setData={setPosts}
          updateDataApi={updateDataApi}
          setUpdateDataApi={setUpdateDataApi}
        />
      </div>
      <div>
        <ol>
          {posts &&
            posts.map((post) => {
              const { id, title, body } = post;
              return (
                <li key={id}>
                  <p>Title: {title}</p>
                  <p>Body: {body}</p>
                  <button onClick={() => handleEdit(post)}>Edit</button>
                  <button onClick={() => handleDelete(id)}>Delete</button>
                </li>
              );
            })}
        </ol>
      </div>
    </>
  );
};

export default Posts;
