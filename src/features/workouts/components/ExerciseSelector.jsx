import { useEffect, useState } from "react";
import fetchExercise from "../api/exercisesApi";
import useWorkout from "../hooks/useWorkouts";

const ExerciseSelector = () => {
  const [search, setSearch] = useState("");
  const [workouts, setWorkouts] = useState([]);

  const updateSelectedWorkout = useWorkout(
    (state) => state.updateSelectedWorkout,
  );

  useEffect(() => {
    // fetch exercises when component mount
    const loadExercise = async () => {
      const data = await fetchExercise();
      setWorkouts(data);
    };
    loadExercise();
  }, []);

  let filteredWorkouts = workouts.filter((workout) => {
    return workout.toLowerCase().includes(search.toLowerCase());
  });

  let visibleWorkout = filteredWorkouts.slice(0, 4);

  return (
    <>
      <div className="flex justify-start">
        <div>
          <div className="mb-2">
            <input
              type="text"
              className="border-2 rounded-md w-full"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search exercise..."
            />
          </div>
          <div className="p-0 w-full">
            <ul className="p-2 rounded-md shadow-lg  dark:shadow-zinc-300">
              {visibleWorkout?.map((workout, i) => (
                <li
                  key={i}
                  className="p-1 w-full hover:bg-zinc-100 dark:hover:bg-zinc-700 cursor-pointer rounded-md"
                  onClick={() => updateSelectedWorkout(workout)}
                >
                  <p>{workout}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExerciseSelector;
