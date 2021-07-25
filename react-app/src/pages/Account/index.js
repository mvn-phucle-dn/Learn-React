import React from 'react';
import useAuth from '../../hooks/useAuth';

const Account = () => {
  const auth = useAuth();

  const handleLogout = () => {
    auth.logout();
  }
  return (
    <div className="container">
      <p>You are login successfully </p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Account;
