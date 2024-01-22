// ProgressBar.js
import React from 'react';

const ProgressBar = ({ currentStep, totalSteps }) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div>
      <div style={{ width: `${progress}%`, backgroundColor: 'lightblue', height: '20px' }}>
        {/* You can customize the appearance of the progress bar */}
      </div>
    </div>
  );
};

export default ProgressBar;
