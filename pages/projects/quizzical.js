import Cover from "../../components/quizzical-components/Cover"
import Quiz from "../../components/quizzical-components/Quiz"
import { useState } from "react";

export default function quizzical() {
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