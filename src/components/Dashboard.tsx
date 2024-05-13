import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { useNavigate } from 'react-router-dom';
import { logout } from '../features/auth/authSlice';
import Modal from './Modal';

const Dashboard: React.FC = () => {
    const [showModal, setShowModal] = useState(false);

    const token = useSelector((state: RootState) => state.auth.token);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        dispatch(logout());
        navigate('/signin');
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-xl text-gray-700">Welcome to your dashboard. Your token is: <span className="font-bold text-gray-700">{token}</span></p>
            <div className="flex flex-col items-center justify-center bg-gray-100">
                <button
                    type="button"
                    onClick={handleLogout}
                    className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600"
                >
                    Logout
                </button>
            </div>
            <Modal isOpen={showModal} onClose={handleCloseModal}>
                <h2 className="text-xl font-bold mb-4">Logged out!</h2>
                <p>You have successfully Logged out.</p>
                <button onClick={handleCloseModal} className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600">Close</button>
            </Modal>
        </div>
    );
};

export default Dashboard;
