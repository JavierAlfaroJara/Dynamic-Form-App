import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import FormPage from './pages/FormPage';
import ThankYouPage from './pages/ThankYouPage';

const App: React.FC = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" Component={FormPage} />
        <Route path="/thank-you" Component={ThankYouPage} />
      </Routes>
    </Router>
  );
};

export default App;