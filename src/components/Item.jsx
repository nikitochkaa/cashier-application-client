import React, {useContext} from "react"
import {orderContext} from "./MakeOrder";

const Item = item => {
    const {items, orderQuantity, setOrderQuantity} = useContext(orderContext)

    const addItemToOrder = item => {
        const index = items.findIndex(i => i.id === item.id)
        let newQuantity = [...orderQuantity]
        newQuantity[index]++
        setOrderQuantity(newQuantity)
    }

    return (
        <li>
            <button onClick={() => addItemToOrder(item.item)}>
                {item.item.name + "    (" + item.item.price + " CZK)"}
            </button>
        </li>
    )
}

export default Item