import React from "react";
import "./Lista.css"
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";





const Lista = ()=>{

    const [lista,setLista] = useState([])
    const [e,setE] = useState(true)

    

    useEffect(() => {
        axios.get("http://localhost:3001/getalltask").then(
            data=>{setLista(data.data)}
        )
      }, [lista]);
    
    
    

    const handleDelete = (id)=>{
        // try{
        //     const data =  await axios.delete("http://localhost:3001/deleteall")
        // }
        // catch(error){
        //     alert(error)
        // }
        axios.delete(`http://localhost:3001/deletetask/${id}`).
        then(data=>console.log(data)            
        ).catch(error => alert(error))
        
    }

    
    return(lista.length> 0 &&(
        <div className="listaTodo">
            <h1>Lista:</h1>
            <ul>
                {lista.map((data,index)=>{
                    return <div className="itemLista">
                        <li key={data._id}>{index + 1} - {data.name}: {data.about}</li>
                        <button onClick={()=>{handleDelete(data._id)}}>Apagar</button>
                    </div> 
                    
                })}
            </ul>
        </div>
    )
        
    )
}

export default Lista  