import {React, useState} from "react";
import ShoppingListItem from "./ShoppingListItem";
import { useSelector } from "react-redux";
import ShoppingDetail from "./ShoppingDetail";
const ShoppingList=({show})=>{
    const [showDetail,setShowDetail] = useState(false);
    const [selectedCart,setSelectedCart] = useState([]);
    const shops = useSelector(state=>state.carts.shops);
    console.log(shops);
    return(
        <div className="card card-flush mb-10">
            <div className="card-header align-items-center py-5 gap-2 gap-md-5">
                <div className="card-title">
                    <div className="d-flex align-items-center position-relative my-1">
                        <input type="text" data-kt-ecommerce-order-filter="search" className="form-control form-control-solid w-250px ps-12" placeholder="لیست خرید ها " readOnly={true}/>
                    </div>
                </div>
            </div>
            <div className="card-body pt-0">
                <div id="kt_ecommerce_sales_table_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
                <div className="table-responsive">
                    <table className="table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer" id="kt_ecommerce_sales_table">
                    <thead>
                        <tr className="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
                            <th className="min-w-100px" tabIndex="0" aria-controls="kt_ecommerce_sales_table" rowSpan="1" colSpan="1" style={{width: '112.094px'}} aria-label="شناسه سفارش: activate to sort column descending" aria-sort="ascending">شناسه سفارش
                            </th>
                            <th className="text-start min-w-70px" tabIndex="0" aria-controls="kt_ecommerce_sales_table" rowSpan="1" colSpan="1" style={{width: '99.7969px'}} aria-label="وضعیت: activate to sort column ascending">وضعیت</th>
                            <th className="text-start min-w-100px" tabIndex="0" aria-controls="kt_ecommerce_sales_table" rowSpan="1" colSpan="1" style={{width: '112.094px'}} aria-label="کل: activate to sort column ascending">کل</th>
                            <th className="text-start min-w-100px" tabIndex="0" aria-controls="kt_ecommerce_sales_table" rowSpan="1" colSpan="1" style={{width: '112.094px'}} aria-label="تاریخ افزودن: activate to sort column ascending">تاریخ افزودن</th>
                            <th className="text-start min-w-100px" tabIndex="0" aria-controls="kt_ecommerce_sales_table" rowSpan="1" colSpan="1" style={{width: '112.094px'}} aria-label="تاریخ اصلاح شد: activate to sort column ascending">تاریخ پرداخت شدن</th>
                            <th className="text-start min-w-100px sorting_disabled" rowSpan="1" colSpan="1" style={{width: '112.141px'}} >مشاهده جزئیات</th>
                            </tr>
                    </thead>
                    <tbody className="fw-semibold text-gray-600">
                    {shops&&
                        shops.map((shop,index)=>(
                            <ShoppingListItem setSelectedCart={setSelectedCart} selectedCart={shop} showStatus={show} showDetail={setShowDetail} trackingCode={shop.tracking_code} statusClass={'badge-light-success'} status={'Successful'} amount={shop.total_price} lockedDate={shop.locked_timestamp} payDate={shop.transaction_timestamp} key={index}/>
                        ))
                    }
                    </tbody>
                </table>
                </div>
                </div>
            </div>
            {showDetail?<ShoppingDetail Info={selectedCart} showStatus={show} showDetail={setShowDetail}/> :null}
        </div>
    );
}
export default ShoppingList;