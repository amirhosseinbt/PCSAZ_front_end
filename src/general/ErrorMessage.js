import React from "react";
import './ErrorMessage.css'
const ErrorMessage = (props) => {
    return(
        <span id="ErrorMessagetxt" className="mb-4" dir="rtl">
           {props.text}
        </span>
    );
}

export default ErrorMessage;