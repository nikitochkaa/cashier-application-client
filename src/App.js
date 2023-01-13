import './styles/App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router} from "react-router-dom";
import useRoutes from "./routes";
import React from "react";

function App() {
    const routes = useRoutes()
    return (
        <Router>
            <div className="App">
                <Navbar/>
                {routes}
            </div>
        </Router>
    )
}

export default App;
