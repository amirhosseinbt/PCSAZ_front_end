import React from "react"
import CPU from '../assets/media/product/CPU.jpg';
import Motherboard from '../assets/media/product/Motherboard.jpeg'
import RamStick from '../assets/media/product/RamStick.jpg';
import Cooler from '../assets/media/product/Cooler.jpeg';
import GPU from '../assets/media/product/GPU.jpeg';
import PowerSupply from '../assets/media/product/PowerSupply.jpeg';
import Case from '../assets/media/product/Case.jpeg';
import SSD from '../assets/media/product/SSD.jpeg';
import HDD from '../assets/media/product/HDD.jpeg';
const CompatibleProduct = (props) =>
{
	return(
	<div className="col-md-6 col-xxl-6 grow">
		<div className="card">
			<div className="card-body d-flex flex-center flex-column pt-12 p-9">
				<div className="symbol symbol-65px symbol-circle mb-5">
					<img src={props.category === 'CPU'?CPU:props.category === 'Motherboard'?Motherboard:props.category === 'RAM Stick'?RamStick:props.category === 'Cooler'?Cooler:props.category === 'GPU'?GPU: props.category==='Power Supply'?PowerSupply: props.category==='Case'?Case: props.category==='SSD'?SSD:props.category==='HDD'?HDD:null} alt=""/>
				</div>
				<p href="#" className="fs-4 text-gray-800 text-hover-primary fw-bold mb-0">{props.category}</p>
				<div className="fw-semibold text-gray-400 mb-6">تعداد در انبار : {props.stockCount}</div>	
				<div className="d-flex flex-center flex-wrap">
					<div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
						<div className="fs-6 fw-bold text-gray-700">{props.price}</div>
						<div className="fw-semibold text-gray-400">قیمت</div>
					</div>
					<div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
						<div className="fs-6 fw-bold text-gray-700">{props.id}</div>
						<div className="fw-semibold text-gray-400">شناسه کالا</div>
					</div>
					<div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
						<div className="fs-6 fw-bold text-gray-700">{props.brand}</div>
						<div className="fw-semibold text-gray-400">برند</div>
					</div>
					<div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
						<div className="fs-6 fw-bold text-gray-700">{props.model}</div>
						<div className="fw-semibold text-gray-400">مدل</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	);
}
export default CompatibleProduct;
