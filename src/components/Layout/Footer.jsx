import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="bg-zinc-100 text-zinc-600 p-6 border-t border-zinc-200 dark:bg-zinc-950 dark:text-zinc-400 dark:border-zinc-800">
        <div className="mb-4">
          <h2 className="font-semibold text-zinc-800 dark:text-zinc-200">Fitness Tracker</h2>
          <p>Track workouts, monitor progress, stay consistent.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="mb-4">
            <h3 className="dark:text-zinc-500">Brand</h3>
            <div className="grid grid-cols-1 ml-2">
              <Link to={`#`}>GitHub</Link>
              <Link to={`#`}>LinkedIn</Link>
              <Link to={`#`}>Twitter/X</Link>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="dark:text-zinc-500">Product Links</h3>
            <div className="grid grid-cols-1 ml-2">
              <Link to={`#`}>Home</Link>
              <Link to={`#`}>Dashboard</Link>
              <Link to={`#`}>Log Workout</Link>
              <Link to={`#`}>Workout History</Link>
              <Link to={`#`}>Features</Link>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="dark:text-zinc-500">Resources</h3>
            <div className="grid grid-cols-1 ml-2">
              <Link target="_blank" to={`#`}>
                GitHub Repository
              </Link>
              <Link to={`#`}>Contact</Link>
              <Link to={`#`}>Privacy Policy</Link>
              <Link to={`#`}>Terms of Service</Link>
            </div>
          </div>
        </div>
        <div className="text-center">
          &copy; {new Date().getFullYear()} FitnessTracker. Built by Abriham
          Atinkut.
        </div>
      </footer>
    </>
  );
};

export default Footer;
