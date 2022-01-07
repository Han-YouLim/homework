import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import { RecoilRoot } from "recoil"
import { CookiesProvider } from "react-cookie"

ReactDOM.render(
    <CookiesProvider>
        <RecoilRoot>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </RecoilRoot>
    </CookiesProvider>,
    document.getElementById("root")
)
