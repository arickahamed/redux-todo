import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../Redux/Action/Action";
import "./Input.css";

const Input = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    return (
        <div className="input">
            <input
                className="input_text"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <br />
            <button disabled={!input} className="button more_btn add_task" onClick={()=>dispatch(add(input), setInput(""))}>Add</button>
        </div>
    );
};

export default Input;
