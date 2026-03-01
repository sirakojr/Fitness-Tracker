import { useEffect, useState } from "react";

function useActivity() {
  const [activity, setActivity] = useState([]);
  useEffect(() => {
    const progressRecords =
      JSON.parse(localStorage.getItem("progressRecords")) || [];
    setActivity(progressRecords);
  }, []);
  return activity;
}

export default useActivity;
