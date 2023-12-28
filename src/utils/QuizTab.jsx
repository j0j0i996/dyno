import React, { useState } from "react";

const QuizQuestion = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const answers = [
    { id: 1, header: "Option d", text: "Option A" },
    { id: 2, header: "Option B", text: "Option A" },
    {
      id: 3,
      header: "Option C",
      text: "ation A",
    },
    { id: 4, header: "Option D", text: "Option A" },
  ];

  const handleAnswerClick = (answerId) => {
    setSelectedAnswer(answerId);
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {answers.map((answer) => (
          <div
            key={answer.id}
            onClick={() => handleAnswerClick(answer.id)}
            className={`m-5 mb-3 cursor-pointer items-center rounded border p-5 text-lg transition duration-300 ease-in-out ${
              selectedAnswer === answer.id
                ? "border-transparent bg-teal-200"
                : "border-transparent bg-white shadow-md hover:shadow-lg"
            }`}
          >
            <div className="mb-1 font-bold leading-snug tracking-tight">
              {answer.header}
            </div>
            <div className="text-gray-600">{answer.text}</div>
          </div>
        ))}
      </div>

      <div className="mt-4">
        {selectedAnswer !== null && (
          <p className="font-bold text-green-500">
            You selected:{" "}
            {answers.find((answer) => answer.id === selectedAnswer).text}
          </p>
        )}
      </div>
    </div>
  );
};

export default QuizQuestion;
