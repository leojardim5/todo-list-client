import {React} from "react";
import "./Header.css"
import { NavLink } from "react-router-dom";


const Header = ()=>{
    return(
    <div>
        <div className='header'>
        <div className='divContainer'>
            <h1>To do List</h1>
            <ul>
            <NavLink exact to={'/'} className="linkCss" activeClassName="linkActive" ><li>Home</li></NavLink>
            <NavLink to={'about'} className="linkCss" activeClassName="linkActive" ><li>About</li></NavLink>
            <NavLink to={'/contact'} className="linkCss"       activeClassName="linkActive" ><li>Contact</li></NavLink>
            <NavLink className="linkCss" to="sair"><li>Sair</li></NavLink>
            </ul>
        </div>
        </div>
    </div>
    )
}

export default Header