import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const team = [
  { name: "Dale", region: "North East", sales: 193.8, weekly: 4.5, image: "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=600", percent: 31, revenue: 300 },
  { name: "Nick", region: "Mid-West", sales: 101.8, weekly: 4, image: "https://images.pexels.com/photos/20367778/pexels-photo-20367778/free-photo-of-brunette-in-coat-and-hat.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", percent: 33, revenue: 300 },
  { name: "Paul", region: "West", sales: 145.3, weekly: 19, image: "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=600", percent: 48, revenue: 300 },
  { name: "Sam", region: "South", sales: 133.4, weekly: 25, image: "https://images.pexels.com/photos/30367969/pexels-photo-30367969/free-photo-of-young-woman-in-black-jacket-with-white-horse.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", percent: 44, revenue: 300 },
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
    <div className="flex flex-col md:flex-row gap-2">
      {/* Dale */}
      <div className="w-full md:w-1/4">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-bold mb-3">{team[0].name}</h3>
          <p className="text-sm text-white-400 mb-2">{team[0].region}</p>
          <img
            src={team[0].image}
            alt={`${team[0].name}'s profile`}
            className="w-full h-40 mb-4 object-cover"
          />
          <p className="text-2xl font-bold mt-2">$<span className="text-5xl font-bold mt-2">{team[0].sales}</span>k</p>
          <p className="mb-2">this year</p>
          <div className="w-full bg-gray-700 h-2">
            <div
              className="bg-blue-300 h-2"
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

      {/* Nick */}
      <div className="w-full md:w-1/4">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-bold mb-3">{team[1].name}</h3>
          <p className="text-sm text-white-400 mb-2">{team[1].region}</p>
          <img
            src={team[1].image}
            alt={`${team[1].name}'s profile`}
            className="w-full h-40 mb-4 object-cover"
          />
          <p className="text-2xl font-bold mt-2">$<span className="text-5xl font-bold mt-2">{team[1].sales}</span>k</p>
          <p className="mb-2">this year</p>
          <div className="w-full bg-gray-700 h-2">
            <div
              className="bg-blue-300 h-2"
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

      {/* Paul */}
      <div className="w-full md:w-1/4">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-bold mb-3">{team[2].name}</h3>
          <p className="text-sm text-white-400 mb-2">{team[2].region}</p>
          <img
            src={team[2].image}
            alt={`${team[2].name}'s profile`}
            className="w-full h-40 mb-4 object-cover"
          />
          <p className="text-2xl font-bold mt-2">$<span className="text-5xl font-bold mt-2">{team[2].sales}</span>k</p>
          <p className="mb-2">this year</p>
          <div className="w-full bg-gray-700 h-2">
            <div
              className="bg-blue-300 h-2"
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

      {/* Sam */}
      <div className="w-full md:w-1/4">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-bold mb-3">{team[3].name}</h3>
          <p className="text-sm text-white-400 mb-2">{team[3].region}</p>
          <img
            src={team[3].image}
            alt={`${team[3].name}'s profile`}
            className="w-full h-40 mb-4 object-cover"
          />
          <p className="text-2xl font-bold mt-2">$<span className="text-5xl font-bold mt-2">{team[3].sales}</span>k</p>
          <p className="mb-2">this year</p>
          <div className="w-full bg-gray-700 h-2">
            <div
              className="bg-blue-300 h-2"
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