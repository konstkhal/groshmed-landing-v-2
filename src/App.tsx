import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './onepirate/Home';
import Privacy from './onepirate/Privacy';
import SignIn from './onepirate/SignIn';
import SignUp from './onepirate/SignUp';
import ForgotPassword from './onepirate/ForgotPassword';
import Terms from './onepirate/Terms';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-up" element={<SignIn />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
