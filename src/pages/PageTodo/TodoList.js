import React, { useEffect } from "react";
import './TodoList.css'
import { useState } from "react";
import axios from 'axios'


const Todolist = ()=>{

    const salvarNoBanco = async(evento)=>{
        evento.preventDefault()
        if(!empty){
            setErro(false)
            var resp = await axios.post(`http://localhost:3001/posttask`,{
                name,
                about
            })
            setName("")
            setAbout("")
        } else {
            setErro(true)
        }
        
    }

    // const salvarNoBanco = ()=>{
    //     axios.post(`http://localhost:3001/posttask`,{
    //                  name,
    //                  about
    //              }).then(data=>{console.log(data)}).catch(error=>alert(error))
    // }

    const [name,setName] = useState("")
    const [about,setAbout] = useState("")
    const [todo,setTodo] = useState(false)
    const [empty,setEmpty] = useState(true)
    const [erro,setErro] = useState(false)

    useEffect(()=>{
        if(name !== "" && about !== ""){
            setEmpty(false)
        } else if(name === "" || about === ""){
            setEmpty(true)
        }
    },[name,about,erro])
    
    return(
            <div className="todolistContainer">
                {erro && <div className="erro"><p>Erro: uma ou mais lacunas estão vazia</p></div>}
                <div>
                    <h1>Adicionar tarefas</h1>
                    <form action="submit">
                        <div>    
                            <div className="formLine">            
                                <label htmlFor="">Tarefa:</label>
                                <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                            </div>
                            <div className="formLine">            
                                <label htmlFor="">Sobre:</label>
                                <textarea rows={7} value={about} cols={40} type="text" onChange={(e)=>{setAbout(e.target.value)}}/>
                            </div>
                        </div>
                        <div className="containerBtn">
                            <button onClick={salvarNoBanco}><a href="/">Adicionar</a></button>
                        </div>
                        
                    </form>
                    <div className="lista">
                        
                    </div>
                </div>
            </div>
    )
}

export default Todolist