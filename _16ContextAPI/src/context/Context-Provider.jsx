import MyContext from "./my-context.js";

const MyProvider = ({children}) => {
  const message = "Called from the context via Provider";
  return (
    <MyContext.Provider value={message}>
      {children}
    </MyContext.Provider>
  )
}

export default MyProvider;