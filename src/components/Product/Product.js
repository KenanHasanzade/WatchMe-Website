import React from 'react'
import styles from './Product.module.css'
import { Globalcontext } from '../../App'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Ystar from '../Image/star-yellow.png'
import Gstar from '../Image/gray_star.png'


export default function Product() {
    const mydata = React.useContext(Globalcontext)
    const { id } = useParams()
    const [imagesource, setImagesource] = useState("none")
    const [displayFirstText, setDisplayFirstText] = useState("block");
    const [displaySecondText, setDisplaySecondText] = useState("none");
    const [metin1, setMetin1] = useState('');
    const [metin2, setMetin2] = useState('');
    const [goster, setGoster] = useState(false);
    const [tarih, setTarih] = useState('');

    function changesource(e) {
        setImagesource(e)
    }

    const handleFirstButtonClick = () => {
        setDisplayFirstText("block");
        setDisplaySecondText("none");
    };

    const handleSecondButtonClick = () => {
        setDisplayFirstText("none");
        setDisplaySecondText("block");
    };
    const handleGoster = () => {
        const suan = new Date();
        const gun = suan.getDate();
        const ay = suan.getMonth() + 1;
        const yil = suan.getFullYear();
        setTarih(`${gun}/${ay}/${yil}`);
        setGoster(true);
        

        

    }


    return (
        <section className={styles.big_container}>
            <section className={styles.container} >

                {mydata.main && mydata.main.filter(number => number.id === id).map((number, indexone) => {

                    return (

                        <div className={styles.img_container} key={indexone} >
                            <div className={styles.large_img} >
                                <i
                                    onClick={() => {
                                        if (imagesource == "none" || imagesource == number.img1) { changesource(number.img4) }
                                        else if (imagesource == number.img2) { changesource(number.img1) }
                                        else if (imagesource == number.img3) { changesource(number.img2) }
                                        else if (imagesource == number.img4) { changesource(number.img3) }
                                    }}




                                    style={{ left: "0" }} className="fa-solid fa-chevron-left"></i>
                                <img className={styles.image} src={imagesource.slice(1, number.imagesource)} alt="" style={{ display: imagesource.length > 4 ? "" : "none" }} />
                                <img className={styles.image} src={number.img1.slice(1, number.img1.length)} alt="" style={{ display: imagesource.length > 4 ? "none" : "" }} />
                                <i

                                    onClick={() => {
                                        if (imagesource == "none" || imagesource == number.img1) { changesource(number.img2) }
                                        else if (imagesource == number.img2) { changesource(number.img3) }
                                        else if (imagesource == number.img3) { changesource(number.img4) }
                                        else if (imagesource == number.img4) { changesource(number.img1) }
                                    }}




                                    style={{ right: "0" }} className="fa-solid fa-chevron-right"></i>
                            </div>


                            <div className={styles.lil_imgs}  >
                                <div>
                                    <img className={styles.image} src={number.img1.slice(1, number.img1.length)} onClick={() => { changesource(number.img1) }} alt="" /></div>
                                <div> <img className={styles.image} src={number.img2.slice(1, number.img2.length)} onClick={() => { changesource(number.img2) }} alt="" /></div>
                                <div> <img className={styles.image} src={number.img3.slice(1, number.img3.length)} onClick={() => { changesource(number.img3) }} alt="" /></div>
                                <div> <img className={styles.image} src={number.img4.slice(1, number.img4.length)} onClick={() => { changesource(number.img4) }} alt="" /></div>
                            </div>

                        </div >

                    )
                })}



                {mydata.main && mydata.main.filter(number => number.id === id).map((number, indexone) => {


                    return (
                        <div className={styles.text_container} key={indexone} >
                            <div className={styles.product_info} >
                                <p>{number.caption}</p>
                                <p className={styles.star} >
                                    <img src={Ystar} alt="" />
                                    <img src={Ystar} alt="" />
                                    <img src={Ystar} alt="" />
                                    <img src={Ystar} alt="" />
                                    <img src={Gstar} alt="" />
                                </p>
                                <p><i>{number.description}</i></p>
                                <p>
                                    {number.text}
                                </p>
                                <p>Məhsul Kodu:  <span>{number.cod}</span> </p>
                                <p className={styles.price}><b>{number.price} AZN</b></p>
                                <p>

                                </p>

                                <hr />

                            </div>
                            <div className={styles.mix} >
                                <span>Say</span>
                                <input type="number" min="0" value={mydata.quantity} onInput={mydata.quantitychange} />
                                <button onClick={() => {
                                    mydata.basketproductchange(number.id);
                                }}>
                                    <i className="fa-solid fa-bag-shopping"></i>
                                    <span> SEBETE ELAVE ET</span>
                                </button>
                                <div>
                                    <i className="fa-regular fa-heart" onClick={() => { mydata.favoritebutton(number.id); }} style={{ color: number.fave ? "rgb(44,175,78)" : "#B5B5B5" }}   ></i>
                                    <span>Favorilere elave et</span>
                                </div>
                            </div>
                        </div>


                    )


                })

                }

            </section>


            <div className={styles.button_product} >
                <button onClick={handleFirstButtonClick} >Rəylər</button>
                <button onClick={handleSecondButtonClick}  >More</button>
            </div>

            <section style={{ display: displayFirstText }} className={styles.reviews_container} >
                <table>
                    <thead>
                        <tr>
                            <th>Kanan Hasanzade</th>
                            <th>15/03/2023</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam doloremque magnam, repellendus illum reiciendis perspiciatis maxime totam facilis libero corrupti at aspernatur quod fuga alias, nostrum hic aliquid repellat, harum facere quia! Illo eaque quia sapiente sequi, dolor, nobis, doloribus corrupti illum molestiae assumenda debitis in consequatur culpa nulla ullam!</td>
                        </tr>

                    </tbody>
                </table>
                <table>
                    <thead>
                        <tr>
                            <th>Kanan Hasanzade</th>
                            <th>15/03/2023</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam doloremque magnam, repellendus illum reiciendis perspiciatis maxime totam facilis libero corrupti at aspernatur quod fuga alias, nostrum hic aliquid repellat, harum facere quia! Illo eaque quia sapiente sequi, dolor, nobis, doloribus corrupti illum molestiae assumenda debitis in consequatur culpa nulla ullam!</td>
                        </tr>

                    </tbody>
                </table>

                {goster && (

                    <table>

                        <thead>
                            <tr>
                                <th>{metin1}</th>
                                <th>{tarih}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{metin2}</td>
                            </tr>

                        </tbody>
                    </table>
                )}


                <div className={styles.write_text} >
                    <span>Reyinizi qeyd edin</span>
                    <p htmlFor="metin1" >*Ad</p>
                    <input type="text" name="" value={metin1} id="metin1" onChange={(e) => setMetin1(e.target.value)} />
                    <p htmlFor="metin2" >*Rey</p>
                    <textarea name="" id="metin2" value={metin2} onChange={(e) => setMetin2(e.target.value)} ></textarea>
                    <div>
                        <button onClick={handleGoster} >Gonder</button>
                    </div>
                </div>


            </section>

            {mydata.main && mydata.main.filter(number => number.id === id).map((number, indexone) => {


                return (

                    <section style={{ display: displaySecondText }} className={styles.composition} key={indexone}  >

                        <div>
                            {number.composition}
                        </div>


                    </section>

                )


            })

            }





            <section className={styles.box}>
                <div className={styles.title}>
                    <p>Bənzər Məsullar</p>
                    <p>Kolleksiyasını nəzərdən keçirin.</p>
                </div>
            </section>







            {/* similiar */}
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
                                        <img className={styles.image} src={number.img1.slice(1, number.img1.length)} alt="" />
                                        <img className={styles.image} src={number.img2.slice(1, number.img2.length)} alt="" />
                                    </div>
                                </Link>
                                <div className={styles.cart_button}>
                                    <p onClick={() => { mydata.basket(number.id) }} style={{ cursor: "pointer" }}>SƏBƏTƏ AT</p>
                                    <div className={styles.icons}>
                                        {/* <i className="fa-solid fa-magnifying-glass"></i> */}
                                        <i onClick={() => { mydata.favoritebutton(number.id); }} className="fa-regular fa-heart" style={{ color: number.fave ? "red" : "#B5B5B5" }}></i>
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













        </section>
    )
}
