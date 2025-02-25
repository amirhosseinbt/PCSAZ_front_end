import React from "react";
import ShoppingCartListItem from "./ShoppingCartListItem";
const ShoppingCartList = () =>{
    return(
        <div class="col-xl-4">
            <div class="card card-xl-stretch mb-5 mb-xl-8">
                <div class="card-header border-0">
                    <h3 class="card-title fw-bold text-dark">سبد های خرید قابل استفاده :</h3>
                    <span class="mt-8 fw-semibold fs-4">5</span>
                </div>
                <div class="card-body pt-2">
                    <ShoppingCartListItem number={'1'} status={'active'} spanClass={'bg-success'} statusClass={'badge-light-success'} />
                    <ShoppingCartListItem number={'2'} status={'locked'} spanClass={'bg-warning'} statusClass={'badge-light-warning'} />
                    <ShoppingCartListItem number={'3'} status={'blocked'} spanClass={'bg-danger'} statusClass={'badge-light-danger'} />
                    <ShoppingCartListItem number={'4'} status={'active'} spanClass={'bg-success'} statusClass={'badge-light-success'} />
                    <ShoppingCartListItem number={'5'} status={'locked'} spanClass={'bg-warning'} statusClass={'badge-light-warning'} />
                   
                </div>
            </div>
        </div>
    );
}
export default ShoppingCartList;