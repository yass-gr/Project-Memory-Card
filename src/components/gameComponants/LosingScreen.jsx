export default function LosingScreen({ setGameSettings }) {
  return (
    <div className="w-screen h-screen absolute top-0 flex justify-center items-center text-2xl font-bold bg-red-400 z-10">
      <div className="flex flex-col">
        YOU LOST
        <button
          onClick={() => setGameSettings("")}
          className="bg-gray-300 py-2 px-3 rounded-full "
        >
          restart
        </button>
      </div>
    </div>
  );
}
