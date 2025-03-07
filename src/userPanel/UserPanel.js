import {React , useState , useEffect} from "react";
import UserInformation from "./UserInformation";
import Address from "./address/Address";
import ModalAddAddress from "./address/ModalAddAddress";
import DiscountCodeList from "./discountCode/DiscountCodeList";
import ShoppingCartList from "./shoppingCart/ShoppingCartList";
import ShoppingList from "./shoppingList/ShoppingList";
import SubscriptionDetail from "./subscription/SubscriptionDetail";
import "./UserPanel.css";
import { useDispatch, useSelector } from "react-redux";
import { jwtActions } from "../store/userAuthenticaion";
import { userINfoActions } from "../store/userAuthenticaion";
import { cartsActions } from "../store/userAuthenticaion";
import { codeActions } from "../store/userAuthenticaion";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserPanel = (props) => {
  const jwt = useSelector(state=>state.jwt.jwt);
  const ip = useSelector(state=>state.ip.ip);
  const dispatch = useDispatch();
  const [show,setShow] = useState(false);
  const [showShoppingDetail,setShowShoppingDetail] = useState(false);
  const [showOption,setShowOption] = useState('');
  axios.defaults.headers.common['Authorization'] = jwt;
  const navigate = useNavigate();
  const handle401Error = (error) => {
    if (error.response && error.response.status === 401) {
      dispatch(jwtActions.Logout());
      navigate('/sign-in');
    }
  };
  const onLogoutClick = () =>
  {
    dispatch(jwtActions.Logout());
  }
  useEffect(()=>{
    if (jwt === '') {
      navigate('/');
    }
    else
    {
      axios.get(`http://${ip}:8000/user/personal_data/`)
      .then(res=> {
        dispatch(userINfoActions.SetUserInfo(res.data));
      }).catch(handle401Error);
      axios.get(`http://${ip}:8000/user/carts_detail/`)
      .then(res=> {
        dispatch(cartsActions.SetCarts(res.data.carts_status));
        dispatch(cartsActions.SetShops(res.data.recent_shops));
      }).catch(handle401Error);
      axios.get(`http://${ip}:8000/user/discount_detail/`)
      .then(res=> {
        dispatch(codeActions.SetCodes(res.data));
      }).catch(handle401Error);
    }
  },[]);
  return (
    <div id="kt_app_body" data-kt-app-layout="dark-sidebar" data-kt-app-header-fixed="true" data-kt-app-toolbar-enabled="true" data-kt-app-toolbar-fixed="true" className="d-flex flex-column flex-root app-root" dir="rtl" >
      <div className="app-page flex-column flex-column-fluid" id="kt_app_page">
        <div id="kt_app_header" className="app-header" data-kt-sticky="true" data-kt-sticky-activate="{default: true, lg: true}" data-kt-sticky-name="app-header-minimize" data-kt-sticky-offset="{default: '200px', lg: '0'}" data-kt-sticky-animation="false" data-bs-theme="light" style={{borderBottom:'1px solid #e7e7e7'}}
        >
          <div className="app-container container-fluid d-flex align-items-stretch justify-content-between" id="kt_app_header_container">
            <div className="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
              <h1 className="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">
                پنل کاربری
              </h1>
            </div>
            <div className="d-flex align-items-stretch justify-content-end flex-lg-grow-1" id="kt_app_header_wrapper">

							<div className="app-navbar flex-shrink-0">
								<div className="app-navbar-item align-items-stretch ms-1 ms-md-4">
									<div id="kt_header_search" className="header-search d-flex align-items-stretch" data-kt-search-keypress="true" data-kt-search-min-length="2" data-kt-search-enter="enter" data-kt-search-layout="menu" data-kt-menu-trigger="auto" data-kt-menu-overflow="false" data-kt-menu-permanent="true" data-kt-menu-placement="bottom-end" data-kt-search="true">
										<div className="d-flex align-items-center" data-kt-search-element="toggle" id="kt_header_search_toggle">
											<a className="btn btn-icon btn-custom btn-icon-muted btn-active-color-primary w-35px h-35px" href="/sign-in" onClick={onLogoutClick} style={{justifyContent:'right'}}>
												<i className="ki-outline ki-exit-left  fs-1">
													<span className="path1"></span>
													<span className="path2"></span>
												</i>
											</a>
											<a className="btn btn-icon btn-custom btn-icon-muted btn-active-color-primary w-35px h-35px" href="/">
												<i className="la la-store-alt fs-2x">
													<span className="path1"></span>
													<span className="path2"></span>
												</i>
											</a>
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
                <UserInformation showOption={setShowOption}/>
                {showOption==='address' || showOption===''?<Address showStatus={setShow}/>:null}
                {show && (showOption==='address' || showOption==='')?<ModalAddAddress showStatus={setShow}/> :null}
                {show && (showOption==='address' || showOption==='')?<div className="modal-backdrop fade show"></div>:null}
                {showOption==='discountCode'?<DiscountCodeList/>:null}
                {showOption==='shoppingCart'?<ShoppingCartList/>:null}
                {showOption==='orders'?<ShoppingList show={setShowShoppingDetail}/>:null}
                {showShoppingDetail && showOption==='orders'?<div className="modal-backdrop fade show"></div>:null}
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
