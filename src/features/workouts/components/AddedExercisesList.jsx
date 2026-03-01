import useWorkout from "../hooks/useWorkouts";

const getSavedWorkout = () => {
  return JSON.parse(localStorage.getItem("progressRecords") || "[]");
};

const AddedExercisesList = () => {
  const workouts = useWorkout((state) => state.workouts);
  const clearWorkout = useWorkout((state) => state.clearWorkout);
  const deleteWorkout = useWorkout((state) => state.deleteWorkout);

  const saveWorkouts = (trainingLogs) => {
    let activityRecords = getSavedWorkout();
    activityRecords.push(...trainingLogs);
    localStorage.setItem("progressRecords", JSON.stringify(activityRecords));

    clearWorkout();
    // localStorage.clear("progressRecords");
  };
  const reversedWorkouts = [...workouts].reverse();

  return (
    <div>
      <div className="mt-4 text-center rounded-lg p-2 bg-zinc-100 dark:bg-zinc-700 h-28 overflow-y-auto">
        {reversedWorkouts?.map((workout) => (
          <div
            key={workout.id}
            className="mb-1 p-1 rounded-md bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800"
          >
            <ul>
              <li className="grid grid-rows-1 grid-cols-4">
                <p>{workout.selectedWorkout}</p>
                <p>
                  {workout.sets} x {workout.reps}
                </p>
                <p>{workout.weight} kg</p>
                <button
                  onClick={() => deleteWorkout(workout.id)}
                  className="text-red-400 hover:text-red-600"
                >
                  Delete
                </button>
              </li>
            </ul>
          </div>
        ))}
      </div>

      <div className="text-center my-1">
        <button
          className="btn-primary w-full"
          onClick={() => saveWorkouts(reversedWorkouts)}
        >
          Save Workout
        </button>
      </div>
    </div>
  );
};

export default AddedExercisesList;
