import { useRef } from "react";

const GoalsForm = () => {
  const nameRef = useRef<HTMLInputElement>(null);
    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        const name = nameRef.current!.value;
        console.log(name);
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" ref={nameRef}  />
      </form>
    </div>
  )
}

export default GoalsForm
