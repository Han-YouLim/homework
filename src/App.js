import React, { useState, useRef } from "react"
import "./App.css"
import styled, { createGlobalStyle } from "styled-components"
import { Route, Routes } from "react-router-dom"
import UserList from "./component/UserLIst"
import UserProfile from "./component/UserProfile"
import UseEffectPract from "./component/UseEffectPract"

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }`

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<UserList />} />
                <Route path="/user/:username" element={<UserProfile />} />
                <Route path="/finduser/:username" element={<UserProfile />} />
                <Route path="/useEffectPract" element={<UseEffectPract />} />
            </Routes>
            <GlobalStyle />
        </>
    )
}

export default App
