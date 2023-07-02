import React from 'react'
import styles from './AboutUs.module.css'
import Image from '../Image/cloxkexample2.png'
import { Globalcontext } from '../../App'
import { BrowserRouter, Link, Switch, Route, Router } from 'react-router-dom';
import Colbaimg from '../Image/clockexample1.png'
import Meta from '../Meta/Meta';






export default function AboutUs() {
  
  const mydata = React.useContext(Globalcontext)
  return (

    <>
<Meta title="About" />

<section className={styles.formul_sec} >

<div  className={styles.colbaimg} >
  <img src={Colbaimg} alt="" style={{borderRadius: '20px'}}/>
</div>

<div>
<h1 className='text-center'>We Love watches</h1>
                  <p>At WatchMe.com we are passionate about watches and this horological passion extends to the corporate culture at our headquarters in Baku. Our team of experts and aficionados live and breathe watches. We are watch collectors too and appreciate the quality of fine timepieces.</p>
                   
                   <h4>We Make It easy</h4>
                   <p>This is the easy part. Go to WatchMe.com and browse the over 1,000 unique items to find that perfect watch</p>
                    <h4>Over 50 Of Fashion Top Brands</h4>
                  <p>Most of the world’s most iconic brands, in one convenient location. Finally, you can shop high end and affordable all in one place.</p>
                   

</div>

</section>




      <section className={styles.sec_about} >

        <div className={styles.info_about} >

          <div className={styles.info_left} >
          <p>At WatchMe.com we are passionate about watches and this horological passion extends to the corporate culture at our headquarters in Baku. Our team of experts and aficionados live and breathe watches. We are watch collectors too and appreciate the quality of fine timepieces.</p>
                   
                   <h4>We Make It easy</h4>
                   <p>This is the easy part. Go to WatchMe.com and browse the over 1,000 unique items to find that perfect watch</p>
                    <h4>Over 50 Of Fashion Top Brands</h4>
                  <p>Most of the world’s most iconic brands, in one convenient location. Finally, you can shop high end and affordable all in one place.</p>
                   
 </div>
          <div className={styles.info_right} >
            <img src={Image} alt="" width={600} height={600} style={{borderRadius: '20px'}}/>
          </div>
        </div>


      </section>



     






{/* 
      <section className={styles.girls_img} >


        <div className={styles.text} >

          <div className={styles.large_text}  >
            <p>Bahar sənə </p>
            <p>gözəl görünür.</p>
          </div>
          <div className={styles.lil_text} >
            <p>
              Yağlı dəri, qızarmış yanaqlar və parıldayan dodaqlar üçün hər şe-
            </p>
            <p>
              yə dəyər. Bu mövsümün təzə görünüşlərini geyinmək çox asandır.

            </p>
          </div>

          <button>İndi al</button>

        </div>

        <img src={Girlsimg} alt="" />

      </section> */}


      



    </>
  )
}
