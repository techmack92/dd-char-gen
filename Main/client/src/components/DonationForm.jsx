import React from 'react';

const DonationForm = ({ handleDonate }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    handleDonate();
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <button className="btn" type="submit">Checkout</button>
      </form>
    </div>
  );
};

export default DonationForm;
