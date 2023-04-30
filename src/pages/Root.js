import React from "react";
import '../App.css';
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const RootLayout = () => {
    return (
        <div className="App">
            <MainNavigation />
            <Outlet />
        </div>
    );
};

export default RootLayout;
