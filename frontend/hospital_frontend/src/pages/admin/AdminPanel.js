import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminPanel = () => {
    const token = localStorage.getItem('access_token');
    
    if (!token) {
        return <Navigate to="/login" replace />;
    }

    return (
        
    <div className='text-xl'>
        
        <h1>Admin Panel</h1>
        <p>Welcome to the admin dashboard!</p>
        
    </div>
    
    );
};

export default AdminPanel;