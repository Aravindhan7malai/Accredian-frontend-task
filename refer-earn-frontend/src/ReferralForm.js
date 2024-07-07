import React from 'react';

const ReferralForm = ({ handleClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
    handleClose();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold">Referral Form</h2>
      <input className="border p-2 rounded" type="text" placeholder="Referrer Name" required />
      <input className="border p-2 rounded" type="email" placeholder="Referrer Email" required />
      <input className="border p-2 rounded" type="text" placeholder="Referee Name" required />
      <input className="border p-2 rounded" type="email" placeholder="Referee Email" required />
      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ReferralForm;
