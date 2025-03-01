import React from "react";
import ShoppingCartListItem from "./ShoppingCartListItem";
import { useSelector } from "react-redux";
const ShoppingCartList = () =>{
    const carts = useSelector(state=>state.carts.carts);
    return(
        <div className="col-xl-4">
            <div className="card card-xl-stretch mb-5 mb-xl-8">
                <div className="card-header border-0">
                    <h3 className="card-title fw-bold text-dark">سبد های خرید قابل استفاده :</h3>
                    <span className="mt-8 fw-semibold fs-4">{carts.length}</span>
                </div>
                <div className="card-body pt-2">
                {
                    carts.map((cart,index)=>(
                        <ShoppingCartListItem number={cart.cart_number} status={cart.cart_status} spanClass={'bg-success'} statusClass={'badge-light-success'} key={index}/>
                    ))
                }
                    {/* <ShoppingCartListItem number={'2'} status={'locked'} spanClass={'bg-warning'} statusClass={'badge-light-warning'} />
                    <ShoppingCartListItem number={'3'} status={'blocked'} spanClass={'bg-danger'} statusClass={'badge-light-danger'} />
                    <ShoppingCartListItem number={'4'} status={'active'} spanClass={'bg-success'} statusClass={'badge-light-success'} />
                    <ShoppingCartListItem number={'5'} status={'locked'} spanClass={'bg-warning'} statusClass={'badge-light-warning'} /> */}
                   
                </div>
            </div>
        </div>
    );
}
export default ShoppingCartList;