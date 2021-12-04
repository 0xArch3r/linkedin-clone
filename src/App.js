import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Header from './components/Headers/Header';
import SideBar from './components/Body/SideBar';
import Feed from './components/Body/Feed/Feed';
import { selectUser, logout, login } from "./features/userSlice";
import { useSelector } from "react-redux";
import Login from './components/Login/Login';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login({
          email: user.email,
          uid: user.uid,
          displayName: user.displayName,
          photoUrl: user.photoUrl
        }))
      } else {
        dispatch(logout({}))
      }
    })
  }, [])

  return (
    <div className="app">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="div app__body">
          <SideBar />
          <Feed />
          {/* Widgets */ }
        </div>
      )}
    </div>
  );
}

export default App;
