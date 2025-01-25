import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
const weekly_sales = [
  { name: "Jan", weekly: 200 },
  { name: "Feb", weekly: 900 },
  { name: "Mar", weekly: 400 },
  { name: "Apr", weekly: 1100 },
  { name: "May", weekly: 900 },
]
const WeeklySales = () => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
      <div className="bg-gray-800 p-4 rounded-lg mt-4 ">
        <h2 className="text-xl font-bold mb-3">Weekly Sales 📊</h2>
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
