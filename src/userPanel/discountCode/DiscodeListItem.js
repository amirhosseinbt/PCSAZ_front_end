import {React , useEffect} from "react";

const DiscodeListItem=(props)=>{

    return(
        <tr>
            <td className="text-start pe-0">{props.code}</td>
            <td className="text-start pe-0">{props.expirationDate}</td>
            <td className="text-start pe-0">{props.usageCount}</td>
            <td className="text-start pe-0">{props.amount}</td>
            <td className="text-start">{props.limit}</td>
        </tr>
    );
}
export default DiscodeListItem;