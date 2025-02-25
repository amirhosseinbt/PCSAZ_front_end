import React from "react";

const DiscodeListItem=(props)=>{
    return(
        <tr>
            <td class="text-start pe-0">{props.code}</td>
            <td class="text-start pe-0">{props.expirationDate}</td>
            <td class="text-start pe-0">{props.usageCount}</td>
            <td class="text-start pe-0">{props.amount}</td>
            <td class="text-start">{props.limit}</td>
        </tr>
    );
}
export default DiscodeListItem;