import {React , useState} from "react";
import {Navigate, useNavigate} from 'react-router-dom';
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
  const navigate = useNavigate();
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
                     <div class="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
                      <h1 className="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">
                        پنل کاربری
                      </h1>
                    </div>
            </div>
            <div class="d-flex align-items-stretch justify-content-end flex-lg-grow-1" id="kt_app_header_wrapper">

							<div class="app-navbar flex-shrink-0">
								<div class="app-navbar-item align-items-stretch ms-1 ms-md-4">
									<div id="kt_header_search" class="header-search d-flex align-items-stretch" data-kt-search-keypress="true" data-kt-search-min-length="2" data-kt-search-enter="enter" data-kt-search-layout="menu" data-kt-menu-trigger="auto" data-kt-menu-overflow="false" data-kt-menu-permanent="true" data-kt-menu-placement="bottom-end" data-kt-search="true">
										<div class="d-flex align-items-center" data-kt-search-element="toggle" id="kt_header_search_toggle">
											<a class="btn btn-icon btn-custom btn-icon-muted btn-active-color-primary w-35px h-35px" href="/sign-up">
												<i class="ki-outline ki-exit-left  fs-2">
													<span class="path1"></span>
													<span class="path2"></span>
												</i>
											</a>
										</div>
									</div>
							</div>
								
							</div>
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
                {show && (showOption==='address' || showOption==='')?<ModalAddAddress showStatus={setShow}/> :null}
                {show && (showOption==='address' || showOption==='')?<div class="modal-backdrop fade show"></div>:null}
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
