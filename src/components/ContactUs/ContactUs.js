
import styles from './ContactUs.module.css'
import React from 'react';
import Meta from '../Meta/Meta';





export default function ContactUs() {

  return (
    <>
    <Meta title="Contact" />
    <section className={styles.sec_contact} >
      <div className={styles.frame} >
        {/* <p>Our Location</p> */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.766884004749!2d49.81889521489454!3d40.41401476372952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40308795c7f959fd%3A0x67399476694109fa!2zMiBIw7xzZXluIFNleWlkemFkyZkga8O8w6fJmXNpLCBCYWvEsQ!5e0!3m2!1saz!2saz!4v1680103278804!5m2!1saz!2saz" ></iframe>
      </div>
      <div className={styles.info_con}  >

        <div className={styles.info}>

          <div>
            <p className={styles.bold_text} >
              Bizimlə Əlaqə
            </p>
            <p  className={styles.gray_text}  >
              İstənilən filialimiza yaxınlaşıb,məhsullarımızın keyfiyyəti ilə yaxından tanış ola bilərsiniz.Bütün mobil operatorlardan zənginiz ödenişsizdir.
            </p>
          </div>
          <div className={styles.icon} >
            <i  className="fa-solid fa-map-location-dot"></i> <span>Ünvan</span>
            <p className={styles.gray_text}  > Bakı şəhəri.,Nəsimi rayonu.,Hüseyn Seyidzadə 2 </p>
            <hr />
          </div>
          <div  className={styles.icon} >
            <i className="fa-solid fa-phone-flip"></i> <span>Telefon</span>
            <p className={styles.gray_text} >Mobil: +994993440034</p>
            <p  className={styles.gray_text} >Qaynar xətt: *0034</p>
            <hr />
          </div>
          <div   className={styles.icon} >
            <i className="fa-solid fa-envelope"></i> <span>E-poçt</span>
            <p className={styles.gray_text} >yourmail@domain.com</p>
            <p className={styles.gray_text} >support@demo.company</p>
          </div>

        </div>

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



        
      </div>
<div  className={styles.horizontal} ></div>
    </section></>
  )
}
