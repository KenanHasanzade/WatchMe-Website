import React from 'react'
import { Globalcontext } from '../../App'
import styles from './Cart.module.css'
import { Link } from 'react-router-dom'
import Meta from '../Meta/Meta'
export default function Cart() {
    const mydata = React.useContext(Globalcontext)

    const total = (mydata.productsId.reduce((total, current) => total = total + current.price * current.count, 0
    ));
    return (
        <>
        <Meta title="Cart" />
        <div className={styles.cart_total}>

            <table className={styles.cart_table}   >
                <thead>
                    <tr>
                        <th>Məhsulun şəkli</th>
                        <th>Mehsulun adı</th>
                        <th>Qiyməti</th>
                        <th>Say</th>
                        <th>Status</th>
                        <th className={styles.th_end}  >Fəaliyyət</th>

                    </tr>
                </thead>
                <tbody>

                    {mydata.productsId && mydata.productsId.map((number, indexone) => {

                        return (



                            <tr key={indexone}>
                                <td className={styles.td_img} >
                                    <div className={styles.image_box}>

                                        <div className={styles.image_hover}>
                                            <img className={styles.image} src={number.img2} alt="" />
                                            <img className={styles.image} src={number.img1} alt="" />
                                        </div>

                                    </div>

                                </td>
                                <td>
                                    {number.caption}
                                </td>
                                <td>
                                    {number.price} AZN
                                </td>
                                <td>
                                    <button className={styles.count} onClick={() => { mydata.basketminus(number.id) }} style={{ cursor: "pointer" }}>-</button>

                                    <span className={styles.num} >
                                        {number.count}
                                    </span>

                                    <button  className={styles.count} onClick={() => { mydata.basket(number.id) }} style={{ cursor: "pointer" }} >+</button>
                                </td>
                                <td>
                                <button  className={styles.stock}   >Stokda</button>
                                </td>
                                <td>
                                    <i className="fa-solid fa-trash-can"  onClick={() => { mydata.basketremove(number.id)  }} style={{ cursor: "pointer" }} ></i>

                                </td>
                               
                            </tr>


                        )


                    })}
                </tbody>

            </table>


            <div className={styles.total}>
                <b>Ümumi məbləğ</b>
                <div className={styles.sum}>
                    <div>
                        <span>Qiymətlər cəmi:</span>
                        <span>{total} AZN</span>
                    </div>
                    <div>
                        <span>Çatdırılma:</span>
                        <span>Pulsuz</span>
                    </div>
                    <div>
                        <span>
                        Ümumi cəm:
                        </span>
                        <span>{total} AZN</span>
                    </div>
                </div>
                <Link to="/checkout">
                    <button>
                        İndi al
                    </button>
                </Link>




            </div>

        </div>

</>




    )






}
