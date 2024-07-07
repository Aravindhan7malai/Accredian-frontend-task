import React, { useState } from 'react';
import ReferralForm from './ReferralForm';

const App = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="container mx-auto text-center my-10">
      <h1 className="text-4xl font-bold">Refer & Earn</h1>
      <button className="mt-5 bg-blue-500 text-white py-2 px-4 rounded" onClick={handleOpen}>
        Refer Now
      </button>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <ReferralForm handleClose={handleClose} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
