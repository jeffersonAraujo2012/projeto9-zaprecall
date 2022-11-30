import { useState } from "react";

import Body from "./components/Body";
import Logo from "./components/Logo";
import "./css/reset.css";
import "./css/general.css";
import Flashcard from "./components/Flashcard";
import Footer from "./components/Footer";

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
    { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    {
      question: "O ReactDOM nos ajuda __",
      answer: "Interagindo com a DOM para colocar componentes React na mesma",
    },
    {
      question: "Usamos o npm para __",
      answer: "Gerenciar os pacotes necessários e suas dependências",
    },
    {
      question: "Usamos props para __",
      answer: "Passar diferentes informações para componentes",
    },
    {
      question: "Usamos estado (state) para __",
      answer:
        "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    },
  ];

  const [numQuestionsAnswered, setNumQuestionsAnswered] = useState(0);

  return (
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
          />
        );
      })}

      <Footer
        numQuestions={cards.length}
        numQuestionsAnswered={numQuestionsAnswered}
      />
    </Body>
  );
}

export default App;
