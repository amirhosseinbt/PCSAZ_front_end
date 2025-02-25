import React from "react";
import AddressItem from './AddressItem';
const Address = ({showStatus}) => {
    return(
        <div className="card card-flush mb-6 mb-xl-9">
            <div className="card-header mt-6">
                <div className="card-title flex-column">
                    <h2 className="mb-1">آدرس ها</h2>
                </div>
                <div className="card-toolbar">
                    <button type="button" className="btn btn-light-primary btn-sm" data-bs-toggle="modal" data-bs-target="#kt_modal_new_address" onClick={()=>showStatus(true)}>
                    <i className="ki-duotone ki-add-files fs-3">
                        <span className="path1"></span>
                        <span className="path2"></span>
                        <span className="path3"></span>
                    </i>افزودن</button>
                </div>
            </div>
            <div className="card-body d-flex flex-column">
                <AddressItem text={'همدان میدان پژوهش دانشگاه بوعلی'}/>            
                <AddressItem text={'تهران میدان آزادی'}/>            
                <AddressItem text={'شیراز میدان حافظ خیابان سعدی'}/>            
                <AddressItem text={'اصفهان میدان نقش جهان'}/>            
            </div>
        </div>
    );
}
export default Address;