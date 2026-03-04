import React from 'react'
import { NavLink, useLoaderData, useNavigate } from 'react-router-dom'

const Posts = () => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate(-1);
  }
  const posts = useLoaderData();
  return (
    <div>
      <h1>Posts</h1>
      {
        posts && posts.map((post) => {
          return (
            <div key={post.id}>
              <h1>{post.title}</h1>
              <NavLink to={`/posts/${post.id}`}>
                <button>Read more</button>
              </NavLink>
            </div>
          )
        })
      }
      <button onClick={handleRedirect}>Go Back</button>
    </div>
  )
}

export default Posts
