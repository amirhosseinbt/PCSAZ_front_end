import {React,useEffect , useState} from "react";
import Logo from '../assets/media/logos/logo.png';
import { useNavigate} from "react-router-dom";
import axios from "axios";
import './SignUp.css';
import { useDispatch, useSelector } from "react-redux";
import { jwtActions } from "../store/userAuthenticaion";
import ErrorMessage from "../general/ErrorMessage";
const SignUp = ()=> {
   const dispath = useDispatch();
   const ip = useSelector(state=>state.ip.ip);
   
   useEffect(() => {
      document.body.classList.add("sign-up-in-page");
      return () => {
      document.body.classList.remove("sign-up-in-page");
      };
    }, []);
    const [showErrorFname , setShowErrorFname] =useState(false);
    const [errorTextFname , setErrorTextFname] =useState('');
    const [showErrorLname , setShowErrorLname] =useState(false);
    const [errorTextLname , setErrorTextLname] =useState('');
    const [showErrorPhone , setShowErrorPhone] =useState(false);
    const [errorTextPhone , setErrorTextPhone] =useState('');
    const [showErrorPassword , setShowErrorPassword] =useState(false);
    const [errorTextPassword , setErrorTextPassword] =useState('');
    const [showErrorAnOther , setShowErrorAnOther] =useState(false);
    const [errorTextAnOther , setErrorTextAnOther] =useState('');
    const [fname , setFname] = useState('');
    const [lname , setLname] = useState('');
    const [phoneNumber , setPhoneNumber] = useState('');
    const [password , setPassword] =useState('');
    const [referrerCode , setReferrerCode] =useState('');
    const navigate = useNavigate();
    const onFnameChange = (event) => {
       setFname(event.target.value);
   }
    const onLnameChange = (event) => {
       setLname(event.target.value);
   }
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
   const onReferrerCodeChange = (event) => {
       setReferrerCode(event.target.value);
   }
   const onSingUpSubmit = (event) =>
   {
      event.preventDefault();
      if(fname.length === 0)
      {
         setShowErrorFname(true);
         setShowErrorPassword(false);
         setShowErrorLname(false);
         setErrorTextFname(' نام نمی تواند خالی باشد.');
      }
      else if(lname.length === 0)
      {
         setShowErrorFname(false);
         setShowErrorPassword(false);
         setShowErrorLname(true);
         setErrorTextLname(' نام خانوادگی نمی تواند خالی باشد.');
      }
      else if(phoneNumber.length === 0)
      {
         setShowErrorFname(false);
         setShowErrorLname(false);
         setShowErrorPassword(false);
         setShowErrorPhone(true);
         setErrorTextPhone('شماره تلفن نادرست می باشد.');
      }
      else if(password.length === 0)
      {
         setShowErrorPassword(true);
         setErrorTextPassword('رمز عبور نمی تواند خالی باشد.');
      }
      else
      {
         setShowErrorFname(false);
         setShowErrorLname(false);
         setShowErrorPassword(false);
         setShowErrorPhone(false);
         axios.post(`http://${ip}:8000/user/signup/`, {
            first_name : fname,
            last_name : lname,
            phone : phoneNumber,
            password : password,
            referrer_code : referrerCode,
         })
         .then((res) => {
            dispath(jwtActions.Login(res.data.jwt));
            navigate('/user-panel');
         })
         .catch((err) => {
            setShowErrorAnOther(true);
            setErrorTextAnOther(err.response.data.error);
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
                        <h1 className="text-dark fw-bolder mb-3">ثبت نام</h1>
                        <div className="text-gray-500 fw-semibold fs-6">سامانه پی سی ساز</div>
                     </div>
                     
                     <div className="fv-row mb-8">
                        <input placeholder="نام" name="Fname" type="text" autoComplete="off" className="form-control bg-transparent" dir="rtl" onChange={onFnameChange}/>
                     </div>
                     {showErrorFname?<ErrorMessage text={errorTextFname}/>:null}
                     <div className="fv-row mb-8">
                        <input placeholder="نام خانوادگی" name="Lname" type="text" autoComplete="off" className="form-control bg-transparent" dir="rtl" onChange={onLnameChange}/>
                     </div>
                     {showErrorLname?<ErrorMessage text={errorTextLname}/>:null}

                     <div className="fv-row mb-6">
                        <input placeholder="شماره تلفن همراه" name="phoneNumber" type="tel" autoComplete="off" className="form-control bg-transparent" onChange={onPhoneNumberChange}/>
                     </div>
                     {showErrorPhone?<ErrorMessage text={errorTextPhone}/>:null}
                     <div className="text-muted mb-4" dir="rtl">تلفن همراه باید شامل یازده عدد باشد.</div>
                     <div className="fv-row mb-6">
                        <input placeholder="رمز عبور" name="phoneNumber" type="password" autoComplete="off" className="form-control bg-transparent" dir="rtl" onChange={onPasswordChange}/>
                     </div>
                     {showErrorPassword?<ErrorMessage text={errorTextPassword}/>:null}
                     <div className="fv-row mb-6">
                        <input placeholder="کد معرف" name="referrerCode" type="text" autoComplete="off" className="form-control bg-transparent" dir="rtl" onChange={onReferrerCodeChange}/>
                     </div>
                     {showErrorAnOther?<ErrorMessage text={errorTextAnOther}/>:null}
                     <div className="d-grid mb-10">
                        <button id="kt_sign_up_submit" className="btn btn-primary" onClick={onSingUpSubmit}>
                           <span className="indicator-label">ثبت نام</span>
                           <span className="indicator-progress">Please wait...
                           <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                        </button>
                     </div>
                     <div className="text-gray-500 text-center fw-semibold fs-6">از قبل یک حساب دارید؟
                        <a href="/sign-in" className="link-primary fw-semibold p-1">ورود</a>
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
export default SignUp;