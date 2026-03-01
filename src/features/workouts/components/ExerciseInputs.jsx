import { useState } from "react";
import useWorkout from "../hooks/useWorkouts";

const getToday = () => {
  const today = new Date();
  const year = String(today.getFullYear());
  const month = String(today.getMonth() + 1).padStart(2, "0")
  const day = String(today.getDate()).padStart(2, "0")

  return `${year}-${month}-${day}`;
};
const ExerciseInputs = () => {
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  const [date, setDate] = useState(getToday());

  const addWorkouts = useWorkout((state) => state.addWorkouts);
  const selectedWorkout = useWorkout((state) => state.selectedWorkout);
  const updateSelectedWorkout = useWorkout(
    (state) => state.updateSelectedWorkout,
  );

  const formHandler = (e) => {
    e.preventDefault();
    if (
      !sets.trim() ||
      !reps.trim() ||
      !weight.trim() ||
      !selectedWorkout.trim() ||
      !date.trim()
    )
      return;

    let addWorkout = { sets, reps, weight, selectedWorkout, date };
    addWorkouts(addWorkout);

    setSets("");
    setReps("");
    setWeight("");
    updateSelectedWorkout("");
    setDate(getToday());
  };

  return (
    <>
      <form onSubmit={formHandler}>
        <div>
          <input
            type="date"
            className="border-2 w-full rounded-md mb-1"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            className="border-2 w-full rounded-md mb-1"
            value={selectedWorkout}
            placeholder="Select Exercise"
            readOnly
          />
        </div>
        <div className="flex mb-3">
          <div>
            <label htmlFor="" className="block mb-1">
              Sets
            </label>
            <input
              type="number"
              className="border-2 w-24 mr-1 rounded-md"
              value={sets}
              onChange={(e) => setSets(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="" className="block mb-1">
              Reps
            </label>
            <input
              type="number"
              className="border-2 w-24 mr-1 rounded-md"
              value={reps}
              onChange={(e) => setReps(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="" className="block mb-1">
              weight (kg)
            </label>
            <input
              type="number"
              className="border-2 w-24 mr-1 rounded-md"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="btn-primary w-full mt-2">
          Add Exercises
        </button>
      </form>
    </>
  );
};

export default ExerciseInputs;
