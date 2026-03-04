export const posts = async () => {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const response = await data.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};
