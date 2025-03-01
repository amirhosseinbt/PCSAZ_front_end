import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './signUp/SignUp';
import SignIn from './signIn/SignIn';
import Error404 from './general/Error404';
import UserPanel from './userPanel/UserPanel';
import { useDispatch, useSelector } from 'react-redux';
function App() {
  const dispath = useDispatch();
  const jwt = useSelector(state=>state.jwt);
  return (
        <Router>
            <Routes>
                <Route  path='/' element={<UserPanel />} />
                <Route  path='/sign-up' element={<SignUp/>} />
                <Route  path='/sign-in' element={<SignIn />} />
                <Route  path='/*' element={<Error404/>} />
                {/* <Route path='/sign-up' element={<SignUp />} /> */}
            </Routes>
        </Router>

  );
}

export default App;
