import { React, useEffect, useState } from "react";
import "./Compatibility.css";
import { useSelector } from "react-redux";
import Category from "./Category";
import CompatibleProduct from "./CompatibleProduct";
const Compatibility = (props) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const productList= useSelector(state=> state.compatibleList.items);
  useEffect(() => {
    document.body.classList.add("compatibility-page");
    setProducts(productList);
    setFilteredProducts(productList);

    return () => {
      document.body.classList.remove("compatibility-page");
    };
  },[productList]);
  const categoryFilter = useSelector(state=> state.ctFilter.categories);
  const onFilterClick = () =>
  {
    const filtered = products.filter((product) => {
        return categoryFilter.includes(product.category);
    });
    if(categoryFilter.length === 0)
    {
      setFilteredProducts(products);
    }
    else
    {
      setFilteredProducts(filtered);
    }
  }
  return(
      <div id="kt_app_content" className="app-content flex-column-fluid" dir="rtl">
        <div id="kt_app_content_container" className="app-container container-xxl">
          <div className="d-flex flex-column flex-lg-row" data-select2-id="select2-data-131-2d35">
            <div className="flex-column flex-lg-row-auto w-100 w-lg-250px w-xxl-325px mb-8 mb-lg-0 me-lg-9 me-5">
                <div className="card" data-select2-id="select2-data-139-jvt4">
                  <div className="card-body" data-select2-id="select2-data-138-i6w2">
                    <div className="mb-10 mt-5">
                      <label className="fs-4 form-label fw-bold text-dark mb-5">دسته بندی ها</label>
                      <Category name={'CPU'}/>
                      <Category name={'Motherboard'}/>
                      <Category name={'RAM Stick'}/>
                      <Category name={'Cooler'}/>
                      <Category name={'Power Supply'}/>
                      <Category name={'Case'}/>
                      <Category name={'SSD'}/>
                      <Category name={'HDD'}/>
                    </div>
                    <div className="d-flex align-items-center justify-content-end">
                      <button className="btn btn-primary" onClick={onFilterClick}>فیلتر</button>
                    </div>
                  </div>
                </div>
            </div>
            <div className="flex-lg-row-fluid" data-select2-id="select2-data-130-c0t6">
              <div className="d-flex flex-wrap flex-stack pb-7" data-select2-id="select2-data-129-rk7g">
                <div className="d-flex flex-wrap align-items-center my-1">
                  <h3 className="fw-bold me-5 my-1">
                  {filteredProducts.length} مورد پیدا شد
                  </h3>
                </div>
                <div className="d-flex flex-wrap my-1" data-select2-id="select2-data-128-5eex">
                  <ul className="nav nav-pills me-6 mb-2 mb-sm-0" role="tablist">
                    <li className="nav-item m-0" role="presentation">
                      <a className="btn btn-sm btn-icon btn-light btn-color-muted" data-bs-toggle="tab" href="/" aria-selected="false" tabIndex="-1" role="tab">
                        <i className="la la-store-alt fs-2x fs-2 btn_home">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tab-content">
                <div id="kt_project_users_card_pane" className="tab-pane fade show active" role="tabpanel">
                  <div className="row g-6 g-xl-9">
                      {
                        filteredProducts.map((product,index) => (
                          <CompatibleProduct imageSrc={product.image} id={product.id} stockCount={product.stock_count} price={product.current_price} model={product.model} brand={product.brand} category={product.category} key={index}/>
                        ))
                      }
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Compatibility;

  