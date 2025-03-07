import React from "react";
import CPU from '../../assets/media/product/CPU.jpg';
import Motherboard from '../../assets/media/product/Motherboard.jpeg'
import RamStick from '../../assets/media/product/RamStick.jpg';
import Cooler from '../../assets/media/product/Cooler.jpeg';
import GPU from '../../assets/media/product/GPU.jpeg';
import PowerSupply from '../../assets/media/product/PowerSupply.jpeg';
import Case from '../../assets/media/product/Case.jpeg';
import SSD from '../../assets/media/product/SSD.jpeg';
import HDD from '../../assets/media/product/HDD.jpeg';
const ShoppingDetailItem = (props) => {
    return(
        <tr>
            <td>
                <div className="d-flex align-items-center mt-3">
                    <div className="symbol symbol-50px">
                        <img src={props.category === 'CPU'?CPU:props.category === 'Motherboard'?Motherboard:props.category === 'RAM Stick'?RamStick:props.category === 'Cooler'?Cooler:props.category === 'GPU'?GPU: props.category==='Power Supply'?PowerSupply: props.category==='Case'?Case: props.category==='SSD'?SSD:props.category==='HDD'?HDD:null} alt=""/>
                    </div>
                    <div className="ms-5 mt-3" style={{cursor:"pointer"}}>
                        <p  className="fw-bold text-gray-600 text-hover-primary">{props.category}</p>
                    </div>
                </div>
            </td>
            <td className="text-start">{props.id}</td>
            <td className="text-start">{props.quantity}</td>
            <td className="text-start">{props.price}</td>
       </tr>
    );
}
export default ShoppingDetailItem;