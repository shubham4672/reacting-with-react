import { useState, useEffect } from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    return async () => {
      const post = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await post.json();
      setData(data);
    };
  }, []);

  return (
    <>
      <div className='main'>
        <dl>
          {data.map((post) => {
            return <Card key={post.id} title={post.title} body={post.body} />;
          })}
        </dl>
      </div>
    </>
  );
}

export default App;
