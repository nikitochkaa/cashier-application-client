import React from "react"
import {Navigate, Routes, Route} from "react-router-dom"
import StartPage from "./components/StartPage";
import MakeOrder from "./components/MakeOrder";

export const useRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<StartPage/>}></Route>
            <Route path="/make_order" element={<MakeOrder/>}></Route>
            <Route path="*" element={<Navigate to="/"/>}></Route>
        </Routes>
    )
}

export default useRoutes