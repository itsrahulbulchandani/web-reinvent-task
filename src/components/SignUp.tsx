// src/pages/SignUp.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/api';
import FormInput from '../components/FormInput';
import Modal from './Modal';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await registerUser(email, password);
      console.log(response);
      setShowModal(true);
    } catch (err) {
      console.error('Registration failed:', err);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/signin');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign Up
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={e => e.preventDefault()}>
          <div className="rounded-md shadow-sm space-y-4">
          <div className="pt-2">
            <FormInput
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            >
            </FormInput>
            </div>
            <div className="mt-8">
            <FormInput
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            </div>
          </div>
          <div>
            <button
              type="button"
              onClick={handleRegister}
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
      <Modal isOpen={showModal} onClose={handleCloseModal}>
        <h2 className="text-xl font-bold mb-4">Registration Successful!</h2>
        <p>You have successfully registered. Click close to proceed to login.</p>
        <button onClick={handleCloseModal} className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600">Close</button>
      </Modal>
    </div>
  );
};

export default SignUp;
