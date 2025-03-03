import React from "react";
import ShoppingCartListItem from "./ShoppingCartListItem";
import { useSelector } from "react-redux";
const ShoppingCartList = () =>{
    const carts = useSelector(state=>state.carts.carts);
    const availableCarts = carts.filter(cart=> cart.cart_status === 'active').length;
    return(
        <div className="col-xl-4">
            <div className="card card-xl-stretch mb-5 mb-xl-8">
                <div className="card-header border-0">
                    <h3 className="card-title fw-bold text-dark">سبد های خرید قابل استفاده :</h3>
                    <span className="mt-8 fw-semibold fs-4">{availableCarts}</span>
                </div>
                <div className="card-body pt-2">
                {
                    carts.map((cart,index)=>(
                        cart.cart_status === 'active'?
                        <ShoppingCartListItem number={cart.cart_number} status={cart.cart_status} spanClass={'bg-success'} statusClass={'badge-light-success'} key={index}/>:
                        cart.cart_status === 'locked' ? 
                        <ShoppingCartListItem number={cart.cart_number} status={cart.cart_status} spanClass={'bg-warning'} statusClass={'badge-light-warning'} key={index}
                        />:
                        cart.cart_status === 'blocked'?
                        <ShoppingCartListItem number={cart.cart_number} status={cart.cart_status} spanClass={'bg-danger'} statusClass={'badge-light-danger'} key={index}/>:null
                    ))
                }  
                </div>
            </div>
        </div>
    );
}
export default ShoppingCartList;