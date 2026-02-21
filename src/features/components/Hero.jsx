const Hero = () => {
  return (
    <>
      <div className="h-[90vh] bg-[url(/src/assets/images/hero.png)] bg-cover flex items-center text-gray-800">
        <div className="ml-5 sm:ml-10 md:ml-15 lg:ml-20">
          <div className="mb-6">
            <h1>Track Your Fitness Journey</h1>
            <p className="font-semibold mt-2">
              Log workouts, track progress, and stay consistent.
            </p>
          </div>
          <div className="flex gap-x-6">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary dark:hover:bg-slate-100">Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
