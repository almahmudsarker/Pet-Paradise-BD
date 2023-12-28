import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="text-center mt-[300px]">
      <h1 className="text-5xl">Back e jau kaj ekhono baki !</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">
        <button className="bg-[#007257] text-white hover:bg-white hover:text-[#296456] px-4 py-2 rounded">
          Back to home
        </button>
      </Link>
    </div>
  );
}
