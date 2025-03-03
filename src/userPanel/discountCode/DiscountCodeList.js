import {React,useEffect} from "react";
import axios from "axios";
import { useDispatch ,useSelector} from "react-redux";
import { codeActions } from "../../store/userAuthenticaion";
import DiscodeListItem from "./DiscodeListItem";

const DiscoutnCodeList = () =>{
    const discountCodes = useSelector(state=>state.discountCode.discountCode);
    const jwt = useSelector(state=>state.jwt.jwt);
    axios.defaults.headers.common['Authorization'] = jwt;
    const dispatch = useDispatch();
    const ip = useSelector(state=>state.ip.ip);
    
    useEffect(()=>{
    axios.get(`http://${ip}:8000/user/discount_detail/`)
    .then(res=> {
      console.log(res.data);
      dispatch(codeActions.SetCodes(res.data));
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
                       {/* <DiscodeListItem expirationDate={'2025'} code={'2'} usageCount={'2'} amount={'$300'} limit = {'$100'}/>
                       <DiscodeListItem expirationDate={'2022'} code={'3'} usageCount={'2'} amount={'$200'} limit = {'$100'}/>
                       <DiscodeListItem expirationDate={'2021'} code={'4'} usageCount={'2'} amount={'$100'} limit = {'$100'}/>
                       <DiscodeListItem expirationDate={'2025'} code={'5'} usageCount={'2'} amount={'$1200'} limit = {'$100'}/> */}
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default DiscoutnCodeList;