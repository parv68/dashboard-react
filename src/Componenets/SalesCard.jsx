const SalesCard = () => {
  return (
    <div className="grid">
      <div className="bg-gray-800 pt-4 pl-5 pr-5 pb-6 rounded-lg">
        <h2 className="text-xl font-bold mb-1">Team Sales 📈</h2>
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div>
            <p className="font-bold text-2xl">$<span className="text-4xl font-bold">473.2</span>k</p>
            <p className="text-lg">this year</p>
            <div className="w-full bg-gray-700 h-2">
              <div
                className="bg-blue-300 h-2"
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
            <p><span className="text-green-500 font-bold">⬆ +30.2k</span> v last week</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesCard;