import Card from "../../../components/ui/Card";

const today = new Date();
const dayOfWeek = today.getDay();

// Calculate Monday of this week
const monday = new Date(today);
monday.setDate(today.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1));
monday.setHours(0, 0, 0, 0);

// Calculate Sunday of this week
const sunday = new Date(monday);
sunday.setDate(monday.getDate() + 6);
sunday.setHours(23, 59, 59, 999); 

const ProgressCards = ({ activity }) => {
  // Total weight Lifted
  const totalWeight = activity.reduce(
    (sum, exercise) => sum + Number(exercise.weight),
    0,
  );

  // Most frequent Exercise
  const frequency = activity.reduce((acc, exercise) => {
    acc[exercise.selectedWorkout] = (acc[exercise.selectedWorkout] || 0) + 1;
    return acc;
  }, {});
  const mostFrequent = Object.keys(frequency).reduce((a, b) => {
    return frequency[a] > frequency[b] ? a : b;
  }, null);

  // This week workouts
  const workoutsThisWeek = activity.filter((ex) => {
    const exDate = new Date(ex.date);
    return exDate >= monday && exDate <= sunday;
  });
  return (
    <div className="mx-8 mt-2">
      <div className="grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-4">
        <Card>
          <p className="font-bold">{activity.length} </p>
          <h2>Total workouts</h2>
        </Card>
        <Card>
          <p className="font-bold">
            {totalWeight} <span className="text-base">kg</span>
          </p>
          <h2>Total weight Lifted</h2>
        </Card>
        <Card>
          <p className="font-bold">{workoutsThisWeek.length} </p>
          <h2>This week workouts</h2>
        </Card>
        <Card>
          <p className="font-bold">{mostFrequent} </p>
          <h2>Most frequent Exercise</h2>
        </Card>
      </div>
    </div>
  );
};

export default ProgressCards;
