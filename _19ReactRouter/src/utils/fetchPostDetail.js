export const postDetail = async ({ params }) => {
  try {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`,
    );
    return data.json();
  } catch (error) {
    console.log(error);
  }
};
