import React, {useEffect, useState} from "react";
import Users from "./Users";
import {getUsers} from "../controllers/Navbar";

export function getCurrentUser() {
    return JSON.parse(window.localStorage.getItem('currentUser'))
}

export function changeCurrentUser(newUser) {
    window.localStorage.setItem('currentUser', JSON.stringify(newUser));
    window.dispatchEvent(new Event("userChanged"))
}

const Navbar = () => {
    const [currentUser, setCurrentUser] = useState(getCurrentUser() || {})
    const [users, setUsers] = useState([])
    useEffect(() => {
        getUsers().then(data => {
            setUsers(data)
            if (!window.localStorage.getItem('currentUser')) {
                window.localStorage.setItem('currentUser', JSON.stringify(data[0]))
                window.dispatchEvent(new Event("userChanged"))
            }
        })
    }, [])
    useEffect(() => {
        window.addEventListener("userChanged", () => {
            setCurrentUser(getCurrentUser())
        })
    }, [])
    return (
        <div>
            <nav className="navbar">
                <li className="users">
                    <a href="/">{currentUser.name + " " + currentUser.surname}</a>
                    <ul className="dropdown">
                        <Users users={users}/>
                    </ul>
                </li>
                <li className="nav-links">
                    <div className="navmenu">
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/orders">Orders</a></li>
                        <li><a href="/make_order">Make order</a></li>
                        <li><a href="/employees">Employees</a></li>
                    </div>
                </li>
            </nav>
        </div>
    )
}

export default Navbar;