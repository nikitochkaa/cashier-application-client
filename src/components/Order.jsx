import React, {useContext} from "react"
import OrderedItem from "./OrderedItem";
import {orderContext} from "./MakeOrder";

const Order = () => {
    const {items, orderQuantity, setOrderQuantity} = useContext(orderContext)
    return (
        <div>
            <ul>
                {items.map(item => {
                    const index = items.findIndex(i => i.id === item.id)
                    return (
                        <OrderedItem item={{name: item.name, quantity: orderQuantity[index]}}/>
                    )
                })}
            </ul>
        </div>
    )
}

export default Order