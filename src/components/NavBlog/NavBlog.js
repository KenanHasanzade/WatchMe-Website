import React from 'react'
import { Globalcontext } from '../../App'
import styles from './NavBlog.module.css'
import Blogİmg from  '../Image/blogimg.jpg'
import { Link } from 'react-router-dom'
import Meta from '../Meta/Meta'

export default function NavBlog() {
  const mydata = React.useContext(Globalcontext)

  return (
    <>
    <Meta title='Blogs'/>
      <section className={styles.blog_container}>


        {mydata.blogs && mydata.blogs.map((number, indexone) => {

          return (
            <div className={styles.blog_box} key={indexone} >
              <div className={styles.img_frame} >
                <img src={number.imgtitle} alt="" />
              </div>
              <div className={styles.description_box} >
                <p>{number.caption}</p>
                <p>{number.description}</p>
                <div className={styles.date} >
                  <span><i>{number.date}</i></span>
                  <span><i>{number.author}</i></span>
                </div>
                <Link  to={`/navblog/${number.id}`} >
                <button>Ardını oxu</button>
                </Link>
              </div>
            </div>
          )

        })}


      </section>

{/* 
      <section className={styles.sale_container} >
        <div className={styles.sale_text} >
          <p>Yaz Kolleksiyasina</p>
          <p>50%-ə qədər Endirim</p>
          <button>İndi Al</button>
        </div>
        <img src={Blogİmg} alt="" />
      </section> */}

      <div className={styles.horizontal} ></div>
    </>
  )
}
