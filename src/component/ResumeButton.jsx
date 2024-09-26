import React, { useState } from 'react';

const ResumeButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleDownload = () => {
    const resumeLink = '/resume/Avinash_Reddy_Resume.pdf'; // Path to resume
    const link = document.createElement('a');
    link.href = resumeLink;
    link.setAttribute('download', 'Avinash_Reddy_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={handleDownload}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`p-2 border border-white rounded-full transition-all duration-300 ease-in-out flex justify-center items-center ${isHovered ? 'pr-4 pl-4 scale-105' : 'pr-2 pl-2'}`} // Smooth transition with scaling
      >
        <img src='/assets/download.png' alt="Download" className="inline-block w-5 h-5" />
        {isHovered && <span className={`ml-2 text-white-700 transition-opacity duration-300 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          Resume
        </span>}
        
      </button>
    </div>
  );
};

export default ResumeButton;
