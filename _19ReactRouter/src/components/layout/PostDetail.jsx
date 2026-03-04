import React from "react";
import { useLoaderData } from "react-router-dom";

const PostDetail = () => {
  const postDetail = useLoaderData();
  return <div>
    <h1>Title: {postDetail.title}</h1>
    <p>Body: {postDetail.body}</p>
  </div>;
};

export default PostDetail;
