import React from 'react'
import styles from './Login.module.css'
import Logo from '../Image/Logowhite.png'
import Photo from '../Image/clockexample1.png'
import Meta from '../Meta/Meta'


export default function Login() {
    return (
        <> 
                <Meta title="Login" />

        <section className={styles.container} >

            <div style={{ position: "relative",borderRadius:'15px' }} className={styles.photo} >
                <img className={styles.photo} src={Photo} alt="" style={{borderRadius:'15px'}}/>


            </div>
            <section className={styles.login} >

                <div className={styles.login_frame} >
                    <div className={styles.paragraph} >
                        <h1>WatchMe.</h1>
                    </div>
                    <div className={styles.input} >
                        <input placeholder='E-poct ve ya telefon nomresi' type="text" name="" id="" />
                        <input placeholder='Sifre' type="password" name="" id="" />
                    </div>
                    <span className={styles.buttons}  > 
                    <button>Daxil ol</button>
                    <button>Qeydiyyat</button>
                    </span>


                </div>

            </section>
        </section></>
       
    )
}
