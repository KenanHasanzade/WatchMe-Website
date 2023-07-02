import React,{useState} from 'react'
import styles from './BestSellers.module.css'
import { Globalcontext } from '../../App'
import { Link } from 'react-router-dom';
import Coolmom from '../Image/coolmom.avif'
import Ystar from '../Image/star-yellow.png'
import Gstar from '../Image/gray_star.png'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";







export default function BestSellers() {
    const mydata = React.useContext(Globalcontext)



    return (
        <>
            <section className={styles.box}>
                <div className={styles.title}>
                    <p>Ən çox satanlar</p>
                    <p>Yeni məhsullarımızın kolleksiyasını nəzərdən keçirin.</p>
                </div>
                <div className={styles.buttons}>
                    <Link to="shop" >
                    <button>Men</button>
                    </Link>
                    <Link to="shop" >
                    <button>Women</button>
                    </Link>
                    <Link to="shop" >
                    <button>Kids</button>
                    </Link>
                </div>
            </section>

            <section className={styles.map_products}>
                <span className={styles.left_btn} >
                    <i className="fa-solid fa-chevron-left" onClick={mydata.pageFeatureChange}></i>
                </span>

                {mydata.products && mydata.products.slice(mydata.featurepage.start, mydata.featurepage.finish).map((number, indexone) => {
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

                                        {/* <i style={{ color: "#b5b5b5", cursor: "pointer" }} className="fa-solid fa-magnifying-glass"></i> */}
                                        <i onClick={() => { mydata.favoritebutton(number.id); }} style={{ color: number.fave ? "rgb(44,175,78)" : "#B5B5B5", cursor: "pointer" }} className="fa-regular fa-heart"></i>
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
                <span className={styles.right_btn} >
                    <i className="fa-solid fa-chevron-right" onClick={mydata.pageFeatureChange}></i>
                </span>
            </section>


            <section className={styles.girls_img}  >


                <div className={styles.text} >
                    <div className={styles.large_text}  >
                        <p>Hədiyyə Bələdçisi.</p>
<Link  to="/shop" >      <button>İNDİ AL</button></Link> 
                    </div>
                    <div className={styles.lil_text} >
                        <p>
                            Ən gözəl hədiyyəni sən et.
                        </p> 
                    </div>
                   

                </div>

     
            </section>

           
        </>
    )
}
