﻿"use strict";var KTSubscriptionsProducts=function(){var t,e,n,o;return{init:function(){n=document.getElementById("kt_modal_add_product"),o=new bootstrap.Modal(n),t=document.querySelector("#kt_subscription_products_table"),e= $(t).DataTable({info:!1,order:[],ordering:!1,paging:!1,lengthChange:!1}),KTUtil.on(t,'[data-kt-action="product_remove"]',"click",(function(t){t.preventDefault();const n=t.target.closest("tr"),o=n.querySelectorAll("td")[0].innerText;Swal.fire({text:"آیا مطمئنید که میخواهید حذف کنید "+o+"?",icon:"warning",showCancelButton:!0,buttonsStyling:!1,confirmButtonText:"بله، حذف!",cancelButtonText:"نه، لغو",customClass:{confirmButton:"btn fw-bold btn-danger",cancelButton:"btn fw-bold btn-active-light-primary"}}).then((function(t){t.value?Swal.fire({text:"شما حذف کرده اید "+o+"!.",icon:"success",buttonsStyling:!1,confirmButtonText:"باشه فهمیدم!",customClass:{confirmButton:"btn fw-bold btn-primary"}}).then((function(){e.row($(n)).remove().draw()})):"cancel"===t.dismiss&&Swal.fire({text:customerName+"حذف نشد.",icon:"error",buttonsStyling:!1,confirmButtonText:"باشه فهمیدم!",customClass:{confirmButton:"btn fw-bold btn-primary"}})}))})),function(){n.querySelector("#kt_modal_add_product_close");const r=n.querySelector("#kt_modal_add_product_cancel"),c=n.querySelector("#kt_modal_add_product_submit");r.addEventListener("click",(function(t){t.preventDefault(),Swal.fire({text:"آیا مطمئن هستید که می خواهید لغو کنید",icon:"warning",showCancelButton:!0,buttonsStyling:!1,confirmButtonText:"بله ، آن را لغو کنید!",cancelButtonText:"خیر",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-active-light"}}).then((function(t){t.value?o.hide():"cancel"===t.dismiss&&Swal.fire({text:"فرم شما لغو نشده است !.",icon:"error",buttonsStyling:!1,confirmButtonText:"باشه فهمیدم!",customClass:{confirmButton:"btn btn-primary"}})}))})),c.addEventListener("click",(function(r){r.preventDefault();var c,i=n.querySelector('input[type="radio"]:checked');i&&!0===i.checked&&(c=e.row.add([i.getAttribute("data-kt-product-name"),"1",i.getAttribute("data-kt-product-price")+" / "+i.getAttribute("data-kt-product-frequency"),t.querySelector("tbody tr td:last-child").innerHTML]).draw().node(),$(c).find("td").eq(3).addClass("text-end")),o.hide()}))}()}}}();KTUtil.onDOMContentLoaded((function(){KTSubscriptionsProducts.init()}));