// Progress.js
import React from 'react';

const Progress = ({ value, max }) => {
  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${(value / max) * 100}%` }}></div>
    </div>
  );
};

export default Progress;
