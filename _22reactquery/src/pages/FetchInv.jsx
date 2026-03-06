import React from "react";
import { fetchInvPost } from "../api/Api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const FetchInv = () => {
  const { id } = useParams();
  const loadInvPost = async () => {
    try {
      const res = await fetchInvPost(id);
      if (res.status === 200) {
        return res.data;
      } else {
        return [];
      }
    } catch (error) {
      console.log(error);
    }
  };

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => loadInvPost(id),
  });

  if (isPending) return <p>Loading...</p>;
  if (isError) return <p>Error {error.message} || Something went wrong</p>;
  return (
    <div>
      <ul>
        <li>
          <p>ID: {data.id}</p>
          <p>Title: {data.title}</p>
          <p>Body: {data.body}</p>
        </li>
      </ul>
    </div>
  );
};

export default FetchInv;
