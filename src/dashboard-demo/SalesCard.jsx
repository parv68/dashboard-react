const SalesCard = () => {
  return (
    <div className="grid col-span-3 row-span-1 gap-1">
      <div className="bg-gray-800 p-8 rounded-lg ">
        <h2 className="text-xl font-bold mt-0">Team Sales 📈</h2>
        <div className="flex justify-between mt-4">
          <div>
            <p className="font-bold text-2xl">$<span className="text-4xl font-bold">473.2</span>k</p>
            <p className="text-lg">this year</p>
            <div className="w-full bg-gray-700 h-2 ">
              <div
                className="bg-blue-300 h-2 "
                style={{ width: '39%' }}
              ></div>
              <div className="flex justify-between text-xs text-white-400">
                <p>39%</p>
                <p>$1.2M</p>
              </div>
            </div>
          </div>
          <div>
            <p className="font-bold text-2xl">$<span className="text-4xl font-bold">52.5</span>k</p>
            <p className="text-lg">this week</p>
            <p className="mt-2"><span className="text-green-500 font-bold">⬆ +30.2k </span>v last week</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SalesCard;
