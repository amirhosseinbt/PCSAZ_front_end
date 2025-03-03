import React from "react";

const ShoppingDetailItem = (props) => {
    return(
        <tr>
            <td>
                <div className="d-flex align-items-center mt-3">
                    <p className="symbol symbol-50px">
                        <img src={props.imgSrc}/>
                    </p>
                    <div className="ms-5 mt-3" style={{cursor:"pointer"}}>
                        <p  className="fw-bold text-gray-600 text-hover-primary">{props.name}</p>
                    </div>
                </div>
            </td>
            <td className="text-start">{props.id}</td>
            <td className="text-start">{props.quantity}</td>
            <td className="text-start">{props.price}</td>
       </tr>
    );
}
export default ShoppingDetailItem;