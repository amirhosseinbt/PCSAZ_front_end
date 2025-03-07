import React from "react";
import { useDispatch } from "react-redux";
import { categoryFilterActions } from "../store/userAuthenticaion";
const Category = (props) => 
{
    const dispatch = useDispatch();
    const onCheckBoxClick = (event) =>
    {
        if(event.target.checked === true){
            dispatch(categoryFilterActions.addCategoryToList(props.name));
        }
        else
        {
            dispatch(categoryFilterActions.removeCategoryFromList(props.name));
        }
    }
    return(
        <div className="form-check form-check-custom form-check-solid mb-5">
            <input className="form-check-input" type="checkbox" value={props.name} onChange={onCheckBoxClick}/>
            <label className="form-check-label flex-grow-1 fw-semibold text-gray-700 fs-6" for="kt_search_category_1">{props.name}
            </label>
        </div>
    );
}
export default Category;