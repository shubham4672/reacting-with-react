import React, { use, useContext } from 'react'
import MyContext from "../context/my-context.js";


const ComponetC = () => {
    // const message = useContext(MyContext);
    // const message = use(MyContext); // use API
    const message = useBioContext();
  return (
    <div>
      <h2>Comp C</h2>
      <p>{message}</p>
    </div>
  )
}

const useBioContext = () => {
  const context = use(MyContext);
  return context;
}

export default ComponetC
