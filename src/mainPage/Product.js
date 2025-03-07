import React from "react";
import CPU from '../assets/media/product/CPU.jpg';
import Motherboard from '../assets/media/product/Motherboard.jpeg'
import RamStick from '../assets/media/product/RamStick.jpg';
import Cooler from '../assets/media/product/Cooler.jpeg';
import GPU from '../assets/media/product/GPU.jpeg';
import PowerSupply from '../assets/media/product/PowerSupply.jpeg';
import Case from '../assets/media/product/Case.jpeg';
import SSD from '../assets/media/product/SSD.jpeg';
import HDD from '../assets/media/product/HDD.jpeg';
import { useDispatch } from "react-redux";
import { cpActions } from "../store/userAuthenticaion";
const Product = (props) =>{
    const dispatch = useDispatch();
    const onCheckBoxClick = (event) =>
    {
        if(event.target.checked === true){
            const item = {
                category: props.category,
                id: props.id
            };
            dispatch(cpActions.addItemToList(item));
        }
        else
        {
            dispatch(cpActions.removeItemFromList(props.id));
        }
    }
    return(
    <tr>
        <td>
            <div  className="form-check form-check-sm form-check-custom form-check-solid">
            <input  className="form-check-input" type="checkbox" value={props.id} onClick={onCheckBoxClick}/>
            </div>
        </td>
        <td>
            <div  className="d-flex align-items-center">
                
            <div className="symbol symbol-65px symbol-circle mb-5">
                <img  className="symbol-label" src={
                props.category === 'CPU'?CPU:props.category === 'Motherboard'?Motherboard:props.category === 'RAM Stick'?RamStick:props.category === 'Cooler'?Cooler:props.category === 'GPU'?GPU: props.category==='Power Supply'?PowerSupply: props.category==='Case'?Case: props.category==='SSD'?SSD:props.category==='HDD'?HDD:null} alt=""/>
            </div>
            <div  className="ms-5 mt-5" style={{cursor:'pointer'}}>
                <p className="text-gray-800 text-hover-primary fs-5 fw-bold">{props.category}</p>
            </div>
            </div>
        </td>
        <td  className="text-start pe-0">
            <span  className="fw-bold">{props.id}</span>
        </td>
        <td  className="text-start pe-0">
            <span  className="fw-bold ms-3">{props.model}</span>  
        </td>
        <td  className="text-start">
            <span  className="fw-bold ms-3">{props.brand}</span>  
        </td>
        <td  className="text-start pe-0" data-order="0">
            <span  className="fw-bold ms-3">{props.stockCount}</span>
        </td>
        <td  className="text-start pe-0">
            <span  className="fw-bold ms-3">{props.price}</span>
        </td>
    </tr>
    );
}
export default Product;