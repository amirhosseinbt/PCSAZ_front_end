import {React} from 'react';
import img1 from "../../assets/media/stock/ecommerce/1.png";
import img2 from '../../assets/media/stock/ecommerce/100.png';
import ShoppingDetailItem from './ShoppingDetatilItem';
const ShoppingDetail = (props) => {
    return(
        <div className="modal fade show" id="kt_modal_new_address" tabIndex="-1" style={{display: 'block', paddingRight: '0px'}} aria-modal="true" role="dialog">
			 
			<div className="modal-dialog modal-dialog-centered mw-650px">
				 
				<div className="modal-content">
                    <div className="card card-flush py-4 flex-row-fluid overflow-hidden">
                        <div className="card-header">
                            <div className="card-title">
                                <h2>سفارش# {props.Info.tracking_code}</h2>
                            </div>
                            <button className="btn btn-sm btn-icon btn-active-color-primary mt-4" data-bs-dismiss="modal" onClick={()=>{props.showStatus(false);props.showDetail(false);}}>
                                    <i className="ki-duotone ki-cross fs-1">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                    </i>
                            </button>
                        </div>
                        <div className="card-body pt-0">
                            <div className="table-responsive">
                                <table className="table align-middle table-row-dashed fs-6 gy-5 mb-0">
                                    <thead>
                                        <tr className="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
                                            <th className="min-w-175px">محصولات</th>
                                            <th className="min-w-100px text-start">شناسه محصول</th>
                                            <th className="min-w-70px text-start">تعداد</th>
                                            <th className="min-w-100px text-start">قیمت واحد</th>
                                        </tr>
                                    </thead>
                                    <tbody className="fw-semibold text-gray-600">
                                        {
                                            props.Info.products&&
                                            props.Info.products.map((product,index)=>(
                                                <ShoppingDetailItem name={product.category} id={product.product_id} quantity={product.quantity} price={product.cart_price} imgSrc={img1} key={index}/>

                                            ))
                                        }
                                        <tr>
                                            <td colSpan="4" className="text-end">جمع کل</td>
                                            <td className="text-end">{props.Info.total_price}</td>
                                        </tr>
                                        {/* <tr>
                                            <td colSpan="4" className="text-end">VAT (0%)</td>
                                            <td className="text-end">$0.00</td>
                                        </tr>
                                        <tr>
                                            <td colSpan="4" className="fs-3 text-dark text-end">Grand کل</td>
                                            <td className="text-dark fs-3 fw-bolder text-end">$269.00</td>
                                        </tr> */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    );
}
export default ShoppingDetail;