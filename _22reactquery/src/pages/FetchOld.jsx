import React, { useEffect, useState } from "react";
import { fetchPosts } from "../api/Api";

const FetchOld = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    const loadPosts = async() => {
      try {
        const res = await fetchPosts();
        if(res.status === 200) {
          setPost(res.data);
        } else {
          return [];
        }
      } catch (error) {
        console.log(error);
        return [];
      }
    };
    loadPosts();
  }, []);
  return <div>
    <ul>
      {post.map((p) => {
        return (
          <li key={p.id}>
            <p>{p.title}</p>
            <p>{p.body}</p>
          </li>
        )
      })}
    </ul>
  </div>;
};

export default FetchOld;
