import React, {useState} from "react";
import './Start.scss'

export const Start = () =>{

    const [Flag, setFlag] = useState(true)

    const clickHandler = () => {
      setFlag(!Flag)
    }

    return(
        <div className={Flag ? "activeFlag Start" : "inactiveFlag Start"} onClick={clickHandler}>
            <button className="Start__button">
                START
            </button>
        </div>
    )
}