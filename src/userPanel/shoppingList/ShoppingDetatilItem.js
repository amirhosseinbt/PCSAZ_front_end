import React from "react";

const ShoppingDetailItem = (props) => {
    return(
        <tr>
            <td>
                <div className="d-flex align-items-center">
                    <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="symbol symbol-50px">
                        <img src={props.imgSrc}/>
                    </a>
                    <div className="ms-5">
                        <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html" className="fw-bold text-gray-600 text-hover-primary">{props.name}</a>
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