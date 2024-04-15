import Loader from "@components/Shared/Loader";
import Root from "@layouts/Root";

const Spinner = () => {
  return (
    <Root showNavbar={false}>
      <div className="h-screen -m-6 flex flex-col items-center justify-center gap-2">
        <Loader
          className="h-11 w-11 text-blue-800 stroke-2"
          strokeColor="stroke-blue-500"
        />
        <h1 className="mt-2 font-semibold text-xl text-gray-900">Loading...</h1>
        <p className="text-gray-500 text-sm">Preparing the app for you...</p>
      </div>
    </Root>
  );
};

export default Spinner;
