export default function Cover(props) {
  return (
    <div className="bg-neutral-100 w-[500px] h-[500px] rounded-lg flex flex-col justify-center items-center">
      <h1 className="text-4xl text-blue-900 font-bold text-shadow shadow-gray-500">Quizzical</h1>
      <p className="text-blue-900 mt-3 mb-7">Test your politics knowledge here</p>
      <button
        onClick={props.startQuiz}
        className="bg-blue-700 text-white rounded-lg text-lg h-10 w-32"
      >
        Start quiz
      </button>
    </div>
  );
}