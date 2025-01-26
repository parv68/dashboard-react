import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
const team = [
  { name: "Dale", region: "North East", sales: 193.8, weekly: 4.5, image: "./src/images/image1.jpg", percent: 31, revenue: 300 },
  { name: "Nick", region: "Mid-West", sales: 101.8, weekly: 4, image: "./src/images/image2.jpg", percent: 33, revenue: 300 },
  { name: "Paul", region: "West", sales: 145.3, weekly: 19, image: "./src/images/image3.jpg", percent: 48, revenue: 300 },
  { name: "Sam", region: "South", sales: 133.4, weekly: 25, image: "./src/images/image4.jpg", percent: 44, revenue: 300 },
];
  
const dale_sales = [
  { name: 'Jan', uv: 1000 },
  { name: 'Feb', uv: 3000 },
  { name: 'Mar', uv: 2000 },
  { name: 'Apr', uv: 2780 },
  { name: 'May', uv: 1890 },
  { name: 'Jun', uv: 2390 },
  { name: 'Jul', uv: 3490 },
];
const nick_sales = [
  { name: 'Jan', uv: 2000 },
  { name: 'Feb', uv: 3400 },
  { name: 'Mar', uv: 7600 },
  { name: 'Apr', uv: 2180 },
  { name: 'May', uv: 1090 },
  { name: 'Jun', uv: 2390 },
  { name: 'Jul', uv: 9000 },
];
const paul_sales = [
  { name: 'Jan', uv: 2000 },
  { name: 'Feb', uv: 7000 },
  { name: 'Mar', uv: 8000 },
  { name: 'Apr', uv: 2780 },
  { name: 'May', uv: 7890 },
  { name: 'Jun', uv: 4590 },
  { name: 'Jul', uv: 2890 },
];
const sam_sales = [
  { name: 'Jan', uv: 6500 },
  { name: 'Feb', uv: 5600 },
  { name: 'Mar', uv: 7600 },
  { name: 'Apr', uv: 4580 },
  { name: 'May', uv: 3590 },
  { name: 'Jun', uv: 7690 },
  { name: 'Jul', uv: 8790 },
];



const TeamSales = () => {
  return (
    <div className="flex gap-3 ">
      {/* dale */}
      <div className="flex flex-col justify-center mt-4">
        <div className="bg-gray-800 p-4 rounded-lg grid">
          <h3 className="text-lg font-bold mb-3">{team[0].name}</h3>
          <p className="text-sm  text-white-400 mb-2">{team[0].region}</p>
          <img
            src={team[0].image}
            alt={`${team[0].name}'s profile`}
            className="w-full h-40 mb-4 object-cover"
          />
          <p className="text-2xl font-bold mt-2">$<span className="text-5xl font-bold mt-2">{team[0].sales}</span>k</p>
          <p className="mb-2">this year</p>
          <div className="w-full bg-gray-700 h-2 ">
            <div
              className="bg-blue-300 h-2 "
              style={{ width: `${team[0].percent}%` }}
            ></div>
            <div className="flex justify-between text-xs text-white-400">
              <p>{team[0].percent}%</p>
              <p>${team[0].revenue}k</p>
            </div>
          </div>
          <p className="text-2xl font-bold mt-6">€<span className="text-5xl font-bold mt-2">{team[0].weekly}</span>k</p>
          <p className="mb-4">this week</p>
          <ResponsiveContainer width="100%" height={100}>
            <LineChart data={dale_sales}>
              <XAxis dataKey="name" hide />
              <YAxis hide />
              <Line type="monotone" dataKey="uv" stroke="#00C49F" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
      </div>
      <div className="flex flex-col justify-center mt-4">
        <div className="bg-gray-800 p-4 rounded-lg flex flex-col ">
          <h3 className="text-lg font-bold mb-3">{team[1].name}</h3>
          <p className="text-sm  text-white-400 mb-2">{team[1].region}</p>
          <img
            src={team[1].image}
            alt={`${team[1].name}'s profile`}
            className="w-full h-40 mb-4 object-cover"
          />
          <p className="text-2xl font-bold mt-2">$<span className="text-5xl font-bold mt-2">{team[1].sales}</span>k</p>
          <p className="mb-2">this year</p>
          <div className="w-full bg-gray-700 h-2 ">
            <div
              className="bg-blue-300 h-2 "
              style={{ width: `${team[1].percent}%` }}
            ></div>
            <div className="flex justify-between text-xs text-white-400">
              <p>{team[1].percent}%</p>
              <p>${team[1].revenue}k</p>
            </div>
          </div>
          <p className="text-2xl font-bold mt-6">€<span className="text-5xl font-bold mt-2">{team[1].weekly}</span>k</p>
          <p className="mb-4">this week</p>
          <ResponsiveContainer width="100%" height={100}>
            <LineChart data={nick_sales}>
              <XAxis dataKey="name" hide />
              <YAxis hide />
              <Line type="monotone" dataKey="uv" stroke="#00C49F" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="flex flex-col justify-center mt-4">
        <div className="bg-gray-800 p-4 rounded-lg flex flex-col ">
          <h3 className="text-lg font-bold mb-3">{team[2].name}</h3>
          <p className="text-sm  text-white-400 mb-2">{team[2].region}</p>
          <img
            src={team[2].image}
            alt={`${team[2].name}'s profile`}
            className="w-full h-40 object-cover mb-4"
          />
          <p className="text-2xl font-bold mt-2">$<span className="text-5xl font-bold mt-2">{team[2].sales}</span>k</p>
          <p className="mb-2">this year</p>
          <div className="w-full bg-gray-700 h-2 ">
            <div
              className="bg-blue-300 h-2 "
              style={{ width: `${team[2].percent}%` }}
            ></div>
            <div className="flex justify-between text-xs text-white-400">
              <p>{team[2].percent}%</p>
              <p>${team[2].revenue}k</p>
            </div>
          </div>
          <p className="text-2xl font-bold mt-6">€<span className="text-5xl font-bold mt-2">{team[2].weekly}</span>k</p>
          <p className="mb-4">this week</p>
          <ResponsiveContainer width="100%" height={100}>
            <LineChart data={paul_sales}>
              <XAxis dataKey="name" hide />
              <YAxis hide />
              <Line type="monotone" dataKey="uv" stroke="#00C49F" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="flex flex-col justify-center mt-4">
        <div className="bg-gray-800 p-4 rounded-lg flex flex-col ">
          <h3 className="text-lg font-bold mb-3">{team[3].name}</h3>
          <p className="text-sm  text-white-400 mb-2">{team[3].region}</p>
          <img
            src={team[3].image}
            alt={`${team[3].name}'s profile`}
            className="w-full h-40 object-cover mb-4"
          />
          <p className="text-2xl font-bold mt-2">$<span className="text-5xl font-bold mt-2">{team[3].sales}</span>k</p>
          <p className="mb-2">this year</p>
          <div className="w-full bg-gray-700 h-2 ">
            <div
              className="bg-blue-300 h-2 "
              style={{ width: `${team[3].percent}%` }}
            ></div>
            <div className="flex justify-between text-xs text-white-400">
              <p>{team[3].percent}%</p>
              <p>${team[3].revenue}k</p>
            </div>
          </div>
          <p className="text-2xl font-bold mt-6">€<span className="text-5xl font-bold mt-2">{team[3].weekly}</span>k</p>
          <p className="mb-4">this week</p>
          <ResponsiveContainer width="100%" height={100}>
            <LineChart data={sam_sales}>
              <XAxis dataKey="name" hide />
              <YAxis hide />
              <Line type="monotone" dataKey="uv" stroke="#00C49F" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default TeamSales;
