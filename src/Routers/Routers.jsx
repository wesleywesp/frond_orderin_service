import React from "react";
import { Routes, Route } from "react-router-dom";
import {AdminRoute} from "./AdminRoute";
import {CustomerRouter} from "./CustomerRoute";


export const Routers=()=>{
    return(
        <div>
            <Routes>
                <Route path="/admin/restaurant/*" element={<AdminRoute/>} />
                <Route path="/*" element={<CustomerRouter/>} />
            </Routes>
        </div>
    )
}