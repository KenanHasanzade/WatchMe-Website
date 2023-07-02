import React from 'react'
import styles from './Favorite.module.css'
import { Globalcontext } from '../../App'
import { BrowserRouter, Link, Switch, Route, Router } from 'react-router-dom';
import Ystar from '../Image/star-yellow.png'
import Gstar from '../Image/gray_star.png'
import Meta from '../Meta/Meta';
export default function Favorite() {
  const mydata = React.useContext(Globalcontext)

  return (

<>  
<Meta title="Favorite" />

  <section className={styles.map_products}>
    <div className={styles.productcontainer}>
        {mydata.favorite && mydata.favorite.map((number, indexone) => {

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
                                <i onClick={() => { mydata.favoritebutton(number.id); }} className="fa-regular fa-heart" style={{ color: number.fave ? "rgb(44,175,78)" : "#B5B5B5"}}></i>
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



</section></>



    // <>
    //   {mydata.favorite && mydata.favorite.slice(0, 8).map((number, indexone) => {

    //     return (
    //       <div className={styles.product} key={indexone} >

    //         <div className={styles.image_box}>
    //           <div className={styles.image_hover}>
    //             <img className={styles.image} src={number.img1} alt="" />
    //             <img className={styles.image} src={number.img2} alt="" />
    //           </div>
    //           <div className={styles.cart_button}>
    //             <p onClick={() => { mydata.basket(number.id) }} style={{ cursor: "pointer" }}>ADD TO CART</p>
    //             <div className={styles.icons}>
    //               <i className="fa-solid fa-magnifying-glass"></i>
    //               <i onClick={() => { mydata.favoritebutton(number.id); }} style={{ color: number.fave ? "red" : "" }} className="fa-regular fa-heart"></i>
    //             </div>
    //           </div>
    //         </div>
    //         <div className={styles.product_name}>
    //           <p>
    //             <i className=" yellow_star fa-solid fa-star"></i>
    //             <i class=" yellow_star fa-solid fa-star"></i>
    //             <i class=" yellow_star fa-solid fa-star"></i>
    //             <i class=" yellow_star  fa-solid fa-star"></i>
    //           </p>
    //           <p>{number.caption}</p>
    //           <p>{number.price} AZN</p>
    //         </div>

    //       </div>

    //     )

    //   })}
    // </>
  )
}
