import React from 'react'
import NavBar from '../NavBar/NavBar'
import Home from '../Pages/Home/Home'
import UserDeets from '../Pages/UserDeets/UserDeets'
import { Routes, Route } from "react-router-dom"

const RouterDevice = () => {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route
                    path = "/"
                    element = {<Home />}>
                </Route>
                <Route
                    path = "/userdeets"
                    element = {<UserDeets />}>
                </Route>
            </Routes>
        </div>
    )
}

export default RouterDevice