import React from "react"

const OrderedItem = item => {
    return (
        <li>
            {item.item.name + " x" + item.item.quantity}
        </li>
    )
}

export default OrderedItem