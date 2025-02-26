import React from "react";
import Logo from '../assets/media/logos/custom-2.svg'
import './SignUp.css'
const SignUp = ()=> {
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
                  <form className="form w-100" noValidate="novalidate" id="kt_sign_up_form" data-kt-redirect-url="../../demo1/dist/authentication/layouts/creative/sign-in.html" action="#">
                     <div className="text-center mb-11">
                        <h1 className="text-dark fw-bolder mb-3">ثبت نام</h1>
                        <div className="text-gray-500 fw-semibold fs-6">سامانه پی سی ساز</div>
                     </div>
                     
                     <div className="fv-row mb-8">
                        <input placeholder="نام" name="Fname" type="text" autoComplete="off" className="form-control bg-transparent" dir="rtl" />
                     </div>
                     <div className="fv-row mb-8">
                        <input placeholder="نام خانوادگی" name="Lname" type="text" autoComplete="off" className="form-control bg-transparent" dir="rtl" />
                     </div>
                     <div className="fv-row mb-6">
                        <input placeholder="شماره تلفن همراه" name="phoneNumber" type="tel" autoComplete="off" className="form-control bg-transparent" />
                     </div>
                     <div className="text-muted mb-4" dir="rtl">تلفن همراه باید شامل یازده عدد باشد.</div>
                     <div className="fv-row mb-6">
                        <input placeholder="کد معرف" name="referrerCode" type="text" autoComplete="off" className="form-control bg-transparent" dir="rtl" />
                     </div>

                     <div className="d-grid mb-10">
                        <button type="submit" id="kt_sign_up_submit" className="btn btn-primary">
                           <span className="indicator-label">ثبت نام</span>
                           <span className="indicator-progress">Please wait...
                           <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                        </button>
                     </div>
                     <div className="text-gray-500 text-center fw-semibold fs-6">از قبل یک حساب دارید
                        <a href="/sign-in" className="link-primary fw-semibold p-1">ورود</a>
                     </div>
                  </form>
               </div>
               <div className="d-flex flex-center px-lg-10">
                  <div className="d-flex fw-semibold text-primary fs-base gap-5" dir="rtl">
                     <a href="../../demo1/dist/pages/contact.html" target="_blank">با ما تماس بگیرید</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
    );
}
export default SignUp;