import React,{useRef,useState,useEffect} from 'react'
import { BrowserRouter, Link, Switch, Route, Router } from 'react-router-dom';
import styles from './Navigation.module.css'
import { Globalcontext } from '../../App'







export default function Navigation() {
    const mydata = React.useContext(Globalcontext)


    
    

    return (
        <>

            <nav className={styles.nav}>
                <Link to="/home" ><h1>WacthMe</h1></Link>

                <div className={styles.link_group}>
                    <Link to="/home" >HOME</Link>
                    <Link to="/shop">SHOP</Link>
                    <Link to="/navblog" >BLOGS</Link>
                    <Link to="/aboutus" >ABOUT US</Link>
                    <Link to="/contactus" >CONTACT </Link>
                    
                </div>
                <div className={styles.icon_group}>
                    <Link to="/shop"> <i  onClick={mydata.SearchbarOpen} className="fa-solid fa-magnifying-glass"style={{fontSize: "24px",color:"grey"}}></i></Link>
                    <Link to="/favorite" style={{textDecoration:"none"}}> <i className="fa-regular fa-heart"style={{fontSize: "24px",color:"grey"}}></i></Link><span className={styles.circle} >{mydata.cardcount}</span>
                    <Link to="/cart"> <i className="fa-solid fa-bag-shopping" style={{fontSize: "24px",color:"grey"}}></i></Link>
                    <Link to="/login"> <i className="fa-solid fa-user"style={{fontSize: "24px"}}></i></Link>
                    
                </div>
                
            </nav>


        </>

    )
}
