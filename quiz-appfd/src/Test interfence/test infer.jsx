// src/pages/TestInterface.jsx
import React, { useState } from 'react';
import TestSidebar from '../components/TestSidebar';
import QuestionPanel from '../components/QuestionPanel';
import Numpad from '../components/Numpad';
import '../styles/TestInterface.css';

const questions = [
  { id: 1, type: 'MCQ', question: 'What is 2 + 2?', options: ['2', '3', '4', '5'], answer: '4' },
  { id: 2, type: 'NAT', question: 'Enter value of √16:', answer: '4' },
];

const TestInterface = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleAnswer = (id, value) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  return (
    <div className="test-interface">
      <TestSidebar
        questions={questions}
        current={currentQuestion}
        setCurrent={setCurrentQuestion}
      />
      <div className="test-main">
        <QuestionPanel
          question={questions[currentQuestion]}
          onAnswer={handleAnswer}
          userAnswer={answers[questions[currentQuestion].id]}
        />
        {questions[currentQuestion].type === 'NAT' && (
          <Numpad onInput={val => handleAnswer(questions[currentQuestion].id, val)} />
        )}
      </div>
    </div>
  );
};

