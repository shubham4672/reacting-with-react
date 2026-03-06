import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { deletePost, fetchPosts } from "../api/Api";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const FetchRQ = () => {
  const [pageNo, setPageNo] = useState(0);

  const loadPosts = async (pageNo) => {
    try {
      const res = await fetchPosts(pageNo);
      if (res.status === 200) {
        return res.data;
      } else {
        return [];
      }
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: (id) => deletePost(id),
    onSuccess: (data, id) => {
      queryClient.setQueryData(["posts", pageNo], (currEle) => {
        return currEle?.filter((post) => post.id !== id);
      });
    },
  });

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["posts", pageNo],
    queryFn: () => loadPosts(pageNo),
    placeholderData: keepPreviousData, // keep on current page util it's loaded
  });

  if (isPending) return <p>Loading...</p>;
  if (isError) return <p>Error {error.message} || Something went wrong</p>;
  return (
    <div>
      <ul>
        {data?.map((p) => {
          return (
            <li key={p.id}>
              <NavLink to={`/rq/${p.id}`}>
                <p>Title: {p.title}</p>
                <p>Body: {p.body}</p>
              </NavLink>
              <button onClick={() => deleteMutation.mutate(p.id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
      <div className="pagination">
        <button
          disabled={pageNo === 0 ? true : false}
          onClick={() => setPageNo((page) => page - 3)}
        >
          Prev
        </button>
        <h2>{pageNo / 3 + 1}</h2>
        <button onClick={() => setPageNo((page) => page + 3)}>Next</button>
      </div>
    </div>
  );
};

export default FetchRQ;
