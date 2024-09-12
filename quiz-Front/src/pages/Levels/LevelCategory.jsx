import React from "react";
import { useNavigate } from "react-router-dom";

const levels = [
  {
    level: "Level I",
    questions: 7,
    time: "20 Min",
    progress: 25, // Progress percentage
  },
  {
    level: "Level II",
    questions: 7,
    time: "20 Min",
    progress: 25, // You can adjust the progress as per actual data
  },
  // Add more levels as required
];

const LevelCategory = () => {
  const navigate = useNavigate();
  const navigateToQuiz = () => {
    navigate("/levels/quiz");
  };
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Sub-Category</h2>
      {levels.map((level, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg p-4 mb-4 border border-gray-200  cursor-pointer"
          onClick={navigateToQuiz}
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold text-lg">{level.level}</p>
              <p>{level.questions} Questions</p>
              <p>Time: {level.time}</p>
            </div>
            <div className="w-24 h-6 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-yellow-500 rounded-full"
                style={{ width: `${level.progress}%` }}
              />
            </div>
            <span className="ml-2">{level.progress}%</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LevelCategory;
