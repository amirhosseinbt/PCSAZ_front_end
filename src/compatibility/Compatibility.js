import { React, useEffect, useState } from "react";
import "./Compatibility.css";
import Product from "./Product";
import { useSelector } from "react-redux";
import axios from "axios";
const Compatibility = (props) => {
  const [products, setProducts] = useState([]);
  const jwt = useSelector((state) => state.jwt.jwt);
  const ip = useSelector((state) => state.ip.ip);
  axios.defaults.headers.common["Authorization"] = jwt;
  useEffect(() => {
    document.body.classList.add("compatibility-page");
    axios.get(`http://${ip}:8000/sazgaryab/products/`).then((res) => {
      console.log(res.data);
      setProducts(res.data.products);
    });
    return () => {
      document.body.classList.remove("compatibility-page");
    };
  }, []);
  //    const dispath = useDispatch();
  //    const jwt = useSelector(state=>state.jwt.jwt);
  //    useEffect(() => {
  //       document.body.classList.add("sign-up-in-page");
  //       return () => {
  //         document.body.classList.remove("sign-up-in-page");
  //       };
  //     }, []);
  //    const [phoneNumber , setPhoneNumber] = useState('');
  //    const [password , setPassword] =useState('');
  //    const navigate = useNavigate();
  //    const onPhoneNumberChange = (event) => {
  //       setPhoneNumber(event.target.value);
  //   }
  //   const onPasswordChange = (event) => {
  //       setPassword(event.target.value);
  //   }
  //   const ip = useSelector(state=>state.ip.ip);
  //    const onSubmitSignin = (event) =>{
  //       event.preventDefault();
  //       axios.post(`http://${ip}:8000/user/login/`, {
  //          phone : phoneNumber,
  //          password : password,
  //       })
  //       .then((res) => {
  //          dispath(jwtActions.Login(res.data.jwt));
  //          navigate('/');
  //       })
  //       .catch((err) => {console.log(err)});
  //   }
  return (
    <div
      id="kt_app_content"
      className="app-content flex-column-fluid"
      dir="rtl"
    >
      <div
        id="kt_app_content_container"
        className="app-container container-xxl"
      >
        <div className="card card-flush">
          <div className="card-header align-items-center py-5 gap-2 gap-md-5">
            <div className="card-title">
              <div className="d-flex align-items-center position-relative my-1">
                <i className="ki-duotone ki-magnifier fs-3 position-absolute ms-4">
                  <span className="path1"></span>
                  <span className="path2"></span>
                </i>
                <input
                  type="text"
                  data-kt-ecommerce-product-filter="search"
                  className="form-control form-control-solid w-250px ps-12"
                  placeholder="جستجو محصولات"
                />
              </div>
            </div>
            <div className="card-toolbar flex-row-fluid justify-content-end gap-5">
              <a
                href="../../demo1/dist/apps/ecommerce/catalog/add-product.html"
                className="btn btn-primary"
              >
                بررسی سازگاری
              </a>
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
                        rowspan="1"
                        colspan="1"
                        style={{ width: "29.8906px" }}
                      >
                        <div className="form-check form-check-sm form-check-custom form-check-solid me-3">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            data-kt-check="true"
                            data-kt-check-target="#kt_ecommerce_products_table .form-check-input"
                            value="1"
                          />
                        </div>
                      </th>
                      <th
                        className="min-w-200px sorting"
                        tabindex="0"
                        aria-controls="kt_ecommerce_products_table"
                        rowspan="1"
                        colspan="1"
                        style={{ width: "219.688px" }}
                      >
                        محصولات
                      </th>
                      <th
                        className="text-start min-w-100px sorting"
                        tabindex="0"
                        aria-controls="kt_ecommerce_products_table"
                        rowspan="1"
                        colspan="1"
                        style={{ width: "110.297px" }}
                      >
                        شناسه کالا
                      </th>
                      <th
                        className="text-start min-w-100px sorting"
                        tabindex="0"
                        aria-controls="kt_ecommerce_products_table"
                        rowspan="1"
                        colspan="1"
                        style={{ width: "110.297px" }}
                      >
                        مدل
                      </th>
                      <th
                        className="text-start min-w-100px sorting"
                        tabindex="0"
                        aria-controls="kt_ecommerce_products_table"
                        rowspan="1"
                        colspan="1"
                        style={{ width: "110.297px" }}
                      >
                        برند
                      </th>
                      <th
                        className="text-start min-w-70px sorting"
                        tabindex="0"
                        aria-controls="kt_ecommerce_products_table"
                        rowspan="1"
                        colspan="1"
                        style={{ width: "96.4844px" }}
                      >
                        تعداد
                      </th>
                      <th
                        className="text-start min-w-100px sorting"
                        tabindex="0"
                        aria-controls="kt_ecommerce_products_table"
                        rowspan="1"
                        colspan="1"
                        style={{ width: "110.297px" }}
                      >
                        قیمت
                      </th>
                    </tr>
                  </thead>
                  <tbody className="fw-semibold text-gray-600">
                    {
                      products.map((product,index)=>(
                        <Product imageSrc={product.image} id={product.id} stockCount={product.stock_count} price={product.current_price} model={product.model} brand={product.brand} category={product.category} key={index}/>
                      ))
                    }
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
  );
};
export default Compatibility;
