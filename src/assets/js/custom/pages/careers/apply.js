﻿"use strict";var KTCareersApply=function(){var t,e,i;return{init:function(){i=document.querySelector("#kt_careers_form"),t=document.getElementById("kt_careers_submit_button"), $(i.querySelector('[name="position"]')).on("change",(function(){e.revalidateField("position")})), $(i.querySelector('[name="start_date"]')).flatpickr({enableTime:!1,dateFormat:"d, M Y"}),e=FormValidation.formValidation(i,{fields:{first_name:{validators:{notEmpty:{message:"نام و نام خانوادگی الزامی است"}}},last_name:{validators:{notEmpty:{message:"نام خانوادگی الزامی است"}}},age:{validators:{notEmpty:{message:"Age is required"}}},city:{validators:{notEmpty:{message:"شهر مورد نیاز است"}}},email:{validators:{notEmpty:{message:"آدرس ایمیل مورد نیاز است"},emailAddress:{message:"مقدار یک آدرس ایمیل معتبر نیست"}}},salary:{validators:{notEmpty:{message:"حقوق مورد انتظار الزامی است"}}},position:{validators:{notEmpty:{message:"موقعیت مورد نیاز است"}}},start_date:{validators:{notEmpty:{message:"تاریخ شروع الزامی است"}}}},plugins:{trigger:new FormValidation.plugins.Trigger,bootstrap:new FormValidation.plugins.Bootstrap5({rowSelector:".fv-row",eleInvalidClass:"",eleValidClass:""})}}),t.addEventListener("click",(function(i){i.preventDefault(),e&&e.validate().then((function(e){console.log("validated!"),"Valid"==e?(t.setAttribute("data-kt-indicator","on"),t.disabled=!0,setTimeout((function(){t.removeAttribute("data-kt-indicator"),t.disabled=!1,Swal.fire({text:"فرم با موفقیت ارسال شد!",icon:"success",buttonsStyling:!1,confirmButtonText:"باشه فهمیدم!",customClass:{confirmButton:"btn btn-primary"}}).then((function(t){t.isConfirmed}))}),2e3)):Swal.fire({text:"متأسفیم ، به نظر می رسد برخی خطاها شناسایی شده است ، لطفاً دوباره امتحان کنید.",icon:"error",buttonsStyling:!1,confirmButtonText:"باشه فهمیدم!",customClass:{confirmButton:"btn btn-primary"}}).then((function(t){KTUtil.scrollTop()}))}))}))}}}();KTUtil.onDOMContentLoaded((function(){KTCareersApply.init()}));