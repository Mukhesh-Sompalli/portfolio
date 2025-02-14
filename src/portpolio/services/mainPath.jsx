import React, { useState } from 'react';
import Services from './services';
import HtmlTasks from './HtmlTasks'; // Create this component
import CssTasks from './CssTasks'; // Create this component
import JavaScriptTasks from './javaScript'; // Create this component
import ReactTasks from './React'; // Create this component

const MainApp = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'html-tasks':
        return <HtmlTasks />;
      case 'css-tasks':
        return <CssTasks />;
      case 'javascript-tasks':
        return <JavaScriptTasks />;
      case 'react-tasks':
        return <ReactTasks />;
      default:
        return <Services setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div>
      {renderPage()}
    </div>
  );
};

export default MainApp;
