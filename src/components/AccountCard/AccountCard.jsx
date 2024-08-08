import React from 'react';


const AccountCard = ({ accountNumber, bankName, accountHolderName }) => {
  return (
    <div className="Account-bg w-full max-w-sm mx-auto  text-white rounded-xl shadow-lg p-6">
      <div className="flex flex-col justify-between h-full">
        <div className="mb-4">
          <h2 className="text-lg font-semibold">{bankName}</h2>
        </div>
        <div className="mb-4">
          <h3 className="text-2xl tracking-wider font-mono">{accountNumber}</h3>
        </div>
        <div>
          <p className="text-lg font-medium">{accountHolderName}</p>
        </div>
      </div>
    </div>
  );
};

export default AccountCard;