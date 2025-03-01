import React from "react";
import DiscodeListItem from "./DiscodeListItem";
const DiscoutnCodeList = () =>{
    return(
        <div className="card card-flush mb-10">
            <div className="card-header align-items-center py-5 gap-2 gap-md-5">
                <div className="card-title">
                    <div className="d-flex align-items-center position-relative my-1">
                        <input type="text" className="form-control form-control-solid w-250px ps-12" placeholder="لیست کد های تخفیف" readOnly="true"/>
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
                       <DiscodeListItem expirationDate={'2024'} code={'1'} usageCount={'2'} amount={'$200'} limit = {'$100'}/>
                       <DiscodeListItem expirationDate={'2025'} code={'2'} usageCount={'2'} amount={'$300'} limit = {'$100'}/>
                       <DiscodeListItem expirationDate={'2022'} code={'3'} usageCount={'2'} amount={'$200'} limit = {'$100'}/>
                       <DiscodeListItem expirationDate={'2021'} code={'4'} usageCount={'2'} amount={'$100'} limit = {'$100'}/>
                       <DiscodeListItem expirationDate={'2025'} code={'5'} usageCount={'2'} amount={'$1200'} limit = {'$100'}/>
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default DiscoutnCodeList;