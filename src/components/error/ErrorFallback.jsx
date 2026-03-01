const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <>
      <div className="h-screen flex items-center justify-center text-zinc-900 bg-slate-100    dark:text-zinc-100 dark:bg-zinc-900">
        <div className="">
          <h2>Oops! Something went wrong.</h2>
          {/* Render error to user*/}
          <p>Error: {error?.message}</p>
          <div className="text-center">
            {/* Reset Error boundary */}
            <button
              onClick={resetErrorBoundary}
              className="m-4 py-1 px-4 border border-zinc-800 dark:border-zinc-100 rounded-lg "
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorFallback;

