// src/pages/ResultsPage.jsx
import React, { useEffect } from 'react';
import '../styles/ResultsPage.css';

const mockResults = {
  userName: 'John Doe',
  courseName: 'GATE - 2025',
  testName: 'Test - 1',
  score: 48,
  total: 60,
  rank: 35,
  answers: [
    {
      question: 'What is 2 + 2?',
      correctAnswer: '4',
      userAnswer: '4',
    },
    {
      question: 'What is capital of France?',
      correctAnswer: 'Paris',
      userAnswer: 'London',
    },
  ]
};

const ResultsPage = () => {
  const percentage = ((mockResults.score / mockResults.total) * 100).toFixed(2);

  useEffect(() => {
    // Trigger backend email API (example only)
    fetch('/api/send-confirmation-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: mockResults.userName,
        course: mockResults.courseName,
        test: mockResults.testName,
      }),
    });
  }, []);

  return (
    <div className="results-page">
      <h2>Test Submission Confirmation</h2>
      <div className="summary">
        <p><strong>Name:</strong> {mockResults.userName}</p>
        <p><strong>Course:</strong> {mockResults.courseName}</p>
        <p><strong>Test:</strong> {mockResults.testName}</p>
        <p><strong>Score:</strong> {mockResults.score}/{mockResults.total}</p>
        <p><strong>Percentage:</strong> {percentage}%</p>
        <p><strong>Rank:</strong> {mockResults.rank}</p>
      </div>

      <h3>Detailed Solutions</h3>
      <div className="solutions">
        {mockResults.answers.map((ans, idx) => (
          <div key={idx} className={`solution-box ${ans.correctAnswer === ans.userAnswer ? 'correct' : 'wrong'}`}>
            <p><strong>Q{idx + 1}:</strong> {ans.question}</p>
            <p><strong>Your Answer:</strong> {ans.userAnswer}</p>
            <p><strong>Correct Answer:</strong> {ans.correctAnswer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultsPage;
