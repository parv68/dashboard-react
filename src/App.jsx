import TeamSales from './dashboard-demo/TeamSales';
import WeeklySales from './dashboard-demo/WeeklySales';
import Leaderboard from './dashboard-demo/Leaderboard';
import SalesCard from './dashboard-demo/SalesCard';
const App = () => {

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 ">
      <h1 className="text-2xl font-bold mb-4">Team Leaderboard</h1>
      <div className="grid w-[clamp(100px,100%,960px)] grid-cols-9 auto-rows-[minmax(100px,auto)] gap-4">
        <div className="grid col-start-1 col-end-4 row-start-1 row-end-2">
      {/* team sales */}
      <SalesCard />

      {/* leaderboard */}
      <Leaderboard />
          


      {/* sales card */}
      <WeeklySales />
        </div>

      {/* team */}
      <TeamSales/>
      </div>
      
    </div>
  );
};

export default App;