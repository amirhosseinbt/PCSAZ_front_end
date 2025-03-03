import React from "react";
import img1 from '../assets/media/stock/ecommerce/1.png';

const Product = (props) =>{
    return(
    <tr>
        <td>
            <div  className="form-check form-check-sm form-check-custom form-check-solid">
            <input  className="form-check-input" type="checkbox" value="1"/>
            </div>
        </td>
        <td>
            <div  className="d-flex align-items-center">
                
            <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html"  className="symbol symbol-50px">
                <span  className="symbol-label" style={{backgroundImage:`url(${img1})`}}></span>
            </a>
                
            <div  className="ms-5">
                
                <a href="../../demo1/dist/apps/ecommerce/catalog/edit-product.html"  className="text-gray-800 text-hover-primary fs-5 fw-bold" data-kt-ecommerce-product-filter="product_name">{props.category}</a>
                
            </div>
            </div>
        </td>
        <td  className="text-start pe-0">
            <span  className="fw-bold">{props.id}</span>
        </td>
        <td  className="text-start pe-0">
            <span  className="fw-bold ms-3">{props.model}</span>  
        </td>
        <td  className="text-start">
            <span  className="fw-bold ms-3">{props.brand}</span>  
        </td>
        <td  className="text-start pe-0" data-order="0">
            <span  className="fw-bold ms-3">{props.stockCount}</span>
        </td>
        <td  className="text-start pe-0">{props.price}</td>
    </tr>
    );
}
export default Product;