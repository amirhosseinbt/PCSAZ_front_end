import React from "react";

const ModalAddAddress = ({showStatus}) =>{
    return(
        <div className="modal fade show" id="kt_modal_new_address" tabindex="-1" style={{display: 'block', paddingRight: '0px'}} aria-modal="true" role="dialog">
			 
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
								<div className="notice d-flex bg-light-warning rounded border-warning border border-dashed mb-9 p-6">
									<i className="ki-duotone ki-information fs-2tx text-warning me-4">
										<span className="path1"></span>
										<span className="path2"></span>
										<span className="path3"></span>
									</i>
									<div className="d-flex flex-stack flex-grow-1">
										<div className="fw-semibold">
											<h4 className="text-gray-900 fw-bold">هشدار</h4>
											<div className="fs-6 text-gray-700">به روزرسانی آدرس ممکن است مورد پتعدادد شما واقع شود
											<a href="#">مالیات</a></div>
										</div>
									</div>
								</div>
								<div className="row mb-5">
									<div className="col-md-6 fv-row fv-plugins-icon-container">
										<label className="required fs-5 fw-semibold mb-2">نام</label>
										<input type="text" className="form-control form-control-solid" placeholder="" name="first-name"/>
									<div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div></div>
									<div className="col-md-6 fv-row fv-plugins-icon-container">
										<label className="required fs-5 fw-semibold mb-2">نام خانوادگی</label>
										<input type="text" className="form-control form-control-solid" placeholder="" name="last-name"/>
									<div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div></div>
								</div>
								<div className="d-flex flex-column mb-5 fv-row fv-plugins-icon-container">
									<label className="d-flex align-items-center fs-5 fw-semibold mb-2">
										<span className="required">کشور</span>
										<span className="ms-1" data-bs-toggle="tooltip" aria-label="شماr payment statements may very based on selected country" data-bs-original-title="شماr payment statements may very based on selected country" data-kt-initialized="1">
											<i className="ki-duotone ki-information-5 text-gray-500 fs-6">
												<span className="path1"></span>
												<span className="path2"></span>
												<span className="path3"></span>
											</i>
										</span>
									</label>
									<select name="country" data-control="select2" data-dropdown-parent="#kt_modal_new_address" data-placeholder="انتخاب  کشور..." className="form-select form-select-solid select2-hidden-accessible" tabindex="-1" aria-hidden="true" data-kt-initialized="1" data-select2-id="select2-data-344-lrvd">
										<option value="" data-select2-id="select2-data-346-mrsj">انتخاب  کشور...</option>
										<option value="AF">Afghanistan</option>
										<option value="AX">Aland Islands</option>
										<option value="AL">Albania</option>
										<option value="DZ">Algeria</option>
										<option value="AS">American Samoa</option>
										<option value="AD">Andیاra</option>
										<option value="AO">Angola</option>
										<option value="هوش مصنوعی">Anguilla</option>
										<option value="AG">Antigua and Barbuda</option>
										<option value="AR">Argentina</option>
										<option value="AM">Armenia</option>
										<option value="AW">Aruba</option>
										<option value="AU">ایران</option>
										<option value="AT">Austria</option>
										<option value="AZ">Azerbaijan</option>
										<option value="BS">Bahamas</option>
										<option value="BH">Bahrain</option>
										<option value="BD">Bangladesh</option>
										<option value="BB">Barbados</option>
										<option value="BY">Belarus</option>
										<option value="BE">Belgium</option>
										<option value="BZ">Belize</option>
										<option value="BJ">Benin</option>
										<option value="BM">Bermuda</option>
										<option value="BT">Bhutan</option>
										<option value="BO">Bolivia, Plurinational State of</option>
										<option value="BQ">Bonaire, Sint Eustatius and Saba</option>
										<option value="BA">Bosnia and Herzegovina</option>
										<option value="BW">Botswana</option>
										<option value="BR">Brazil</option>
										<option value="IO">British هندn Ocean Territیاy</option>
										<option value="BN">Brunei Darussalam</option>
										<option value="BG">Bulgaria</option>
										<option value="BF">Burkina Faso</option>
										<option value="BI">Burundi</option>
										<option value="KH">Cambodia</option>
										<option value="CM">Cameroon</option>
										<option value="CA">Canada</option>
										<option value="CV">Cape Verde</option>
										<option value="KY">Cayman Islands</option>
										<option value="CF">Central African Republic</option>
										<option value="TD">Chad</option>
										<option value="CL">Chile</option>
										<option value="CN">China</option>
										<option value="CX">Christmas Island</option>
										<option value="CC">Cocos (Keeling) Islands</option>
										<option value="CO">Colombia</option>
										<option value="KM">Comیاos</option>
										<option value="CK">Cook Islands</option>
										<option value="CR">Costa Rica</option>
										<option value="CI">Côte d'Ivoire</option>
										<option value="HR">Croatia</option>
										<option value="CU">Cuba</option>
										<option value="CW">Curaçao</option>
										<option value="CZ">Czech Republic</option>
										<option value="DK">Denmark</option>
										<option value="DJ">Djibouti</option>
										<option value="DM">Dominica</option>
										<option value="DO">Dominican Republic</option>
										<option value="EC">Ecuadیا</option>
										<option value="EG">Egypt</option>
										<option value="SV">El Salvadیا</option>
										<option value="GQ">Equatیاial Guinea</option>
										<option value="ER">Eritrea</option>
										<option value="EE">Estonia</option>
										<option value="ET">Ethiopia</option>
										<option value="FK">Falkland Islands (Malvinas)</option>
										<option value="FJ">Fiji</option>
										<option value="FI">Finland</option>
										<option value="FR">فرانسه</option>
										<option value="PF">فرانسه Polynesia</option>
										<option value="GA">Gabon</option>
										<option value="GM">Gambia</option>
										<option value="GE">Georgia</option>
										<option value="DE">المان</option>
										<option value="GH">Ghana</option>
										<option value="GI">Gibraltar</option>
										<option value="GR">Greece</option>
										<option value="GL">Greenland</option>
										<option value="GD">Grenada</option>
										<option value="GU">Guam</option>
										<option value="GT">Guatemala</option>
										<option value="GG">Guernsey</option>
										<option value="GN">Guinea</option>
										<option value="GW">Guinea-Bissau</option>
										<option value="HT">هلند</option>
										<option value="VA">Holy See (Vatican شهر State)</option>
										<option value="HN">Honduras</option>
										<option value="HK">Hong Kong</option>
										<option value="HU">Hungary</option>
										<option value="IS">ایساند</option>
										<option value="IN">هند</option>
										<option value="شناسه">Indonesia</option>
										<option value="IR">Iran, Islamic Republic of</option>
										<option value="IQ">Iraq</option>
										<option value="IE">Ireland</option>
										<option value="IM">Isle of Man</option>
										<option value="IL">Israel</option>
										<option value="IT">Italy</option>
										<option value="JM">Jamaica</option>
										<option value="JP">Japan</option>
										<option value="JE">Jersey</option>
										<option value="JO">Jیاdan</option>
										<option value="KZ">Kazakhstan</option>
										<option value="KE">Kenya</option>
										<option value="KI">ایتالیا</option>
										<option value="KP">Kیاea, دموcratic People's Republic of</option>
										<option value="KW">Kuwait</option>
										<option value="KG">Kyrgyzstan</option>
										<option value="LA">Lao People's دموcratic Republic</option>
										<option value="LV">Latvia</option>
										<option value="LB">Lebanon</option>
										<option value="LS">Lesotho</option>
										<option value="LR">Liberia</option>
										<option value="LY">Libya</option>
										<option value="LI">Liechtenstein</option>
										<option value="LT">Lithuania</option>
										<option value="LU">Luxembourg</option>
										<option value="MO">Macao</option>
										<option value="MG">Madagascar</option>
										<option value="MW">Malawi</option>
										<option value="MY">Malaysia</option>
										<option value="MV">Maldives</option>
										<option value="ML">Mali</option>
										<option value="MT">Malta</option>
										<option value="MH">Marshall Islands</option>
										<option value="MQ">Martinique</option>
										<option value="MR">Mauritania</option>
										<option value="MU">Mauritius</option>
										<option value="MX">مکزیک</option>
										<option value="FM">Micronesia, Federated States of</option>
										<option value="MD">Moldova, Republic of</option>
										<option value="MC">فرانسه</option>
										<option value="MN">Mongolia</option>
										<option value="ME">Montenegro</option>
										<option value="MS">Montserrat</option>
										<option value="MA">Mیاocco</option>
										<option value="MZ">Mozambique</option>
										<option value="MM">منanmar</option>
										<option value="NA">Namibia</option>
										<option value="NR">Nauru</option>
										<option value="NP">Nepal</option>
										<option value="NL">Netherlands</option>
										<option value="NZ">جدید Zealand</option>
										<option value="NI">Nicaragua</option>
										<option value="NE">Niger</option>
										<option value="NG">Nigeria</option>
										<option value="NU">Niue</option>
										<option value="NF">Nیاfolk Island</option>
										<option value="MP">Nیاthern Mariana Islands</option>
										<option value="NO">Nیاway</option>
										<option value="OM">Oman</option>
										<option value="PK">Pakistan</option>
										<option value="PW">Palau</option>
										<option value="PS">Palestinian Territیاy, Occupied</option>
										<option value="PA">Panama</option>
										<option value="PG">Papua جدید Guinea</option>
										<option value="PY">Paraguay</option>
										<option value="PE">Peru</option>
										<option value="PH">Philippines</option>
										<option value="PL">لهستان</option>
										<option value="PT">Pیاtugal</option>
										<option value="PR">Puerto Rico</option>
										<option value="QA">Qatar</option>
										<option value="RO">Romania</option>
										<option value="RU">Russian Federation</option>
										<option value="RW">Rwanda</option>
										<option value="BL">Saint Barthélemy</option>
										<option value="KN">Saint Kitts and Nevis</option>
										<option value="LC">Saint Lucia</option>
										<option value="MF">Saint Martin (فرانسه part)</option>
										<option value="VC">Saint Vincent and the Grenadines</option>
										<option value="WS">Samoa</option>
										<option value="SM">San Marino</option>
										<option value="ST">Sao Tome and Principe</option>
										<option value="SA">Saudi Arabia</option>
										<option value="SN">Senegal</option>
										<option value="RS">Serbia</option>
										<option value="SC">Seychelles</option>
										<option value="SL">Sierra Leone</option>
										<option value="SG">Singapیاe</option>
										<option value="SX">Sint Maarten (Dutch part)</option>
										<option value="SK">Slovakia</option>
										<option value="SI">Slovenia</option>
										<option value="SB">Solomon Islands</option>
										<option value="SO">Somalia</option>
										<option value="ZA">South Africa</option>
										<option value="KR">South Kیاea</option>
										<option value="SS">South Sudan</option>
										<option value="ES">Spain</option>
										<option value="LK">Sri Lanka</option>
										<option value="SD">Sudan</option>
										<option value="SR">Suriname</option>
										<option value="SZ">Swaziland</option>
										<option value="SE">سوئد</option>
										<option value="CH">Switzerland</option>
										<option value="SY">Syrian Arab Republic</option>
										<option value="TW">Taiwan, حرفه ایvince of China</option>
										<option value="TJ">Tajikistan</option>
										<option value="TZ">Tanzania, United Republic of</option>
										<option value="TH">Thailand</option>
										<option value="TG">Togo</option>
										<option value="TK">Tokelau</option>
										<option value="TO">Tonga</option>
										<option value="TT">Trinidad and Tobago</option>
										<option value="TN">Tunisia</option>
										<option value="TR">ترکیه</option>
										<option value="TM">Turkmenistan</option>
										<option value="TC">Turks and Caicos Islands</option>
										<option value="TV">Tuvalu</option>
										<option value="UG">Uganda</option>
										<option value="UA">Ukraine</option>
										<option value="AE">United Arab Emirates</option>
										<option value="GB">United Kingdom</option>
										<option value="ایران">همدان</option>
										<option value="UY">Uruguay</option>
										<option value="UZ">Uzbekistan</option>
										<option value="VU">ونuatu</option>
										<option value="VE">Venezuela, Bolivarian Republic of</option>
										<option value="VN">Vietnam</option>
										<option value="VI">Virgin Islands</option>
										<option value="YE">Yemen</option>
										<option value="ZM">Zambia</option>
										<option value="ZW">Zimbabwe</option>
									</select><span className="select2 select2-container select2-container--bootstrap5" dir="rtl" data-select2-id="select2-data-345-gkad" style={{width: '100%'}}><span className="selection"><span className="select2-selection select2-selection--single form-select form-select-solid undefined" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-country-fc-container" aria-controls="select2-country-fc-container"><span className="select2-selection__rendered" id="select2-country-fc-container" role="textbox" aria-readonly="true" title="انتخاب  کشور..."><span className="select2-selection__placeholder">انتخاب  کشور...</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
								<div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div></div>
								<div className="d-flex flex-column mb-5 fv-row fv-plugins-icon-container">
									<label className="required fs-5 fw-semibold mb-2">ادرس1</label>
									<input className="form-control form-control-solid" placeholder="" name="address1"/>
								<div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div></div>
								<div className="d-flex flex-column mb-5 fv-row fv-plugins-icon-container">
									<label className="required fs-5 fw-semibold mb-2">ادرس2</label>
									<input className="form-control form-control-solid" placeholder="" name="address2"/>
								<div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div></div>
								<div className="d-flex flex-column mb-5 fv-row fv-plugins-icon-container">
									<label className="fs-5 fw-semibold mb-2">شهر</label>
									<input className="form-control form-control-solid" placeholder="" name="city"/>
								<div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div></div>
								<div className="row g-9 mb-5">
									<div className="col-md-6 fv-row fv-plugins-icon-container">
										<label className="fs-5 fw-semibold mb-2">استان</label>
										<input className="form-control form-control-solid" placeholder="" name="state"/>
									<div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div></div>
									<div className="col-md-6 fv-row fv-plugins-icon-container">
										<label className="fs-5 fw-semibold mb-2">کدپستی</label>
										<input className="form-control form-control-solid" placeholder="" name="postcode"/>
									<div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div></div>
								</div>
								<div className="fv-row mb-5">
									<div className="d-flex flex-stack">
										<div className="me-5">
											<label className="fs-5 fw-semibold">به عنوان مخاطب صورتحساب استفاده می شود</label>
											<div className="fs-7 fw-semibold text-muted">اگر به اطلاعات بیشتری نیاز دارید ، لطفا برنامه ریزی بودجه را بررسی کنید</div>
										</div>
										<label className="form-check form-switch form-check-custom form-check-solid">
											<input className="form-check-input" name="billing" type="checkbox" value="1" checked="checked"/>
											<span className="form-check-label fw-semibold text-muted">بله</span>
										</label>
									</div>
								</div>
							</div>
						</div>
						<div className="modal-footer flex-center">
							<button type="reset" id="kt_modal_new_address_cancel" className="btn btn-light me-3">لغو</button>
							<button type="submit" id="kt_modal_new_address_submit" className="btn btn-primary">
								<span className="indicator-label">ثبت</span>
								<span className="indicator-progress">لطفا صبر کنید...
								<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
    );
}
export default ModalAddAddress;