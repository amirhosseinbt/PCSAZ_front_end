import {React,useEffect} from "react";
import axios from "axios";
import { useDispatch ,useSelector} from "react-redux";
import { codeActions, jwtActions } from "../../store/userAuthenticaion";
import DiscodeListItem from "./DiscodeListItem";
import { useNavigate } from "react-router-dom";


const DiscountCodeList = () =>{
    const discountCodes = useSelector(state=>state.discountCode.discountCode);
    const jwt = useSelector(state=>state.jwt.jwt);
    axios.defaults.headers.common['Authorization'] = jwt;
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const ip = useSelector(state=>state.ip.ip);
    
    useEffect(()=>{
    axios.get(`http://${ip}:8000/user/discount_detail/`)
    .then(res=> {
      dispatch(codeActions.SetCodes(res.data));
    }).catch(err=>{
        if(err.response && err.response.status === 401){
            dispatch(jwtActions.Logout())
            navigate("/sign-in")
        }
    });
    },[]);
    return(
        <div className="card card-flush mb-10">
            <div className="card-header align-items-center py-5 gap-2 gap-md-5">
                <div className="card-title">
                    <div className="d-flex align-items-center position-relative my-1">
                        <input type="text" className="form-control form-control-solid w-250px ps-12" placeholder="لیست کد های تخفیف" readOnly={true}/>
                    </div>
                </div>
            </div>
            <div className="card-body pt-0">
                <table className="table align-middle table-row-dashed fs-6 gy-5">
                    <thead>
                        <tr className="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
                            <th className="text-start min-w-75px ">شماره کد</th>
                            <th className="text-start min-w-75px">تاریخ انقضاء</th>
                            <th className="text-start min-w-75px">دفعات قابل استفاده</th>
                            <th className="text-start min-w-75px">مبلغ</th>
                            <th className="text-start min-w-100px">سقف تخفیف</th>
                        </tr>
                    </thead>
                    <tbody className="fw-semibold text-gray-600">
                    {discountCodes.discount_codes&&
                        discountCodes.discount_codes.map((code,index)=>(
                            <DiscodeListItem expirationDate={code.expiration_date} code={code.code} usageCount={code.usage_count} amount={code.amount} limit = {code.discount_limit} key={index}/>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default DiscountCodeList;