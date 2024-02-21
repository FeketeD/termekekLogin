import React, { useState } from 'react';
import { BrowserRouter as Router, NavLink, Routes, Route } from 'react-router-dom'
import Bejelentkezes from './Bejelentkezes'
import Termekek from './termekek';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (credentials) => {
    if (credentials.username && credentials.password) {
      setIsLoggedIn(true);
    } else {
      alert('Please enter username and password');
    }
  };

  return (
      <Router>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={`/login`} className="nav-link">
                <span className="nav-link">Bejelentkezés</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/login" element={<Bejelentkezes/>}/>
        <Route path="/termekek" element={<Termekek />}/>
      </Routes>
     </Router>
  );
};

export default App;




