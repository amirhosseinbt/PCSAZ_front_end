import React from "react";
import ShoppingListItem from "./ShoppingListItem";
const ShoppingList=({show})=>{
    return(
        <div className="card card-flush mb-10">
            <div className="card-header align-items-center py-5 gap-2 gap-md-5">
                <div className="card-title">
                    <div className="d-flex align-items-center position-relative my-1">
                        <input type="text" data-kt-ecommerce-order-filter="search" className="form-control form-control-solid w-250px ps-12" placeholder="لیست خرید ها " readOnly/>
                    </div>
                </div>
            </div>
            <div className="card-body pt-0">
                <div id="kt_ecommerce_sales_table_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
                <div className="table-responsive">
                    <table className="table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer" id="kt_ecommerce_sales_table">
                    <thead>
                        <tr className="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
                            <th className="min-w-100px" tabindex="0" aria-controls="kt_ecommerce_sales_table" rowspan="1" colspan="1" style={{width: '112.094px'}} aria-label="شناسه سفارش: activate to sort column descending" aria-sort="ascending">شناسه سفارش
                            </th>
                            <th className="text-start min-w-70px" tabindex="0" aria-controls="kt_ecommerce_sales_table" rowspan="1" colspan="1" style={{width: '99.7969px'}} aria-label="وضعیت: activate to sort column ascending">وضعیت</th>
                            <th className="text-start min-w-100px" tabindex="0" aria-controls="kt_ecommerce_sales_table" rowspan="1" colspan="1" style={{width: '112.094px'}} aria-label="کل: activate to sort column ascending">کل</th>
                            <th className="text-start min-w-100px" tabindex="0" aria-controls="kt_ecommerce_sales_table" rowspan="1" colspan="1" style={{width: '112.094px'}} aria-label="تاریخ افزودن: activate to sort column ascending">تاریخ افزودن</th>
                            <th className="text-start min-w-100px" tabindex="0" aria-controls="kt_ecommerce_sales_table" rowspan="1" colspan="1" style={{width: '112.094px'}} aria-label="تاریخ اصلاح شد: activate to sort column ascending">تاریخ پرداخت شدن</th>
                            <th className="text-start min-w-100px sorting_disabled" rowspan="1" colspan="1" style={{width: '112.141px'}} >مشاهده جزئیات</th>
                            </tr>
                    </thead>
                    <tbody className="fw-semibold text-gray-600">
                        <ShoppingListItem showStatus={show} trackingCode={'1213'} statusClass={'badge-light-success'} status={'Successful'} amount={'$200'} lockedDate={'2025-02-02'} payDate={'2025-02-02'}/>
                        <ShoppingListItem showStatus={show} trackingCode={'1213'} statusClass={'badge-light-success'} status={'Successful'} amount={'$200'} lockedDate={'2025-02-02'} payDate={'2025-02-02'}/>
                        <ShoppingListItem showStatus={show} trackingCode={'1213'} statusClass={'badge-light-success'} status={'Successful'} amount={'$200'} lockedDate={'2025-02-02'} payDate={'2025-02-02'}/>
                        <ShoppingListItem showStatus={show} trackingCode={'1213'} statusClass={'badge-light-success'} status={'Successful'} amount={'$200'} lockedDate={'2025-02-02'} payDate={'2025-02-02'}/>
                    </tbody>
                </table>
                </div>
                </div>
            </div>
        </div>
    );
}
export default ShoppingList;