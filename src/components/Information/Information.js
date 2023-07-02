import React from 'react'
import styles from './Information.module.css'
import { Globalcontext } from '../../App'
import Avatar from  '../Image/avatar.webp'
import { Link, useParams } from 'react-router-dom'




export default function Information() {
    const mydata = React.useContext(Globalcontext)
    const { id } = useParams()

    return (
        <>
            {mydata.blogs && mydata.blogs.filter(number => number.id === id).map((number, indexone) => {
                return (
                    <section className={styles.info_container} >
                        <div className={styles.img_container} >
                            <img src={number.imgtitle} alt="" />
                        </div>
                        <div className={styles.text_container} >
                            <p>{number.caption}</p>
                            <p>{number.context}</p>
                            <p><i>{number.date} / {number.author}</i></p>
                        </div>
                    </section>
                )

            })}

            <section className={styles.comment_container}  >
                <hr />
                <p className={styles.all} >Bütün Rəylər</p>

                <div>
                    <img src={Avatar} alt="" />
                    <div>
                    <p>Emin</p>
                    <p><i>14 Oktyabr,2022</i></p>
                    <p>Lorem ipsum dolor amet consectetur adipisicing elit. Nobis atque cumque odit expedita itaqsitamet consectetur adipisicing elit. Nobis atque cumque odit expedita itaq amet consectetur adipisicing elit. Nobis atque cumque odit expedita itaque vitae facere quo perspiciatis commodi reiciendis perferendis corporis eligendi, error iusto cum id modi ullam eaque.</p>
                    </div>
                </div>



                
                <div>
                    <img src={Avatar} alt="" />
                    <div>
                    <p>Aysel</p>
                    <p><i>14 Oktyabr,2022</i></p>
                    <p>Lorem ipsum dolor amet consectetur adipisicing elit. Nobis atque cumque odit expedita itaqsitamet consectetur adipisicing elit. Nobis atque cumque odit expedita itaq amet consectetur adipisicing elit. Nobis atque cumque odit expedita itaque vitae facere quo perspiciatis commodi reiciendis perferendis corporis eligendi, error iusto cum id modi ullam eaque.</p>
                    </div>
                </div>
            </section>

            <div className={styles.comment} >
          <p  className={styles.bold_text} >Bizə Yazın</p>
          <div>
            <p>Ad *</p>
            <input type="text" />
          </div>
          <div>
            <p>E-poçt *</p>
            <input type="text" />
          </div>
          <div>
            <p>Mövzu</p>
            <input type="text" />
          </div>
          <div>
            <p>İsmarıc</p>
            <textarea ></textarea>
          </div>

          <button>Göndər</button>
        </div>



        </>
    )
}
