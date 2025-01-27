import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const weekly_sales = [
  { name: "Jan", weekly: 200 },
  { name: "Feb", weekly: 900 },
  { name: "Mar", weekly: 400 },
  { name: "Apr", weekly: 1100 },
  { name: "May", weekly: 1600 },
];

const WeeklySales = () => {
  return (
    <div className="grid gap-1">
      <div className="bg-gray-800 p-4 rounded-lg mt-2 pb-6">
        <h2 className="text-xl font-bold mb-5">Weekly Sales 📊</h2>
        <ResponsiveContainer width="100%" height={100}>
          <LineChart data={weekly_sales}>
            <XAxis dataKey="name" />
            <YAxis />
            <Line type="monotone" dataKey="weekly" stroke="#00C49F" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WeeklySales;