import React, { useState, useEffect } from "react"
import {useRecoilState} from "recoil";
import {recoilInput, recoilValue} from "../Recoils/RecoilAtoms";

export default function UseEffectPract() {
    const [input, setInput] = useState('')
    const [ number, setNumber] = useState(0)

    const onInputChange = (e) => {
        console.log("onInputChange")
        const value = e.target.value // 우선 e.target 에서 value 를 추출
        setInput(value)
    }

    useEffect(
        () => {
            console.log("useEffect")
            setNumber(number+1)
        },
        [input]
    )

    return(
        <>
        <input onChange={onInputChange}/>
        <div style={{backgroundColor: 'blue'}}>
            {number}
        </div>
        <div style={{backgroundColor: 'yellow'}}>
            {number}
        </div>
        </>
    )
}