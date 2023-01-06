import { Link } from "react-router-dom";
import data from "../dataBase/fr/header.json";

function Navigation(){
    let menuAnimation = false;

    const burgerAnimation = () => {
        const menu = document.querySelector(".menu");
        const burger = document.querySelector(".burger");
        if(menuAnimation){
            menu.style.transform = "translateX(-100vw)";
            burger.style.transform = "rotate(0deg)";
            menuAnimation = false;
        }else{
            menu.style.transform = "translateX(0vw)";
            burger.style.transform = "rotate(90deg)";
            menuAnimation = true;
        }
    }

    return(
        <div className="navigation">
            <div className="burger" onClick={burgerAnimation}><svg width="50px" height="50px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" color="#000000"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16"></path></svg></div>
            <nav className="menu">
                <a>{data.header.menu.models}</a>
                <a>{data.header.menu.motosport}</a>
                <a>{data.header.menu.magasin}</a>
                <a>{data.header.menu.aPropos}</a>
            </nav>
            <div className="logo"></div>
        </div>
    )
}

export default Navigation;