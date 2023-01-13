import React from "react"
import Item from "./Item"

const Items = items => {
    return (
        <div>
            <ul>
                {items.items.map(item => {
                    return (
                        <Item item={item}/>
                    )
                })}
            </ul>
        </div>
    )
}

export default Items