export async function getItems() {
    return fetch("/items/", {
        headers: {
            "Content-type": "application/json"
        },
        method: "GET"
    }).then(response => response.json())
}