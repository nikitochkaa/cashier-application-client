import React, {useEffect, useState} from "react"
import {getItems} from "../controllers/Item";
import Items from "./Items";
import Order from "./Order";
import {addOrder} from "../controllers/Order";
import {getCurrentUser} from "./Navbar";

export const orderContext = React.createContext({})

const MakeOrder = () => {
    const [orderQuantity, setOrderQuantity] = useState([])
    const [items, setItems] = useState([])
    useEffect(() => {
        getItems().then(data => {
            setItems(data)
            setOrderQuantity(new Array(data.length).fill(0))
        })
    }, [])

    const value = {
        items: items,
        orderQuantity: orderQuantity,
        setOrderQuantity: setOrderQuantity
    }

    const [price, setPrice] = useState(0)
    const employee = getCurrentUser()

    return (
        <div className="makeOrder">
            <orderContext.Provider value={value}>
                <button id='sendOrder' onClick={() => addOrder(employee.id, items, orderQuantity, setOrderQuantity, setPrice)}>
                    Send Order
                </button>
                <p id='p'>
                    Price of last order: {price}
                </p>
                <div className="items">
                    <Items items={items}/>
                </div>
                <div className="order">
                    <Order/>
                </div>
            </orderContext.Provider>
        </div>
    )
}

export default MakeOrder