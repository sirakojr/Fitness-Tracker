import { create } from "zustand";

const useWorkout = create((set) => ({
  workouts: [],
  addWorkouts: (exercise) =>
    set((state) => ({
      workouts: [...state.workouts, { ...exercise, id: crypto.randomUUID() }],
    })),
  deleteWorkout: (id) =>
    set((state) => ({
      workouts: state.workouts.filter((workout) => workout.id != id),
    })),
  clearWorkout: () => set({ workouts: [] }),

  selectedWorkout: "",
  updateSelectedWorkout: (query) => set({ selectedWorkout: query }),
}));

export default useWorkout;
