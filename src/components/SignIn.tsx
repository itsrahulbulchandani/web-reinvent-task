// src/pages/SignIn.tsx
import React, { useState } from 'react';
import FormInput from '../components/FormInput';
import { loginUser } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout, setCredentials } from '../features/auth/authSlice';
import Modal from './Modal';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const response = await loginUser(email, password);
      console.log(response);
      if (response.data && response.data.token) {
        dispatch(setCredentials(response.data)); 
        console.log("Login successful:", response.data.token);
        navigate('/dashboard');
      } else {
        dispatch(logout()); 
        setError('No token received, check credentials and try again.');
      }
    } catch (err) {
      setError('Invalid credentials or server error');
      console.error(err);
    }
  };

  const handleNavigateToSignUp = () => {
    navigate('/signup'); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign In
          </h2>
        </div>
        <form className="mt-8 space-y-4">
          <div className="rounded-md shadow-sm space-y-3">
            <div>
            <FormInput
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            >
              {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
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
              onClick={handleLogin}
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600"
            >
              Sign In
            </button>
            <button
              onClick={handleNavigateToSignUp}
              className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
