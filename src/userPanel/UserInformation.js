import {React,useState} from "react";
import img1 from "../assets/media/avatars/300-7.jpg"

const UserInformation = (props) => 
{
    const [activeButton,setActiveButton] = useState('');
    return(
        <div className="card mb-5 mb-xl-10">
            <div className="card-body pt-9 pb-0">
                <div className="d-flex flex-wrap flex-sm-nowrap">
                    <div className="me-7 mb-4">
                        <div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
                            <img src={img1} alt="image"/>
                            <div className="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-body h-20px w-20px"></div>
                        </div>
                    </div>
                    <div className="flex-grow-1">
                        <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
                            <div className="d-flex flex-column">
                                <div className="d-flex align-items-center mb-2">
                                    <span href="#" className="text-gray-900 text-hover-primary fs-2 fw-bold me-1">نام و نام خانوادگی</span>
                                {props.vip?
                                <i class="ki-duotone ki-verify fs-1 text-primary">
                                    <span class="path1"></span>
                                    <span class="path2"></span>
                                </i>:
                                null}
                                
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-wrap flex-stack">
                            <div className="d-flex flex-column flex-grow-1 pe-8">
                                <div className="d-flex flex-wrap">
                                    <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                        <div className="d-flex align-items-center">
                                            <div className="fs-2 fw-bold counted" data-kt-countup="true" data-kt-countup-value="4500" data-kt-countup-prefix="﷼" data-kt-initialized="1">450,000,000</div>
                                        </div>
                                        <div className="fw-semibold fs-6 text-gray-400">موجودی کیف پول</div>
                                    </div>
                                    <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                        <div className="d-flex align-items-center">
                                            <div className="fs-2 fw-bold counted mb-1" >زمان ثبت نام</div>
                                        </div>
                                        <div className="fw-semibold fs-6 text-gray-400" dir="ltr">2022/02/01 10:32:33</div>
                                    </div>
                                    <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                        <div className="d-flex align-items-center">
                                            <div className="fs-2 fw-bold">20</div>
                                        </div>
                                        <div className="fw-semibold fs-6 text-gray-400">تعداد کدهای تخفیف معرفی</div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-column flex-grow-1 pe-8">
                                <div className="d-flex flex-wrap">
                                    <div class="card card-dashed flex-center min-w-175px my-3 p-6">
                                        <span class="fs-4 fw-semibold text-primary pb-1 px-2">تعداد افراد معرفی شده</span>
                                        <span class="fs-lg-2tx fw-bold d-flex justify-content-center">
                                            20
                                        </span>
                                    </div>
                                </div>
                                <div class="d-flex">
                                    <input id="kt_referral_link_input" type="text" class="form-control form-control-solid me-3 flex-grow-1" value="12548" readOnly/>
                                    <button id="kt_referral_program_link_copy_btn" class="btn btn-light btn-active-light-primary fw-bold flex-shrink-0" data-clipboard-target="#kt_referral_link_input">کپی کد معرفی</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold">
                    <li className="nav-item mt-2">
                        <button onClick={()=>{setActiveButton('address'); props.showOption('address')}} className={`nav-link text-active-primary ms-0 me-10 py-5 ${activeButton === 'address' || activeButton === ''?'active':''}`}> آدرس ها</button>
                    </li>
                    <li className="nav-item mt-2">
                        <button onClick={()=>{setActiveButton('discountCode');props.showOption('discountCode')}} className={`nav-link text-active-primary ms-0 me-10 py-5 ${activeButton === 'discountCode'?'active':''}`}>کد های تخفیف</button>
                    </li>
                    <li className="nav-item mt-2">
                        <button onClick={()=>{setActiveButton('shoppingCart');props.showOption('shoppingCart')}} className={`nav-link text-active-primary ms-0 me-10 py-5 ${activeButton === 'shoppingCart'?'active':''}`}>سبد های خرید</button>
                    </li>
                    <li className="nav-item mt-2">
                        <button  onClick={()=>{setActiveButton('orders');props.showOption('orders')}} className={`nav-link text-active-primary ms-0 me-10 py-5 ${activeButton === 'orders'?'active':''}`}>خرید ها</button>
                    </li>
                    <li className="nav-item mt-2">
                        <button onClick={()=>{setActiveButton('subscription');props.showOption('subscription')}} className={`nav-link text-active-primary ms-0 me-10 py-5 ${activeButton === 'subscription'?'active':''}`}>اشتراک</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default UserInformation;