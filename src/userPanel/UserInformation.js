import {React,useState} from "react";
import img1 from "../assets/media/avatars/blank.png"
import { useSelector } from "react-redux";

const UserInformation = (props) => 
{
    const giftCode = useSelector(state=>state.discountCode.discountCode);
    const Info = useSelector(state=>state.userInfo.userInfo);
    const fullName = Info.first_name + ' ' + Info.last_name;
    const [activeButton,setActiveButton] = useState('');
    const [clicked,setClicked] = useState('');
    const [copyButtonText,setCopyButtonText] = useState('کپی کردن کد معرفی');
    const handleCopyClick = () => {
        const textToCopy = document.getElementById("kt_referral_link").textContent;
    
        if (navigator.clipboard){
          navigator.clipboard
            .writeText(textToCopy)
            .then(() => {
              setCopyButtonText("کپی شد !");
              setClicked("btn-active-light-primary");
              setTimeout(() => {
                setCopyButtonText("کپی کردن کد معرفی");
                setClicked("");
              }, 2000);
            })
            .catch((err) => {
                console.error("Failed to copy text: ", err);
                alert("Failed to copy text. Please try again.");
            });
        }
        else {
          const textarea = document.createElement("textarea");
          textarea.value = textToCopy;
          textarea.style.position = "fixed"; // Avoid scrolling to bottom
          document.body.appendChild(textarea);
          textarea.focus();
          textarea.select();
          try {
            const successful = document.execCommand("copy");
            if (successful) {
              setCopyButtonText("کپی شد !");
              setClicked("btn-active-light-primary");
              setTimeout(() => {
                setCopyButtonText("کپی کردن کد معرفی");
                setClicked("");
              }, 2000);
            } else {
              console.error("Failed to copy text");
              alert("Failed to copy text. Please copy manually.");
            }
          } catch (err) {
            console.error("Failed to copy text: ", err);
            alert("Failed to copy text. Please copy manually.");
          }
          document.body.removeChild(textarea);
        }
    };
    
    return(
        <div id="user_info" className="card mb-5 mb-xl-10">
            <div className="card-body pt-9 pb-0">
                <div className="d-flex flex-wrap flex-sm-nowrap">
                    <div className="me-7 mb-4">
                        <div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
                            <img src={img1} alt=""/>
                            <div className="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-body h-20px w-20px"></div>
                        </div>
                    </div>
                    <div className="flex-grow-1">
                        <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
                            <div className="d-flex flex-column">
                                <div className="d-flex align-items-center mb-2">
                                    <span href="#" className="text-gray-900 text-hover-primary fs-2 fw-bold me-1">{fullName}</span>
                                {Info.is_vip?
                                <i className="ki-duotone ki-verify fs-1 text-primary">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
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
                                            <div className="fs-2 fw-bold counted" data-kt-countup="true" data-kt-countup-value="4500" data-kt-countup-prefix="﷼" data-kt-initialized="1">{Info.wallet_balance}</div>
                                        </div>
                                        <div className="fw-semibold fs-6 text-gray-400">موجودی کیف پول</div>
                                    </div>
                                    <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                        <div className="d-flex align-items-center">
                                            <div className="fs-2 fw-bold counted mb-1" dir="ltr">{Info.client_timestamp}</div>
                                        </div>
                                        <div className="fw-semibold fs-6 text-gray-400">زمان ثبت نام</div>
                                    </div>
                                    <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                        <div className="d-flex align-items-center">
                                            <div className="fs-2 fw-bold">{giftCode.Gift_codes}</div>
                                        </div>
                                        <div className="fw-semibold fs-6 text-gray-400">تعداد کدهای تخفیف معرفی</div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-column flex-grow-1 pe-8">
                                <div className="d-flex flex-wrap">
                                    <div className="card card-dashed flex-center min-w-175px my-3 p-6">
                                        <span className="fs-4 fw-semibold text-primary pb-1 px-2">تعداد افراد معرفی شده</span>
                                        <span className="fs-lg-2tx fw-bold d-flex justify-content-center">
                                            {Info.count_of_referred}
                                        </span>
                                    </div>
                                </div>
                                <div className="d-flex mt-3">
                                    <div id="kt_referral_link" type="text" className="form-control form-control-solid me-3 flex-grow-1" dir='ltr' >
                                        {Info.referral_code}
                                    </div>
                                    <button id="kt_referral_program_link_copy_btn" className={`btn ${clicked} btn-light  fw-bold flex-shrink-0`} onClick={handleCopyClick}>{copyButtonText}</button>
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
                    {Info.is_vip?
                        <li className="nav-item mt-2">
                        <button onClick={()=>{setActiveButton('subscription');props.showOption('subscription')}} className={`nav-link text-active-primary ms-0 me-10 py-5 ${activeButton === 'subscription'?'active':''}`}>اشتراک</button>
                    </li>:null}
                </ul>
            </div>
        </div>
    );
}
export default UserInformation;