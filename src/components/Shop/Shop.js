import React from 'react'
import styles from './Shop.module.css'
import { Globalcontext } from '../../App'
import { BrowserRouter, Link, Switch, Route, Router } from 'react-router-dom';

import Ystar from '../Image/star-yellow.png'
import Gstar from '../Image/gray_star.png'

import Meta from '../Meta/Meta';


export default function Shop() {
    const mydata = React.useContext(Globalcontext)

    return (
        <>
        <Meta title='Shop'/>
            <div className={styles.container} style={{ display: mydata.Searchbar ? "block" : "none" }} id={mydata.SearchbarAnimation} >
                <div className={styles.inner} >
                    <button className={styles.closebutton} onClick={mydata.SearchbarClose}>
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                    <div className={styles.inputdiv}>
                        <i className="fa-solid fa-magnifying-glass" style={{ color: "#B5B5B5", position: "absolute", fontSize: "20px", top: "20px", left: "10px" }}></i>
                        <input onInput={mydata.inputvalue} className={styles.input} type="text" placeholder='Məhsulun adını qeyd edin...' />
                    </div>
                </div>
            </div>

            <section className={styles.box}>

                <div className={styles.buttons}>
                <button  id='allitems' onClick={mydata.catalogchange}>
                    Hamisi
                    </button>
                    <button  id='Men' onClick={mydata.catalogchange}>
                    Kishiler uchun
                    </button>
                    <button  id='Women' onClick={mydata.catalogchange} >
                    Qadinlar uchun
                    </button>
                    <button  id='Kids' onClick={mydata.catalogchange} >
                    Ushaqlar uchun
                    </button>
                    
                </div>

            </section>

            <section className={styles.sort}>


                <label for="cars">Filterle:&nbsp;&nbsp;</label>
                <select onChange={(e) => {
         mydata.changesort(e.target.value);
        if (e.target.value==="AtoZ"){mydata.changelist(mydata.products.sort((a, b) => a.caption.toLowerCase() > b.caption.toLowerCase() ? 1 : -1))};
        if (e.target.value==="ZtoA"){mydata.changelist(mydata.products.sort((a, b) => a.caption.toLowerCase() > b.caption.toLowerCase() ? -1 : 1))};
        if (e.target.value==="low"){mydata.changelist(mydata.products.sort((a, b) => Number(a.price) > Number(b.price) ? 1 : -1))};
        if (e.target.value==="high"){mydata.changelist(mydata.products.sort((a, b) => Number(a.price) > Number(b.price) ? -1 : 1));};
        if (e.target.value===""){mydata.changelist(mydata.products.sort((a, b) => Number(a.id) > Number(b.id) ? 1 : -1));};
        }} >
                    <option value="">Default</option>  
                    <option value="low">Ucuzdan baha</option>
                    <option value="high">Bahadan ucuza</option>
                    <option value="AtoZ">A-Z</option>
                    <option value="ZtoA">Z-A</option>
                </select>



            </section>



             <section className={styles.map_products}>
                <div className={styles.productcontainer}>
                    {mydata.products && mydata.products.map((number, indexone) => {

                        return (
                            <div className={styles.product} key={indexone} >
                                <div className={styles.image_box}>
                                    <Link to={`/shop/${number.id}`}>
                                        <div className={styles.image_hover}>
                                            <img className={styles.image} src={number.img1} alt="" />
                                            <img className={styles.image} src={number.img2} alt="" />
                                        </div>
                                    </Link>
                                    <div className={styles.cart_button}>
                                        <p onClick={() => { mydata.basket(number.id) }} style={{ cursor: "pointer" }}>SƏBƏTƏ AT</p>
                                        <div className={styles.icons}>
                                            {/* <i className="fa-solid fa-magnifying-glass"></i> */}
                                            <i onClick={() => { mydata.favoritebutton(number.id); }} className="fa-regular fa-heart" style={{ color: number.fave ? "rgb(44,175,78)" : "#B5B5B5" }}></i>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.product_name}>
                                <p className={styles.star} >

                                    <img src={Ystar} alt="" />
                                    <img src={Ystar} alt="" />
                                    <img src={Ystar} alt="" />
                                    <img src={Ystar} alt="" />
                                    <img src={Gstar} alt="" />
                                </p>
                                <p className={styles.caption} >{number.caption}</p>
                                <p >{number.price} &#8380; </p>
                            </div>
                            </div>

                        )

                    })}
                </div>



            </section> 

            <div  className={styles.horizontal} ></div>




        </>
    )
}





