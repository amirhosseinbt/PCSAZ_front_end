import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import ErrorMessage from "../../general/ErrorMessage";
const ModalAddAddress = ({showStatus}) =>{
	const jwt = useSelector(state=>state.jwt.jwt);
	axios.defaults.headers.common['Authorization'] = jwt;
	const [province,setProvince] = useState('');
	const [remainder,setRemainder] = useState('');
	const [showErrorProvince , setShowErrorProvince] =useState(false);
	const [errorTextProvince , setErrorTextProvince] =useState('');
	const [showErrorRemainder , setShowErrorRemainder] =useState(false);
	const [errorTextRemainder , setErrorTextRemainder] =useState('');
	const ip = useSelector(state=>state.ip.ip);
	const onProvinceSelect = (event) =>{
		setProvince(event.target.value);
	}
	const onAddressChange = (event) =>{
		setRemainder(event.target.value);
	}
	const onSubmitClick = (event) =>
	{
		event.preventDefault();
		if(province === 'default' || province === '')
		{
			setShowErrorProvince(true);
			setShowErrorRemainder(false);
			setErrorTextProvince('لطفا یک استان را انتخاب کنید.');
		}
		else if(remainder.length === 0)
		{
			setShowErrorRemainder(true);
			setShowErrorProvince(false);
			setErrorTextRemainder('لطفا آدرس را وارد کنید.');
		}
		else
		{
			axios.post(`http://${ip}:8000/user/add_addresses/`, {
				adresses:[
					{
						province:province,
						remainder:remainder
					}
				]
			})
			.then((res) => {
				showStatus(false);
			})
			.catch((err) => {
				setShowErrorRemainder(true);
				setErrorTextRemainder(err.response.data.error);
			});
		}
	}
    return(
        <div className="modal fade show" id="kt_modal_new_address" tabIndex="-1" style={{display: 'block', paddingRight: '0px'}} aria-modal="true" role="dialog">
			 
			<div className="modal-dialog modal-dialog-centered mw-650px">
				 
				<div className="modal-content">
					 
					<form className="form fv-plugins-bootstrap5 fv-plugins-framework" action="#" id="kt_modal_new_address_form">
						 
						<div className="modal-header" id="kt_modal_new_address_header">
							 
							<h2>آدرس های جدید را اضافه کنید</h2>
							 
							 
							<button className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal" onClick={()=>showStatus(false)}>
								<i className="ki-duotone ki-cross fs-1">
									<span className="path1"></span>
									<span className="path2"></span>
								</i>
							</button>		 
						</div>
						<div className="modal-body py-10 px-lg-17">
							 
							<div className="scroll-y me-n7 pe-7" id="kt_modal_new_address_scroll" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto" data-kt-scroll-dependencies="#kt_modal_new_address_header" data-kt-scroll-wrappers="#kt_modal_new_address_scroll" data-kt-scroll-offset="300px" style={{maxHeight: '418px'}}>
								<div className="d-flex flex-column mb-5 fv-row fv-plugins-icon-container">
									<label className="d-flex align-items-center fs-5 fw-semibold mb-2">
										<span className="required">استان</span>
									</label>
									<select defaultValue={"default"} name="province" className="form-select form-select-solid" tabIndex="-2" onChange={onProvinceSelect}>
										<option value="default" disabled>-- انتخاب استان --</option>
										<option value="همدان">همدان</option>
										<option value="تهران">تهران</option>
										<option value="شیراز">شیراز</option>
										<option value="اصفهان">اصفهان</option>
										<option value="تبریز">تبریز</option>
									</select>
								</div>
								{showErrorProvince?<ErrorMessage text={errorTextProvince}/>:null}
								<div className="d-flex flex-column mb-5 fv-row fv-plugins-icon-container">
									<label className="required fs-5 fw-semibold mb-2">آدرس</label>
									<input className="form-control form-control-solid" placeholder="" name="reminder" onChange={onAddressChange}/>
								</div>
								{showErrorRemainder?<ErrorMessage text={errorTextRemainder}/>:null}
							</div>
						</div>
						<div className="modal-footer flex-center">
							<button type="reset" className="btn btn-light me-3" onClick={()=>showStatus(false)}>لغو</button>
							<button type="submit" id="kt_modal_new_address_submit" className="btn btn-primary" onClick={onSubmitClick}>
								<span className="indicator-label">ثبت</span>
								
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
    );
}
export default ModalAddAddress;