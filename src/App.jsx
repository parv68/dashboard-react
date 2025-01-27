import TeamSales from './Componenets/TeamSales';
import WeeklySales from './Componenets/WeeklySales';
import Leaderboard from './Componenets/Leaderboard';
import SalesCard from './Componenets/SalesCard';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-gray-900 text-white p-3">
      <h1 className="text-2xl font-bold mb-4">Team Leaderboard</h1>
      <div className="flex flex-col md:flex-row justify-center items-start gap-3">
        <div className="w-full md:w-1/3">
          <SalesCard />
          <Leaderboard />
          <WeeklySales />
        </div>
        <div className="w-full md:w-2/3">
          <TeamSales />
        </div>
      </div>
    </div>
  );
};

export default App;