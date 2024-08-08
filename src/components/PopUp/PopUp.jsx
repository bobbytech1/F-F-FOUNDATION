import React, { useState } from 'react';
import Modal from 'react-modal';
import AccountCard from '../AccountCard/AccountCard';
import { useModal } from '../../context/useModal';

Modal.setAppElement('#root');

const ModalPopup = () => {
    const { isModalOpen, closeModal } = useModal();
    return (
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Account Details"
        className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto mt-20"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <h2 className="text-2xl font-bold mb-4">Account Details</h2>
        <p className="mb-4">Here is the details of the account you are to pay into:</p>
        <AccountCard
          bankName="John Doe"
          accountNumber="1234 5678 9012 3456"
          accountHolderName="Access Bank"
        />
         <div className="mt-6 bg-white text-blue-500 p-4 rounded-lg shadow-lg">
        <p className="text-center font-semibold">Thank you for considering a donation to <b>First Floor Foundation!</b></p>
        <p className="text-center">Your generosity helps us continue our mission. This account is dedicated solely to our charitable activities.</p>
      </div>
        <button
          onClick={closeModal}
          className="mt-6 bg-red-500 text-white p-2 rounded"
        >
          Close
        </button>
      </Modal>
    );
  };
  
  export default ModalPopup;