import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './signUp/SignUp';
import SignIn from './signIn/SignIn';
import Error404 from './general/Error404';
import UserPanel from './userPanel/UserPanel';
import { useDispatch } from 'react-redux';
import { ipActions } from './store/userAuthenticaion';
import Compatibility from './compatibility/Compatibility';
import MainPage from './mainPage/MainPage';
function App() {
  const dispath = useDispatch();
  const {hostname} = window.location
  dispath(ipActions.SetIp(`${hostname}`));

  return (
        <Router>
            <Routes>
                <Route  path='/' element={<MainPage />} />
                <Route  path='/user-panel' element={<UserPanel />} />
                <Route  path='/sign-up' element={<SignUp/>} />
                <Route  path='/sign-in' element={<SignIn />} />
                <Route  path='/compatibility' element={<Compatibility />} />
                <Route  path='/*' element={<Error404/>} />
            </Routes>
        </Router>

  );
}

export default App;
