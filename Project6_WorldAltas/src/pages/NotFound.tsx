import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <p>{error.status}</p>
        <p>{error.statusText}</p>
        <p>{error.data}</p>
      </div>
    );
  }

  return <p>Something went wrong</p>;
};

export default NotFound;
