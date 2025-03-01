import React from "react";
import './ShoppingCart.css'
const ShoppingCartListItem = (props) =>{
    return(
    <div className="d-flex align-items-center mb-8 grow" style={{cursor:"pointer"}} >
        <span className={`bullet bullet-vertical h-40px ${props.spanClass}`} style={{width:'45px'}}>
            <i className="fa-solid la-shopping-cart" style={{fontSize: '24px',textAlign: 'center', display: 'flex',flexDirection: 'column',marginTop: '7px',color:'#000000d6'}}></i>
        </span>
        <div className="flex-grow-1">
            <p className="text-gray-800 fw-bold fs-6 m-2">سبد خرید {props.number}</p>
        </div>
        <span className={`badge badge-light-success fs-7 fw-bold ${props.statusClass}`}>{props.status}</span>
    </div>
    );
}
export default ShoppingCartListItem;