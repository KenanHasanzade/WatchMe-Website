import React from 'react'
import styles from './Footer.module.css'
import Logo from '../Image/logoend.png'
import { Link } from 'react-router-dom'

export default function Footer() {
    function totop() {
        window.scrollTo(0, 0)
    }
    return (
        <>

            <footer className={styles.footer}>
                <div className={styles.top} >
                    <div>
                    <Link to="/home" > <h1 onClick={totop}>WacthMe</h1></Link > 
                        <p>Ən son yeniliklərdən xəbərdar olmaq üçün bizi sosial şəbəkələrdən izləyin.</p>
                        <p>Gözəlliyinizi bizə əmanət edin.</p>
                        <h4 className={styles.footer_text} >Sosial şəbəkələrimiz:</h4>
                        <div className={styles.social_media}>
                            <a href="https://az-az.facebook.com/" target='_blank' ><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="https://twitter.com/" target='_blank' ><i className="fa-brands fa-twitter"></i></a>
                            <a href="https://www.youtube.com/"  target='_blank' ><i className="fa-brands fa-youtube"></i></a>
                            <a href="https://www.google.com/"  target='_blank' ><i className="fa-brands fa-google"></i></a>
                            <a href="https://www.instagram.com/"  target='_blank' ><i className="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className={styles.list_group} >
                        <div>
                            <h4>Açılış vaxtı</h4>
                            <ul>
                                <li>B.E - C. : 8AM - 10PM</li>
                                <li>Ş. : 9AM-8PM</li>
                                <li>B. : Bağlı</li>
                            </ul>
                        </div>
                        <div>
                            <h4>Məlumat</h4>
                            <ul className={styles.footer_info}>
                                <Link to="/checkout" >
                                    <li>Çatdırılma</li>
                                </Link>
                                <Link to="/aboutus" >
                                    <li>Haqqımızda</li>
                                </Link>
                                <Link to="/contactus" >
                                    <li>Əlaqə</li>
                                </Link>
                            </ul>
                        </div>
                        <div>
                            <h4>Məlumat</h4>
                            <ul className={styles.footer_info}>
                                <Link to="/privacy" >
                                    <li>Privacy Policy</li>
                                </Link>
                                <Link to="/refund" >
                                    <li>Refund Policy</li>
                                </Link>
                                <Link to="/shipping" >
                                    <li>Shipping Policy</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
                <div className={styles.bottom}> Müəllif hüququ &nbsp;<b>Hasanzade Kenan</b>	&nbsp; &copy; &nbsp;tərəfindən qorunur</div>
            </footer>

        </>

    )
}
