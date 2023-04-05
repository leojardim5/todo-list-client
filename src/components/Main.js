import React from "react";
import './Main.css'



const Main = ({children})=>{
    return(
        <div className="mainContainer">
            {children}
        </div>
    )
}

export default Main