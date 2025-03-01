import {React,useEffect} from "react";
import './Error404.css';
import img1 from '../assets/media/auth/404-error.png'
const Error404 = ()=>{
    useEffect(() => {
        document.body.classList.add("error-404-page");
        return () => {
          document.body.classList.remove("error-404-page");
        };
      }, []);
    return(
    <div class="d-flex flex-column flex-root">
        <div class="d-flex flex-column flex-center flex-column-fluid">
            <div class="d-flex flex-column flex-center text-center p-10">
                <div class="card card-flush w-lg-650px py-5">
                    <div class="card-body py-15 py-lg-20">
                        <h1 class="fw-bolder fs-2hx text-gray-900 mb-4" dir="rtl">ای وای!</h1>
                        <div class="fw-semibold fs-6 text-gray-500 mb-7">ما این صفحه را پیدا نکردیم</div>
                        <div class="mb-3">
                            <img src={img1} class="mw-100 mh-300px theme-light-show" alt="" />
                            {/* <img src="assets/media/auth/404-error-dark.png" class="mw-100 mh-300px theme-dark-show" alt="" /> */}
                        </div>
                        <div class="mb-0">
                            <a href="/" class="btn btn-sm btn-primary">برگشت به خانه</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Error404;
