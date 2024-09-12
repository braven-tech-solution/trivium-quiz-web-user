import React, { useState } from "react";

const quizData = [
  {
    question:
      "Which programming language is used to build Flutter applications?",
    options: ["Kotlin", "Dart", "Java", "Go"],
    correctAnswer: "Dart",
  },
  {
    question: "Which company developed the React library?",
    options: ["Google", "Facebook", "Microsoft", "Amazon"],
    correctAnswer: "Facebook",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Cascading System Style",
      "Color Style Sheets",
      "Computer Style Sheets",
    ],
    correctAnswer: "Cascading Style Sheets",
  },
  {
    question: "What is the default port for HTTP?",
    options: ["80", "443", "8080", "21"],
    correctAnswer: "80",
  },
  {
    question: "Which of the following is a NoSQL database?",
    options: ["MySQL", "MongoDB", "PostgreSQL", "SQLite"],
    correctAnswer: "MongoDB",
  },
  {
    question: "What does JSON stand for?",
    options: [
      "JavaScript Object Notation",
      "JavaScript Oriented Network",
      "Java Syntax Object",
      "None of the above",
    ],
    correctAnswer: "JavaScript Object Notation",
  },
  {
    question: "Which of these is a JavaScript framework?",
    options: ["Laravel", "React", "Django", "Ruby on Rails"],
    correctAnswer: "React",
  },
  {
    question:
      "What is the name of the repository hosting service used for version control?",
    options: ["GitHub", "Docker", "Kubernetes", "Jenkins"],
    correctAnswer: "GitHub",
  },
  {
    question: "What is the command to initialize a new Git repository?",
    options: ["git init", "git start", "git new", "git create"],
    correctAnswer: "git init",
  },
  {
    question: "What does the acronym API stand for?",
    options: [
      "Application Programming Interface",
      "Applied Programming Internet",
      "Application Process Interface",
      "None of the above",
    ],
    correctAnswer: "Application Programming Interface",
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    options: ["<br>", "<lb>", "<break>", "<newline>"],
    correctAnswer: "<br>",
  },
  {
    question:
      "In JavaScript, which of the following is used to define a variable?",
    options: ["var", "let", "const", "All of the above"],
    correctAnswer: "All of the above",
  },
  {
    question:
      "Which CSS property is used to change the text color of an element?",
    options: ["text-color", "color", "font-color", "style-color"],
    correctAnswer: "color",
  },
  {
    question: "What is the purpose of the HTML `<title>` tag?",
    options: [
      "To define the document's title in the browser tab",
      "To define the main heading",
      "To define the website's description",
      "None of the above",
    ],
    correctAnswer: "To define the document's title in the browser tab",
  },
  {
    question: "Which of the following is a valid HTTP method?",
    options: ["FETCH", "POST", "INSERT", "GET-POST"],
    correctAnswer: "POST",
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0); // Track current question
  const [answers, setAnswers] = useState(Array(15).fill(null)); // Store user answers
  const [timeLeft, setTimeLeft] = useState(900); // Timer: 15 mins = 900 seconds

  // Handle answer selection
  const handleAnswerSelect = (index) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = index;
    setAnswers(newAnswers);
  };

  // Handle next question
  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  // Handle previous question
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  // Handle submit quiz
  const handleSubmit = () => {
    // Perform your submit logic here (save answers, calculate score, etc.)
    console.log("User answers:", answers);
  };

  // Timer logic (useEffect could be used for continuous countdown)
  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${minutes}:${sec < 10 ? "0" : ""}${sec}`;
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded shadow">
      <h1 className="text-2xl font-semibold mb-4">Quiz - 01</h1>
      <div className="flex justify-between items-center mb-4">
        <p>Question {currentQuestion + 1} of 15</p>
        <p className="text-green-500 text-xl font-bold">
          {formatTime(timeLeft)}
        </p>
      </div>
      <p className="text-lg mb-4">{quizData[currentQuestion].question}</p>
      <div className="space-y-2">
        {quizData[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            className={`block w-full text-left p-2 rounded ${
              answers[currentQuestion] === index
                ? "bg-green-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => handleAnswerSelect(index)}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="flex justify-between mt-6">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
        >
          Previous
        </button>
        {currentQuestion < quizData.length - 1 ? (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleNext}
            disabled={answers[currentQuestion] === null}
          >
            Next
          </button>
        ) : (
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={handleSubmit}
            disabled={answers[currentQuestion] === null}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
