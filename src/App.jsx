import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Cold brew, Latte, Espresso are all examples of which beverage?",
      answers: [
        {
          text: "Tea",
          correct: false,
        },
        {
          text: " Fruit juice",
          correct: false,
        },
        {
          text: "Lassi",
          correct: false,
        },
        {
          text: "Coffee ",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "Rajat Sharma, Sonia Singh, Rahul Kanwal and Sumit Awasthi are all associated with which profession?",
      answers: [
        {
          text: "Astrology",
          correct: false,
        },
        {
          text: "Law",
          correct: false,
        },
        {
          text: "Medicine",
          correct: false,
        },
        {
          text: " Journalism",
          correct: true,
        },
      ],
    },
    {
      id: 6,
      question: "In Sept 2020, which iconic motorcycle brand announced that it is shutting down its manufacturing facilities in India?",
      answers: [
        {
          text: "Harley Davidson",
          correct: true,
        },
        {
          text: " Triumph",
          correct: false,
        },
        {
          text: "Indian",
          correct: false,
        },
        {
          text: "Arctic cat",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "With Which of these states do Chhattisgarh, Jharkhand and Andhra Pradesh all share their borders?",
      answers: [
        {
          text: "Madhya Pradesh",
          correct: false,
        },
        {
          text: "Odisha",
          correct: true
        },
        {
          text: "Bihar",
          correct: false,
        },
        {
          text: "Uttar Pradesh",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Which was the colour of the saree worn by Madhuri Dixit in the song 'Didi tera dewar deewana,' which triggered a fashion trend in the country?",
      answers: [
        {
          text: "Green",
          correct: false,
        },
        {
          text: "Purple",
          correct: true,
        },
        {
          text: " Red",
          correct: false,
        },
        {
          text: "Yellow",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "The leader heard in this audio clip has never served in which of these ministries?",
      answers: [
        {
          text: " Human Resource Development",
          correct: false,
        },
        {
          text: " Women and Child Development",
          correct: false,
        },
        {
          text: "Law and Justice",
          correct:true,
        },
        {
          text: "Textiles",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Which is the largest living species of tortoise in the world, which may weigh about 400 kg?",
      answers: [
        {
          text: "Sulcata Tortoise",
          correct: false,
        },
        {
          text: "Grenada Tortoise",
          correct: false,
        },
        {
          text: "Golden Greek Tortoise",
          correct: false,
        },
        {
          text: "Galapagos Tortoise",
          correct: true,
        },
      ],
    },
    {
      id: 11,
      question: "Which of the following dynasties did the Kanva dynasty overthrow to come to power around 73 BCE in Magadha?",
      answers: [
        {
          text: "Maurya dynasty",
          correct: false,
        },
        {
          text: "Shunga dynasty",
          correct: true,
        },
        {
          text: "Chera dynasty",
          correct: false,
        },
        {
          text: "Pala dynastyf",
          correct:false,
        },
      ],
    },
    {
      id: 12,
      question: "Who became the first chancellor of the Aligarh Muslim University in 1920?",
      answers: [
        {
          text: "Sultan Jahan Begum",
          correct: true,
        },
        {
          text: "Maulana Abul Kalam Azad",
          correct: false,
        },
        {
          text: "Sir Syed Ahmad Khan",
          correct: false,
        },
        {
          text: "Mir Usman Ali Khan",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Where in Singapore did Netaji Subhash Chandra Bose make the first proclamation of an Azad Hind government?",
      answers: [
        {
          text: " National Gallery of Singapore",
          correct: false,
        },
        {
          text: "National University of Singapore",
          correct: false,
        },
        {
          text: "Fort Canning park",
          correct: false,
        },
        {
          text: "Cathay cinema hall",
          correct: true,
        },
      ],
    },
    {
      id: 14,
      question: "In the Ramayana, Which demon impersonated Rama's voice, screaming, 'Lakshman! Help me'?",
      answers: [
        {
          text: "Surpanakha",
          correct: false,
        },
        {
          text: "Maricha",
          correct: true,
        },
        {
          text: "Dushana",
          correct: false,
        },
        {
          text: "Khara",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "In 2013, where did the natural calamity known as Himalayan tsunami occur??",
      answers: [
        {
          text: "Uttrakhand",
          correct: true,
        },
        {
          text: "Arunachal Pradesh",
          correct: false,
        },
        {
          text: "Jammu and Kashmir",
          correct: false,
        },
        {
          text: "Sikkim",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "1 Thousand" },
        { id: 2, amount: "10 Thousand" },
        { id: 3, amount: "50 Thousand" },
        { id: 4, amount: "1 lakh" },
        { id: 5, amount: "3 lakh" },
        { id: 6, amount: "6 lakh" },
        { id: 7, amount: "12 lakh" },
        { id: 8, amount: "25 lakh" },
        { id: 9, amount: "50 lakh" },
        { id: 10, amount: "1 crore" },
        { id: 11, amount: "3 crore" },
        { id: 12, amount: "5 crore" },
        { id: 13, amount: "7 crore" },
        { id: 14, amount: "10 crore" },
        { id: 15, amount: "25 crore" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
