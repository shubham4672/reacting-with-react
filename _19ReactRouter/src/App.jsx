import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./components/layout/AppLayout";
import Posts from "./components/layout/Posts";
import NotFound from "./components/layout/NotFound";
import { posts } from "./utils/fetchPosts";
import PostDetail from "./components/layout/PostDetail";
import { postDetail } from "./utils/fetchPostDetail";
import Contact from "./components/layout/Contact";
import { saveContactInfo } from "./utils/contactAction";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      hydrateFallbackElement: <div>Loading...</div>,
      errorElement: <NotFound />,
      children: [
        {
          path: "/posts",
          element: <Posts />,
          loader: posts,
        },
        {
          path: "/posts/:id",
          element: <PostDetail />,
          loader: postDetail,
        },
        {
          path: "/contact-us",
          element: <Contact />,
          action: saveContactInfo,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
