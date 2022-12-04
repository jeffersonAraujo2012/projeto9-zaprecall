import { useState } from "react";

import Body from "./components/Body";
import Logo from "./components/Logo";
import "./css/reset.css";
import "./css/general.css";
import Flashcard from "./components/Flashcard";
import Footer from "./components/Footer";
import InitialScreen from "./components/InitialScreen";

function App() {
  const cards = [
    {
      question: "O que é JSX?",
      answer: "Uma extensão da linguagem JavaScript",
    },
    {
      question: "O React é __",
      answer: "Uma biblioteca JavaScript para construção de interfaces",
    },
    { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
  ];

  const [numQuestionsAnswered, setNumQuestionsAnswered] = useState(0);
  const [showInitialScreen, setShowInitialScreen] = useState(true);
  const [statusAnsweredQuestions, setStatusAnsweredQuestions] = useState([]);

  function addStatusAnsweredQuestions(status) {
    setStatusAnsweredQuestions([...statusAnsweredQuestions, status]);
  }

  return (
    <>
      {showInitialScreen ? (
        <InitialScreen setShowInitialScreen={setShowInitialScreen} />
      ) : (
        <Body>
          <Logo />

          {cards.map((card, index) => {
            return (
              <Flashcard
                text={`Pergunta ${index + 1}`}
                card={card}
                key={index}
                numQuestionsAnswered={numQuestionsAnswered}
                setNumQuestionsAnswered={setNumQuestionsAnswered}
                addStatusAnsweredQuestions={addStatusAnsweredQuestions}
              />
            );
          })}

          <Footer
            numQuestions={cards.length}
            numQuestionsAnswered={numQuestionsAnswered}
            statusAnsweredQuestions={statusAnsweredQuestions}
          />
        </Body>
      )}
    </>
  );
}

export default App;
