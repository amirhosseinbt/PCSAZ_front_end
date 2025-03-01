import React from "react";

const SubscriptionDetail = () =>{
    return(
    <div className="card card-xl-stretch mb-5 mb-xl-8">
        <div className="card-body p-0">
            <div className="px-9 pt-7 card-rounded h-275px w-100 bg-info">
                <div className="d-flex flex-stack">
                    <h3 className="m-0 text-white fw-bold fs-3">وضعیت اشتراک</h3>
                </div>
                <div className="d-flex text-center flex-column text-white pt-8">
                    <span className="fw-semibold fs-7">میزان سود ماهیانه</span>
                    <span className="fw-bold fs-2x pt-1">$37,562.00</span>
                </div>
            </div>
            <div className="bg-body shadow-sm card-rounded mx-9 mb-9 px-6 py-9 position-relative z-index-1" style={{marginTop: '-100px'}}>
                <div className="d-flex align-items-center mb-6">
                    <div className="symbol symbol-45px w-40px me-5">
                        <span className="symbol-label bg-lighten">
                            <i className="fa-solid la-clock fs-1">
                                <span className="path1"></span>
                                <span className="path2"></span>
                            </i>
                        </span>
                    </div>
                    <div className="d-flex align-items-center flex-wrap w-100">
                        <div className="mb-1 pe-3 flex-grow-1">
                            <a href="#" className="fs-5 text-gray-800 text-hover-primary fw-bold mb-2">زمان باقی مانده</a>
                            <div className="text-gray-400 fw-semibold fs-5 mb-2">10 روز</div>
                        </div>
                        {/* <div className="d-flex align-items-center"> */}
                            <div className="progress h-5px w-100">
                                <div className="progress-bar bg-info" role="progressbar" style={{width: '33%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            {/* </div> */}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
}
export default SubscriptionDetail;