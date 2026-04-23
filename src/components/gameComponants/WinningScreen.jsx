export default function WinningScreen({ setGameSettings }) {
  return (
    <div className="w-screen h-screen absolute top-0 flex justify-center items-center text-2xl font-bold bg-green-400 z-10">
      <div className="flex flex-col">
        YOU WON
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
