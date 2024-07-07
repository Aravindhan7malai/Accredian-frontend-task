import React from 'react';
import './ReferralForm.css';

const ReferralForm = ({ handleClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
    handleClose();
  };

  return (
    <form onSubmit={handleSubmit} className="referral-form">
      <h2 className="form-title">Referral Form</h2>
      <input className="form-input" type="text" placeholder="Referrer Name" required />
      <input className="form-input" type="email" placeholder="Referrer Email" required />
      <input className="form-input" type="text" placeholder="Referee Name" required />
      <input className="form-input" type="email" placeholder="Referee Email" required />
      <button className="submit-button" type="submit">Submit</button>
    </form>
  );
};

export default ReferralForm;
