import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './signUp/SignUp';
import SignIn from './signIn/SignIn';
import Error404 from './general/Error404';
import UserPanel from './userPanel/UserPanel';
function App() {
  const path = window.location.pathname;
  document.body.setAttribute('id',path === '/sign-up' || path === '/sign-in'? 'sign-up-in-page':path === '/'?'':'error-404-page');
  return (
        <Router>
            <Routes>
                <Route exact path='/' element={<UserPanel/>} />
                <Route path='/sign-up' element={<SignUp/>} />
                <Route path='/sign-in' element={<SignIn/>} />
                <Route path='/*' element={<Error404/>} />
                {/* <Route path='/sign-up' element={<SignUp />} /> */}
            </Routes>
        </Router>
    // <SignIn/>
  );
}

export default App;
