import React from "react";

const AddressItem = ({text}) => {
    return(
    <div className="d-flex align-items-center position-relative mb-7" style={{cursor:'pointer'}}>
        <span className="position-absolute top-0 start-0 rounded h-100 w-4px">
            <i className="fs-4 fa-solid la-map-marker-alt"></i>
        </span>
        <div className="fw-semibold ms-6">
            <p className="fs-5 fw-bold text-dark text-hover-primary">{text}</p>
        </div>
    </div>
    );
}
export default AddressItem;