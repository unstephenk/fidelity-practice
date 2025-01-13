"use client"

import React, {useState} from "react";

export const Button = () => {
    const [displayText, setDisplayText] = useState("");

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDisplayText(event.target.value);
    }

    return (
        <>
            <input placeholder={"test"} onChange={handleOnChange}></input>
            <div>{displayText}</div>
        </>
    )
}