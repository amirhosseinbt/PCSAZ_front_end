import {React,useState,useEffect} from "react";
import { useNavigate} from "react-router-dom";
import axios from "axios";
import Logo from '../assets/media/logos/logo.png'
import './SignIn.css'
import { useDispatch, useSelector } from "react-redux";
import { jwtActions } from "../store/userAuthenticaion";
import ErrorMessage from "../general/ErrorMessage";
const SignIn = (props)=> {
   const dispath = useDispatch();
   useEffect(() => {
      document.body.classList.add("sign-up-in-page");
      return () => {
        document.body.classList.remove("sign-up-in-page");
      };
    }, []);
   const [phoneNumber , setPhoneNumber] = useState('');
   const [password , setPassword] =useState('');
   const [showErrorPhone , setShowErrorPhone] =useState(false);
   const [errorTextPhone , setErrorTextPhone] =useState('');
   const [showErrorPassword , setShowErrorPassword] =useState(false);
   const [errorTextPassword , setErrorTextPassword] =useState('');
   const navigate = useNavigate();
   const onPhoneNumberChange = (event) => {
         if(!(/^[0-9]+$/.test(event.target.value)) && (event.target.value.length !== 0))
         {
             setShowErrorPhone(true);
             setErrorTextPhone('شماره تلفن فقط شامل عدد هست.');
             setPhoneNumber('');
             
         }
         else if ((event.target.value.length !== 11) && (event.target.value.length !== 0))
         {
            setShowErrorPhone(true);
            setErrorTextPhone('شماره تلفن شامل 11 عدد هست.');
            setPhoneNumber('');
         }
         else
         {
            setShowErrorPhone(false);
            setPhoneNumber(event.target.value);
         }
  }
  const onPasswordChange = (event) => {
      setPassword(event.target.value);
  }
  const ip = useSelector(state=>state.ip.ip);
   const onSubmitSignin = (event) =>{
      event.preventDefault();
      if(phoneNumber.length === 0)
      {
         setShowErrorPhone(true);
         setShowErrorPassword(false);
         setErrorTextPhone('شماره تلفن نادرست می باشد.');
      }
      else if(password.length === 0)
      {
         setShowErrorPassword(true);
         setErrorTextPassword('رمز عبور نمی تواند خالی باشد.');
      }
      else
      {
         setShowErrorPassword(false);
         setShowErrorPhone(false);
         axios.post(`http://${ip}:8000/user/login/`, {
            phone : phoneNumber,
            password : password,
         })
         .then((res) => {
            dispath(jwtActions.Login(res.data.jwt));
            navigate('/user-panel');
         })
         .catch((err) => {
            setShowErrorPassword(true);
            setErrorTextPassword(err.response.data.error)
         });
      }
  }
    return(
      <div className="d-flex flex-column flex-root">
      <div className="d-flex flex-column flex-column-fluid flex-lg-row">
         <div className="d-flex flex-center w-lg-50 pt-15 pt-lg-0 px-10">
            <div className="d-flex flex-center flex-lg-start flex-column">
               <a href="../../demo1/dist/index.html" className="mb-7">
                  <img alt="Logo" src={Logo} />
               </a>
               <h2 className="text-white fw-normal m-0">پلتفرمی برای خرید سیستم دلخواه</h2>
            </div>
         </div>
         <div className="d-flex flex-column-fluid flex-lg-row-auto justify-content-center justify-content-lg-end p-12 p-lg-20">
            <div className="bg-body d-flex flex-column align-items-stretch flex-center rounded-4 w-md-600px p-20">
               <div className="d-flex flex-center flex-column flex-column-fluid px-lg-10 pb-15 pb-lg-20">
                  <form className="form w-100" action="post">
                     <div className="text-center mb-11">
                        <h1 className="text-dark fw-bolder mb-3">ورود</h1>
                        <div className="text-gray-500 fw-semibold fs-6">سامانه پی سی ساز</div>
                     </div>

                     <div className="fv-row mb-6">
                        <input placeholder="شماره تلفن همراه" name="phoneNumber" type="tel" autoComplete="off" className="form-control bg-transparent" dir="rtl" onChange={onPhoneNumberChange} />
                     </div>
                     {showErrorPhone?<ErrorMessage text={errorTextPhone}/>:null}
                     <div className="fv-row mb-6">
                        <input placeholder="رمز عبور" name="phoneNumber" type="password" autoComplete="off" className="form-control bg-transparent" dir="rtl" onChange={onPasswordChange}/>
                     </div>
                     {showErrorPassword?<ErrorMessage text={errorTextPassword}/>:null}

                     <div className="d-grid mb-10">
                        <button id="kt_sign_up_submit" className="btn btn-primary" onClick={onSubmitSignin}>
                           <span className="indicator-label">ورود</span>
                           <span className="indicator-progress">Please wait...
                           <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                        </button>
                     </div>
                     <div className="text-gray-500 text-center fw-semibold fs-6">آیا هنوز عضو نشده اید؟
                        <a href="/sign-up" className="link-primary fw-semibold p-1">ثبت نام</a>
                     </div>
                  </form>
               </div>
               <div className="d-flex flex-center px-lg-10">
                  <div className="d-flex fw-semibold text-primary fs-base gap-5" dir="rtl">
                     <a href="/">خانه</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
    );
}
export default SignIn;