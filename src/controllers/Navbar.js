//TODO: complete
export function changeUser(user) {
    return user
}

export async function getUsers() {
    return fetch("/employees/", {
        headers: {
            "Content-type": "application/json"
        },
        method: "GET"
    }).then(response => response.json())
}