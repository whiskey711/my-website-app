import Question from "./Question";
import { useState, useEffect } from "react";

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [showAnswer, setShowAnswer] = useState(false);
  //const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [userChoice, setUserChoice] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
  });

  useEffect(() => {
    if (showAnswer) return;
    async function getQuiz() {
      const res = await fetch("https://opentdb.com/api.php?amount=5&category=24");
      const data = await res.json();
      const allQuestions = data.results.map((result) => {
        let allAns = result.incorrect_answers.concat(result.correct_answer);
        shuffle(allAns);
        return {
          problem: result.question,
          correctAnswer: result.correct_answer,
          allAnswer: allAns
        }
      })
      setQuestions(allQuestions);
      //setLoading(false);
    }
    getQuiz();
  }, [showAnswer]);

  let questionElements = [];
  for (let i = 0; i < questions.length; i++) {
    questionElements.push(
      <Question
        key={i}
        id={i + 1}
        quiz={questions[i]}
        select={selectAnswer}
        showAns={showAnswer}
        choice={userChoice}
      />
    );
  }

  function toggleAnswer() {
    if (showAnswer) {
      setQuestions([]);
      //setLoading(true);
      setScore(0);
      setShowAnswer(false);
      setUserChoice({
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
      });
    } else {
      setShowAnswer(true);
    }
  }
  function selectAnswer(event) {
    const { name, value } = event.target;
    setUserChoice((prevChoice) => {
      return {
        ...prevChoice,
        [name]: value
      }
    });
    if (value == questions[name - 1].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
  }

  return (
    <div>
      {questionElements}
      {showAnswer && <span>{`You scored ${score}/5 correct answers`}</span>}
      <button onClick={toggleAnswer}>
        {showAnswer ? "Play again" : "Check Answers"}
      </button>
    </div>
  )
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

    // swap elements array[i] and array[j]
    // we use "destructuring assignment" syntax to achieve that
    // you'll find more details about that syntax in later chapters
    // same can be written as:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    [array[i], array[j]] = [array[j], array[i]];
  }
}