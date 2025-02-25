import {React , useState} from "react";
import img1 from "../assets/media/avatars/300-3.jpg";
import img2 from "../assets/media/misc/menu-header-bg.jpg";
import img3 from "../assets/media/patterns/vector-1.png";
import img4 from "../assets/media/stock/900x600/42.png";
import img5 from "../assets/media/stock/600x600/img-65.jpg";
import img6 from "../assets/media/avatars/300-3.jpg"
import UserInformation from "./UserInformation";
import Address from "./address/Address";
import ModalAddAddress from "./address/ModalAddAddress";
import DiscoutnCodeList from "./discountCode/DiscountCodeList";
import ShoppingCartList from "./shoppingCart/ShoppingCartList";
import ShoppingList from "./shoppingList/ShoppingList";
import ShoppingDetail from "./shoppingList/ShoppingDetail";
import SubscriptionDetail from "./subscription/SubscriptionDetail";
import "./UserPanel.css";
const UserPanel = () => {
  const [show,setShow] = useState(false);
  const [showShoppingDetail,setShowShoppingDetail] = useState(false);
  const [showOption,setShowOption] = useState('');
  const [vip,setVip] = useState(true);
  return (
    <div id="kt_app_body" data-kt-app-layout="dark-sidebar" data-kt-app-header-fixed="true" data-kt-app-toolbar-enabled="true" data-kt-app-toolbar-fixed="true" className="d-flex flex-column flex-root app-root" dir="rtl" >
      <div className="app-page flex-column flex-column-fluid" id="kt_app_page">
        <div id="kt_app_header" className="app-header" data-kt-sticky="true" data-kt-sticky-activate="{default: true, lg: true}" data-kt-sticky-name="app-header-minimize" data-kt-sticky-offset="{default: '200px', lg: '0'}" data-kt-sticky-animation="false" data-bs-theme="light" style={{borderBottom:'1px solid #e7e7e7'}}
        >
          <div className="app-container container-fluid d-flex align-items-stretch justify-content-between" id="kt_app_header_container">
            <div className="d-flex align-items-center d-lg-none ms-n3 me-1 me-md-2" title="مشاهده">
            </div>

            <div
              className="d-flex align-items-stretch justify-content-between flex-lg-grow-1"
              id="kt_app_header_wrapper"
            >
            <div
                    data-kt-swapper="true"
                    data-kt-swapper-mode="{default: 'prepend', lg: 'prepend'}"
                    data-kt-swapper-parent="{default: '#kt_app_content_container', lg: '#kt_app_header_wrapper'}"
                    className="page-title d-flex flex-column justify-content-center flex-wrap me-3 mb-5 mb-lg-0"
                  >
                     
                    <h1 className="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">
                      پنل کاربری
                    </h1>
            </div>
              
               
            </div>
              
          </div>
            
        </div>
        <div className="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
          <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
             
            <div className="d-flex flex-column flex-column-fluid">
                 
              <div id="kt_app_content" className="app-content flex-column-fluid">
                 
                <div
                  id="kt_app_content_container"
                  className="app-container container-xxl"
                >
                <UserInformation showOption={setShowOption} vip={vip}/>
                {showOption==='address' || showOption===''?<Address showStatus={setShow}/>:null}
                {show && showOption==='address'?<ModalAddAddress showStatus={setShow}/> :null}
                {show && showOption==='address'?<div class="modal-backdrop fade show"></div>:null}
                {showOption==='discountCode'?<DiscoutnCodeList/>:null}
                {showOption==='shoppingCart'?<ShoppingCartList/>:null}
                {showOption==='orders'?<ShoppingList show={setShowShoppingDetail}/>:null}
                {showShoppingDetail && showOption==='orders'?<ShoppingDetail showStatus={setShowShoppingDetail}/> :null}
                {showShoppingDetail && showOption==='orders'?<div class="modal-backdrop fade show"></div>:null}
                {showOption==='subscription'?<SubscriptionDetail/>:null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPanel;
