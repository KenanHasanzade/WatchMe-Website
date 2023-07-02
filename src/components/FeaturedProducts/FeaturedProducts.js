import React from 'react'
import styles from './FeaturedProducts.module.css'
import { Globalcontext } from '../../App'
import { Link } from 'react-router-dom'
import Ystar from '../Image/star-yellow.png'
import Gstar from '../Image/gray_star.png'


export default function FeaturedProducts() {
    const mydata = React.useContext(Globalcontext)

    return (
        <>
            <section className={styles.box}>
                <div className={styles.title}>
                    <p>Seçilmiş Məhsullar</p>
                    <p>Seçilmiş məhsullarımızın kolleksiyasını nəzərdən keçirin.</p>
                </div>
            </section>
            <section className={styles.map_products}>
                <span className={styles.left_btn} onClick={mydata.pageChange}>
                    <i className="fa-solid fa-chevron-left" ></i>
                </span>
                {mydata.products && mydata.products.slice(mydata.page.start, mydata.page.finish).map((number, indexone) => {

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
                <span className={styles.right_btn} onClick={mydata.pageChange}>
                    <i className="fa-solid fa-chevron-right" ></i>
                </span>
            </section>
        </>
    )
}
