import AddedExercisesList from "./AddedExercisesList";
import ExerciseInputs from "./ExerciseInputs";
import ExerciseSelector from "./ExerciseSelector";

const WorkoutForm = () => {
  return (
    <>
      <div className="flex justify-center min-h-screen bg-white text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100">
        <div className="mt-4">
          <h1 className="text-center mb-8">Log Workout</h1>
          <div>
            <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 shadow-lg p-6  rounded-lg dark:border-[1px] dark:border-zinc-600">
              <ExerciseSelector />
              <ExerciseInputs />
            </div>
            <AddedExercisesList />
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkoutForm;
