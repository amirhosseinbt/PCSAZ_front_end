import { React, useEffect, useState } from "react";
import "./MainPage.css";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { compatibleListActions, jwtActions} from "../store/userAuthenticaion";
import axios from "axios";
import { userINfoActions} from "../store/userAuthenticaion";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../general/ErrorMessage";
import ParticlesBg from "particles-bg";
const MainPage = (props) => {
  const [showError , setShowError] =useState(false);
  const [errorText , setErrorText] =useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const jwt = useSelector((state) => state.jwt.jwt);
  const ip = useSelector((state) => state.ip.ip);
  const dispatch = useDispatch();
  axios.defaults.headers.common["Authorization"] = jwt;
  const navigate = useNavigate();
  const handle401Error = (error) => {
    if (error.response && error.response.status === 401) {
      dispatch(jwtActions.Logout());
      navigate('/sign-in');
    }
  };
  const Info = useSelector(state=>state.userInfo.userInfo);
  useEffect(() => {
    document.body.classList.add("MainPage-page");
    axios.get(`http://${ip}:8000/sazgaryab/products/`).then((res) => {
      setProducts(res.data.products);
      setFilteredProducts(res.data.products);
    }).catch(err=>{});
    if (jwt !== '') {
        axios.get(`http://${ip}:8000/user/personal_data/`)
        .then(res=> {
          dispatch(userINfoActions.SetUserInfo(res.data));
        }).catch(handle401Error);
    }
    return () => {
      document.body.classList.remove("MainPage-page");
    };
  },[]);
  const selectedProductList = useSelector((state) => state.cpList.items);
  const onCPButtonClick = (event) => {
    event.preventDefault();
    if (selectedProductList.length === 0) {
      setShowError(true);
      setErrorText('لطفا یک کالا را انتخاب کنید.');
    } 
    else {
      setShowError(false);
      axios
        .post(`http://${ip}:8000/sazgaryab/find_compatibles/`, {
          products: selectedProductList,
        })
        .then((res) => {
          dispatch(compatibleListActions.replaceList(res.data.products));
          navigate("/compatibility");
        })
        .catch((err) => {
            handle401Error(err);
            setShowError(true);
            setErrorText(err.response.data.error);
        });
    }
  };
  const onSearchChange = (event) =>
  {
    const stmt = event.target.value;
    const filtered = products.filter((product) => {
        return product.id === parseInt(stmt,10) || product.model.includes(stmt) || product.brand.includes(stmt) || product.category.includes(stmt);
    });
    setFilteredProducts(filtered);
  }
  return (
    <div
      id="kt_app_body"
      data-kt-app-layout="dark-sidebar"
      data-kt-app-header-fixed="true"
      data-kt-app-toolbar-enabled="true"
      data-kt-app-toolbar-fixed="true"
      className="d-flex flex-column flex-root app-root"
      dir="rtl"
    >
      <div className="app-page flex-column flex-column-fluid" id="kt_app_page">
        <div
          id="kt_app_header"
          className="app-header"
          data-kt-sticky="true"
          data-kt-sticky-activate="{default: true, lg: true}"
          data-kt-sticky-name="app-header-minimize"
          data-kt-sticky-offset="{default: '200px', lg: '0'}"
          data-kt-sticky-animation="false"
          data-bs-theme="light"
          style={{ borderBottom: "1px solid #e7e7e7" }}
        >
          <div
            className="app-container container-fluid d-flex align-items-stretch justify-content-between"
            id="kt_app_header_container"
          >
                <div className="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
                  <h1 className="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">
                    پی سی ساز
                  </h1>
                </div>
              <div
                className="d-flex align-items-stretch justify-content-end flex-lg-grow-1"
                id="kt_app_header_wrapper"
              >
                <div className="app-navbar flex-shrink-0">
                  <div className="app-navbar-item align-items-stretch ms-1 ms-md-4">
                    <div
                      id="kt_header_search"
                      className="header-search d-flex align-items-stretch"
                      data-kt-search-keypress="true"
                      data-kt-search-min-length="2"
                      data-kt-search-enter="enter"
                      data-kt-search-layout="menu"
                      data-kt-menu-trigger="auto"
                      data-kt-menu-overflow="false"
                      data-kt-menu-permanent="true"
                      data-kt-menu-placement="bottom-end"
                      data-kt-search="true"
                    >

                      <div
                        className="d-flex align-items-center"
                        data-kt-search-element="toggle"
                        id="kt_header_search_toggle"
                      >
                      {jwt !== ''?(
                        <a
                          className="btn btn-icon btn-custom btn-icon-muted btn-active-color-primary w-35px h-35px"
                          href="/user-panel"
                        >
                          <i className="ki-outline ki-profile-circle  fs-2x">
                          </i>
                        </a>
                      ):(
                        <a
                          href="/sign-in"
                        >
                          ورود/ ثبت نام
                        </a>
                      )}
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div
          id="kt_app_content"
          className="app-content flex-column-fluid"
          dir="rtl"
        >
          <ParticlesBg color="rgb(51, 51, 51)" num={70} type="cobweb" className="particles-bg-canvas-self"/>
          <div
            id="kt_app_content_container"
            className="app-container container-xxl mt-18"
          >
            <div className="card card-flush">
              <div className="card-header align-items-center py-5 gap-2 gap-md-5">
                <div className="card-title">
                  <div className="d-flex align-items-center position-relative my-1">
                    <i className="ki-duotone ki-magnifier fs-3 position-absolute ms-4">
                    </i>
                    <input
                      type="text"
                      data-kt-ecommerce-product-filter="search"
                      className="form-control form-control-solid w-250px ps-12"
                      placeholder="جستجو محصولات"
                      onChange={onSearchChange}
                    />
                  </div>
                </div>
                <div className="card-toolbar flex-row-fluid justify-content-end gap-5">
                    {showError?(<ErrorMessage text={errorText}/>):null}
                    {
                        jwt !== '' && Info.is_vip ?
                        (<button className="btn btn-primary" onClick={onCPButtonClick}>
                        بررسی سازگاری
                        </button>
                        ) 
                        :null
                    }
                </div>
              </div>
              <div className="card-body pt-0">
                <div
                  id="kt_ecommerce_products_table_wrapper"
                  className="dataTables_wrapper dt-bootstrap4 no-footer"
                >
                  <div className="table-responsive">
                    <table
                      className="table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer"
                      id="kt_ecommerce_products_table"
                    >
                      <thead>
                        <tr className="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
                          <th
                            className="w-10px pe-2 sorting_disabled"
                            rowSpan="1"
                            colSpan="1"
                            style={{ width: "29.8906px" }}
                          >
                            {/* <div className="form-check form-check-sm form-check-custom form-check-solid me-3">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            data-kt-check="true"
                            data-kt-check-target="#kt_ecommerce_products_table .form-check-input"
                            value="1"
                          />
                        </div> */}
                          </th>
                          <th
                            className="min-w-200px sorting"
                            tabIndex="0"
                            aria-controls="kt_ecommerce_products_table"
                            rowSpan="1"
                            colSpan="1"
                            style={{ width: "219.688px" }}
                          >
                            محصولات
                          </th>
                          <th
                            className="text-start min-w-100px sorting"
                            tabIndex="0"
                            aria-controls="kt_ecommerce_products_table"
                            rowSpan="1"
                            colSpan="1"
                            style={{ width: "110.297px" }}
                          >
                            شناسه کالا
                          </th>
                          <th
                            className="text-start min-w-100px sorting"
                            tabIndex="0"
                            aria-controls="kt_ecommerce_products_table"
                            rowSpan="1"
                            colSpan="1"
                            style={{ width: "110.297px" }}
                          >
                            مدل
                          </th>
                          <th
                            className="text-start min-w-100px sorting"
                            tabIndex="0"
                            aria-controls="kt_ecommerce_products_table"
                            rowSpan="1"
                            colSpan="1"
                            style={{ width: "110.297px" }}
                          >
                            برند
                          </th>
                          <th
                            className="text-start min-w-70px sorting"
                            tabIndex="0"
                            aria-controls="kt_ecommerce_products_table"
                            rowSpan="1"
                            colSpan="1"
                            style={{ width: "96.4844px" }}
                          >
                            تعداد در انبار
                          </th>
                          <th
                            className="text-start min-w-100px sorting"
                            tabIndex="0"
                            aria-controls="kt_ecommerce_products_table"
                            rowSpan="1"
                            colSpan="1"
                            style={{ width: "110.297px" }}
                          >
                            قیمت
                          </th>
                        </tr>
                      </thead>
                      <tbody className="fw-semibold text-gray-600">
                        {filteredProducts.map((product, index) => (
                          <Product
                            imageSrc={product.image}
                            id={product.id}
                            stockCount={product.stock_count}
                            price={product.current_price}
                            model={product.model}
                            brand={product.brand}
                            category={product.category}
                            key={index}
                          />
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainPage;
