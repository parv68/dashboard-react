import TeamSales from './dashboard-demo/TeamSales';
import WeeklySales from './dashboard-demo/WeeklySales';
import Leaderboard from './dashboard-demo/Leaderboard';
import SalesCard from './dashboard-demo/SalesCard';
const App = () => {

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 ">
      <h1 className="text-2xl font-bold mb-4">Team Leaderboard</h1>

      {/* team sales */}
      <SalesCard />

      {/* leaderboard */}
      <Leaderboard />


      {/* sales card */}
      <WeeklySales />

      {/* team */}
      <TeamSales/>

    </div>
  );
};

export default App;