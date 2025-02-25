import React from "react";
const ShoppingListItem=(props)=>{
    return(
        <tr>
            <td data-kt-ecommerce-order-filter="order_id" className="sorting_1">
                <a href="../../demo1/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fw-bold">{props.trackingCode}</a>
            </td>
            <td className="text-start pe-0">
                <div className={`badge ${props.statusClass}`}>{props.status}</div>
            </td>
            <td className="text-start pe-0">
                <span className="fw-bold">{props.amount}</span>
            </td>
            <td className="text-start">
                <span className="fw-bold">{props.lockedDate}</span>
            </td>
            <td className="text-start">
                <span className="fw-bold">{props.payDate}</span>
            </td>
            <td className="text-start">
                <button onClick={()=>props.showStatus(true)} class="btn btn-icon btn-light btn-active-secondary btn-sm ms-auto me-lg-n7">
				    <i class="ki-duotone ki-left fs-2"></i>
            	</button>
            </td>
        </tr>
    );
}
export default ShoppingListItem;