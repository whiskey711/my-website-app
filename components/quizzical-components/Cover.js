export default function Cover(props) {
  return (
    <div>
      <h1>Quizzical</h1>
      <p>Test your politics knowledge here</p>
      <button
        onClick={props.startQuiz}
        className="bg-sky-300"
      >
        Start quiz
      </button>
    </div>
  );
}