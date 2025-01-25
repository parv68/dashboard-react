const Leaderboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
      <div className="bg-gray-800 p-4 rounded-lg mt-4 ">
        <h2 className="text-xl font-bold">Leaderboard 🏆</h2>
        <ul className="flex flex-col mt-2  justify-between">
          <li className="flex mt-2 pb-1 justify-between"><span>Paul🧔</span> <span>$145k</span></li>
          <hr />
          <li className="flex mt-2 pb-1 justify-between"><span>Sam👩‍💻 </span> <span>$133.4k</span></li>
          <hr />
          <li className="flex mt-2 pb-1 justify-between"><span>Nick🧑‍💻</span> <span>$101k</span></li>
          <hr />
          <li className="flex mt-2 pb-1 justify-between"><span>Dale👓</span> <span>$93.8k</span></li>
        </ul>
      </div>
    </div>
  );
};

export default Leaderboard;
