import Root from "@layouts/Root";

const Error = () => {
  return (
    <Root showNavbar={false}>
      <div className="text-center flex flex-col items-center justify-center h-screen -m-6">
        <div>
          <p className="text-6xl mb-4 font-bold leading-8 text-blue-700">404</p>
          <h1 className="font-semibold text-xl text-gray-900">
            Page not found
          </h1>
          <p className="text-gray-500 text-sm mt-2">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
        </div>
      </div>
    </Root>
  );
};

export default Error;
