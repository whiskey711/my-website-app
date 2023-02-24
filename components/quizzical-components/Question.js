import { nanoid } from "nanoid";

export default function Question(props) {
  const problem = props.quiz.problem;
  const answers = props.quiz.allAnswer;
  const thisChoice = props.choice[props.id];

  const answerElements = answers.map((ans) => {
    let bgcolor = "";
    let border = "border border-gray-400 ";
    if (props.showAns) {
      if (ans == props.quiz.correctAnswer) {
        bgcolor = "bg-emerald-400";
        border = "";
      } else if (ans == thisChoice) {
        bgcolor = "bg-red-400";
        border = "";
      }
    } else if (ans == thisChoice) {
      bgcolor = "bg-violet-200";
      border = "";
    }
    return <button
      key={nanoid()}
      onClick={props.select}
      value={ans}
      name={props.id}
      disabled={props.showAns}
      className={
        "rounded-lg text-sm px-4 " + border + bgcolor
      }
    >{ans}</button>
  });

  return (
    <div className="space-y-3">
      <h3 className="text-lg font-medium">{problem}</h3>
      <div className="space-x-2">
        {answerElements}
      </div>
      <hr/>
    </div>
  );
}