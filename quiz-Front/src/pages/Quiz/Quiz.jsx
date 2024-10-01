import React, { useState, useEffect } from "react";
import { useQuizData } from "../../hooks/quizhooks/useQuizData";
import { useParams } from "react-router-dom";
import { accessToken } from "../../Configs/libs";

const Quiz = () => {
  const { id } = useParams();
  const { quizData } = useQuizData(id);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(900);

  const handleAnswerSelect = (questionId, answer) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = async () => {
    const apiUrl = `http://localhost:8000/api/v1/level/submit/${id}`;

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: accessToken,
        },
        body: JSON.stringify(answers),
      });

      if (!response.ok) {
        throw new Error("Error submitting answers");
      }

      const data = await response.json();
      console.log("Submission successful:", data);
    } catch (error) {
      console.error("Error submitting answers:", error);
    }
  };

  // Timer logic (optional, add countdown if needed)
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
  //   }, 1000);
  //   return () => clearInterval(timer);
  // }, []);

  // const formatTime = (seconds) => {
  //   const minutes = Math.floor(seconds / 60);
  //   const sec = seconds % 60;
  //   return `${minutes}:${sec < 10 ? "0" : ""}${sec}`;
  // };

  if (!quizData || quizData.length === 0 || !quizData[currentQuestion]) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded shadow">
      <h1 className="text-2xl font-semibold mb-4">
        Quiz - {quizData[currentQuestion]?.model_type}
      </h1>
      <div className="flex justify-between items-center mb-4">
        <p>
          Question {currentQuestion + 1} of {quizData?.length}
        </p>
        {/* <p className="text-green-500 text-xl font-bold">
          {formatTime(timeLeft)}
        </p> */}
      </div>
      <p className="text-lg mb-4">{quizData[currentQuestion]?.title}</p>

      <div className="space-y-2">
        {["option1", "option2", "option3", "option4"].map(
          (optionKey, index) => (
            <button
              key={index}
              className={`block w-full text-left p-2 rounded ${
                answers[quizData[currentQuestion]._id] ===
                quizData[currentQuestion][optionKey]
                  ? "bg-green-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() =>
                handleAnswerSelect(
                  quizData[currentQuestion]._id,
                  quizData[currentQuestion][optionKey]
                )
              }
            >
              {quizData[currentQuestion][optionKey]}
            </button>
          )
        )}
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
            disabled={!answers[quizData[currentQuestion]._id]}
          >
            Next
          </button>
        ) : (
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={handleSubmit}
            disabled={!answers[quizData[currentQuestion]._id]}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
