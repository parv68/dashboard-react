const SalesCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
      <div className="bg-gray-800 p-8 rounded-lg flex flex-col justify-between">
        <h2 className="text-xl font-bold mt-0">Team Sales 📈</h2>
        <div className="flex justify-between mt-4">
          <div>
            <p className="font-bold text-2xl">$<span className="text-5xl font-bold">473.2k</span> </p>
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
            <p className="font-bold text-2xl">$<span className="text-5xl font-bold">52.5k</span> </p>
            <p className="text-lg">this week</p>
            <p className="mt-2"><span className="text-green-500 font-bold">⬆ +30.2k </span>v last week</p>
          </div>
        </div>
      </div>
    </div>
  )

}
export default SalesCard;