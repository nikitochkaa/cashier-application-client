export function addOrder(employeeId, items, quantity, setOrderQuantity, setPrice) {
    let details = []

    for (let i = 0; i < items.length; i++) {
        if (quantity[i] > 0) {
            details.push({itemId: items[i].id, quantity: quantity[i]})
        }
    }
    setOrderQuantity(new Array(items.length).fill(0))

    fetch("/orders/", {
        headers: {
            "Content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            employeeId: employeeId,
            details: details
        })
    }).then(response => response.json())
        .then(data => {
            setPrice(data.price)
        })
    return ""
}
