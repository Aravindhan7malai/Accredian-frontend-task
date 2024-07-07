import React, { useState } from 'react';
import ReferralForm from './ReferralForm';
import './App.css';

const App = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="app-container">
      <div className="hero-section">
        <h1 className="title">Refer & Earn</h1>
        <button className="refer-button" onClick={handleOpen}>
          Refer Now
        </button>
      </div>
      {open && (
        <div className="modal-backdrop">
          <div className="modal">
            <button className="close-button" onClick={handleClose}>×</button>
            <ReferralForm handleClose={handleClose} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
