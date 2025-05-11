import React from 'react';
import '../App.css';
import SyllabusItems from './SyllabusItems';

function Syllabus() {
  return (
    <main className="syllabus-page">
      <div className="syllabus-header">
        <h1>course syllabus</h1>
      </div>
      <div className = "syllabus-container">
      <SyllabusItems/>
      </div>
    </main>
  );
}

export default Syllabus;
