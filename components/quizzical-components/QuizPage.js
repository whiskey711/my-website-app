import Cover from "./Cover";
import Quiz from "./Quiz";
import { useState } from "react";

export default function QuizPage() {
  const [start, setStart] = useState(false);
  
  function startQuiz(){
      setStart(true);
  }
  return (
    <div className="project-bg">
        {!start && <Cover startQuiz={startQuiz} />}
        {start && <Quiz />}
    </div>
  );
}