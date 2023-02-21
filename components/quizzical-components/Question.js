import { nanoid } from "nanoid";

export default function Question(props) {
  const problem = props.quiz.problem;
  const answers = props.quiz.allAnswer;
  const thisChoice = props.choice[props.id];

  const answerElements = answers.map((ans) => {
    let bgcolor = "";
    if (props.showAns) {
      if (ans == props.quiz.correctAnswer) {
        bgcolor = "bg-emerald-400";
      } else if (ans == thisChoice) {
        bgcolor = "bg-red-400";
      }
    } else if (ans == thisChoice) {
      bgcolor = "bg-violet-200";
    }
    return <button
      key={nanoid()}
      onClick={props.select}
      value={ans}
      name={props.id}
      disabled={props.showAns}
      className={bgcolor}
    >{ans}</button>
  });

  return (
    <div>
      <h3>{problem}</h3>
      {answerElements}
    </div>
  );
}