import React from "react";
import img1 from '../assets/media/product/CPU.jpeg';
import { useDispatch, useSelector } from "react-redux";
import { cpActions } from "../store/userAuthenticaion";
const Product = (props) =>{
    const dispatch = useDispatch();
    const onCheckBoxClick = (event) =>
    {
        if(event.target.checked === true){
            const item = {
                category: props.category,
                id: props.id
            };
            dispatch(cpActions.addItemToList(item));
        }
        else
        {
            dispatch(cpActions.removeItemFromList(props.id));
        }
    }
    return(
    <tr>
        <td>
            <div  className="form-check form-check-sm form-check-custom form-check-solid">
            <input  className="form-check-input" type="checkbox" value={props.id} onClick={onCheckBoxClick}/>
            </div>
        </td>
        <td>
            <div  className="d-flex align-items-center">
                
            <p className="symbol symbol-50px">
                <span  className="symbol-label" style={{backgroundImage:`url(${img1})`}}></span>
            </p>
                
            <div  className="ms-5 mt-5" style={{cursor:'pointer'}}>
                <p className="text-gray-800 text-hover-primary fs-5 fw-bold">{props.category}</p>
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
        <td  className="text-start pe-0">
            <span  className="fw-bold ms-3">{props.price}</span>
        </td>
    </tr>
    );
}
export default Product;