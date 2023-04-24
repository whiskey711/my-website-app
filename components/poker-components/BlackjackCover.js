

export default function BlackjackCover(props) {
  return (
    <div className="project-bg">
      <div className="bg-neutral-100 w-[500px] h-[500px] rounded-lg flex flex-col justify-center items-center">
        <h1 className="text-4xl text-blue-900 font-bold text-shadow shadow-gray-500">Blackjack</h1>
        <p className="text-blue-900 mt-3 mb-7">Getting a count as close to 21 as possible, without going over 21</p>
        <button 
          className="bg-blue-700 hover:bg-blue-500 hover:scale-110 duration-300 text-white rounded-lg text-lg h-10 w-32"
          onClick={props.startGame}>Start</button>
      </div>
    </div>
  );
}