import React from 'react';
import QuestionItem from './QuestionItem';
import './App.css';
import questions from './data/data.js';

function App() {
  return (
    questions.map(
      (question) => <QuestionItem key={question.id} title={question.title} 
      upVoteCount={question.upVoteCount}
      answerCount={question.answerCount}
      viewCount={question.viewCount}
      tags={question.tags}
      timestamp={question.timestamp}
      user={question.user}
      answered={question.answered}
      ></QuestionItem>
    )
  );
}
export default App;
