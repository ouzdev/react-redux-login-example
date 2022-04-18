import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Login from './components/login';
import Logout from './components/logout';
import { selectUser } from './features/loginSlice';
function App() {
  const user  =useSelector(selectUser)
  return (
    <div>
      {user ? <Logout /> : <Login />}
    </div>
  );
}

export default App;
