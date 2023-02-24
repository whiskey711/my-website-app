import Cover from "../../components/quizzical-components/Cover"
import Quiz from "../../components/quizzical-components/Quiz"
import { useState } from "react";

export default function quizzical() {
  const [start, setStart] = useState(false);
  
  function startQuiz(){
      setStart(true);
  }
  return (
    <div className="m-5 p-5 bg-gray-500 rounded-lg flex justify-center">
        {!start && <Cover startQuiz={startQuiz} />}
        {start && <Quiz />}
    </div>
  );
}