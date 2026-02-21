import { create } from "zustand";

const mode = localStorage.getItem("mode")

const useTheme = create((set) => ({
  theme: mode || "light",
  setTheme: (value) => set({ theme: value }),
}));

export default useTheme;
