const CTA = () => {
  return (
    <>
      <div className="py-20 px-24 text-center text-zinc-900 bg-white dark:bg-zinc-800 dark:text-zinc-100 border-t border-zinc-200">
        <div className="mb-10">
          <h1 className="mb-4">A Smarter Way to Track Your Fitness Progress</h1>
          <p>
            Designed with clean analytics, structured workouts, and a simple
            interface to help you stay consistent and focused.
          </p>
        </div>
        <div>
          <button className="btn-primary m-4">Get Started Free</button>
          <button className="btn-secondary dark:text-zinc-100 dark:hover:bg-zinc-600">View Project On GitHub</button>
        </div>
      </div>
    </>
  );
};

export default CTA;
