import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,  // Updated from Switch to Routes
  Route
} from 'react-router-dom';

function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, typ: type });
    setTimeout(() => setAlert(null), 1500);
  };

  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      showAlert('Dark Mode enabled', 'success');
      document.body.style.backgroundColor = '#222831';
      document.body.style.color = '#eeeeee';
    } else {
      setMode('light');
      showAlert('Light Mode enabled', 'success');
      document.body.style.backgroundColor = '#faf3e0';
      document.body.style.color = '#2c2c54';
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils2" aboutText="About TextUtils" mode={Mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes> {/* Updated from Switch to Routes */}
            <Route path="/about" element={<About />} /> {/* Use element instead of component */}
            <Route path="/" element={<TextForm heading="Enter your text Below" />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
