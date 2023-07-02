import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { brandsOfWatches } from '../../Utilis/Data';
import 'swiper/css/navigation';
import styles from './Home.module.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Link } from 'react-router-dom';
import Meta from '../Meta/Meta';
export default function Home() {
  const [animation, setAnimation] = useState(true)
  const [animationcheck, setAnimationcheck] = useState(true)
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    if (animationcheck) {

      if (animationcheck) {
        setAnimation(true)
        setAnimationcheck(false)
        setInterval(function () {
          setAnimation(false)
          setAnimationcheck(true)

        }, 3000)
      }
      //  else {
      //   { setAnimation(true)
      //     setAnimationcheck(true)
      //     setInterval(function() {
      //       setAnimation(false)
      //       setAnimationcheck(false)

      //     }, 3500)
      //    }
      //  }



    }

    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  // setInterval(function() {
  //   if ( animation){setAnimation(false)}
  //   else {setAnimation(true)}
  //   }, 2500)

  return (

    <>
<Meta title='WatchMe'/>
      <main>
        <section className={styles.slideshow} >
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"
          >
            <SwiperSlide><div className={styles.slidecontainer} >
              <div className={styles.slidehead} >
                <span>COMES WITH MANUFACTURER'S WARRANTY</span>
                <h2>Bidirectional rotatable 24-hour graduated bezel.</h2>
                <h2>Monobloc middle case.</h2>
                <Link to="/shop"><button className={styles.shop_button}  style={{backgroundColor:'#B0B0B0'}}>Mağazaya keç</button></Link>
              </div>
              {/* <img className={styles.slideimg} src="./image/slidebir.jpg" alt="" /> */}
              <img class="nivo-main-image" src="https://static.chrono24.com/cdn-cgi/image/f=auto,metadata=none,q=65,w=1920/images/default/home/hero/new-visitor/daytona-lg-master.jpg"
              // style="display: inline; height: 384px; width: 877px;"
              />
            </div>
            </SwiperSlide>



            <SwiperSlide>
              <div className={styles.slidecontainer} >
                <div className={styles.slidehead} >
                  <span style={{color:'#B0B0B0'}}>
Weight 90 grams</span>
                  <h2 style={{color:'#B0B0B0'}}> One-touch three-fold clasp with slide adjustment</h2>
                  <h2 style={{color:'#B0B0B0'}}>100 meters waterproof</h2>
                  <Link to="/shop"><button className={styles.shop_button} style={{backgroundColor:'#B0B0B0'}}>Mağazaya keç</button></Link>
                </div>
                <img class="nivo-main-image" src="https://wallpapercave.com/wp/wp2009865.jpg "
                // style="display: inline; height: 384px; width: 877px;"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slidecontainer} >
                <div className={styles.slidehead} >
                  <span style={{color:'#B0B0B0'}}>
Weight 90 grams</span>
                  <h2 style={{color:'#B0B0B0'}}> One-touch three-fold clasp with slide adjustment</h2>
                  <h2 style={{color:'#B0B0B0'}}>100 meters waterproof</h2>
                  <Link to="/shop"><button className={styles.shop_button}  style={{backgroundColor:'#B0B0B0'}}>Mağazaya keç</button></Link>
                </div>
                <img class="nivo-main-image" src="https://mobimg.b-cdn.net/v3/fetch/40/402085f9e7ad4284022b9b2049d6ee6b.jpeg "
                // style="display: inline; height: 384px; width: 877px;"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slidecontainer} >
                <div className={styles.slidehead} >
                  <span style={{color:'#B0B0B0'}}>
Weight 90 grams</span>
                  <h2 style={{color:'#B0B0B0'}}> One-touch three-fold clasp with slide adjustment</h2>
                  <h2 style={{color:'#B0B0B0'}}>100 meters waterproof</h2>
                  <Link to="/shop"><button className={styles.shop_button}  style={{backgroundColor:'#B0B0B0'}}>Mağazaya keç</button></Link>
                </div>
                <img class="nivo-main-image" src="https://img4.goodfon.com/original/1920x1080/9/66/shveitsarskie-naruchnye-chasy-swiss-watch-vacheron-constanti.jpg"
                // style="display: inline; height: 384px; width: 877px;"
                />
              </div>
            </SwiperSlide>

            <div style={{ display: "none" }} className="autoplay-progress" slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </Swiper>
        </section>


        <section className={styles.sale} >
          <div className={styles.monday_sale} >
            <img src='https://phonoteka.org/uploads/posts/2021-05/1621350754_16-phonoteka_org-p-fon-dlya-naruchnikh-chasov-19.jpg' alt="" />
            <p className={styles.first_text}>Kiber Bazar Ertesi</p>
            <p className={styles.second_text} >Böyük endirim 50%</p>
            <Link to="/shop"><span className={styles.third_text} >Kolleksiyaya bax <i className="fa-regular fa-circle-play"></i></span></Link>
          </div>
          <div className={styles.winter_sale} >
            <img src='https://cdn.pixabay.com/photo/2016/10/10/12/34/watch-1728273_1280.jpg' alt="" />
            <p className={styles.first_text} >Qış Sonu Endirimleri</p>
            <p className={styles.second_text} >70%-ə qədər endirim</p>
            <Link to="/shop"><span className={styles.third_text} >Kolleksiyaya bax <i className="fa-regular fa-circle-play"></i></span></Link>

          </div><div className={styles.winter_sale} >
            <img src='https://w-dog.ru/wallpapers/0/3/484835613512314/chasy-pesok-chelovek-kozha.jpg' alt="" />
            <p className={styles.first_text} style={{color:"white"}} >Qış Sonu Endirimleri</p>
            <p className={styles.second_text} >70%-ə qədər endirim</p>
            <Link to="/shop"><span className={styles.third_text} >Kolleksiyaya bax <i className="fa-regular fa-circle-play"></i></span></Link>

          </div>
        </section>
        
      </main>
    </>
  )
}
