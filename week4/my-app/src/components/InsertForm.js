import React, { useState } from 'react';

const InsertForm = ({onInsert, disabled}) => {
    const [inputValue, setInputValue] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        /* if ( typeof onInsert === "function" ) */
        onInsert(inputValue);
        setInputValue("");
    }

    return (
        <form onSubmit={submitHandler} style={{
            backgroundColor: "#ffffff",
            borderRadius: 16,
            marginBottom: 16,
            display: "flex",
            justifyContent : "space-between",
            alignItems: "center"
        }}>
            <input value={inputValue} disabled={disabled} onChange={(e) => {
                setInputValue(e.target.value);
            }} style={{
                flex: 1,
                border: "none",
                color: "#000000",
                padding: "6px 12px",
                backgroundColor: "transparent"
            }} />
            <button type="submit" style={{
                border: "none",
                borderRadius: 16,
                backgroundColor: "#3ab6bc",
                color: "#ffffff",
                cursor: "pointer",
                padding: "8px 16px"
            }}>등록</button>
        </form>

    );
}

export default InsertForm;