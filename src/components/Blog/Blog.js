import React from 'react'
import { Globalcontext } from '../../App'
import styles from './Blog.module.css'
import BlogImg from '../Image/blogimg.jpg'
import { Link } from 'react-router-dom'
import Meta from '../Meta/Meta';

export default function Blog() {
  const mydata = React.useContext(Globalcontext)


  return (
    <>
   

     <br></br>
     <br></br>
      <div style={{display:"flex",justifyContent:"center",fontSize:"34px",fontWeight:'600',marginBottom:"15px"}}>Blogs</div>
      <section className={styles.blog_container}>


        {mydata.blogs && mydata.blogs.slice(0,3).map((number, indexone) => {

          return (
            <Link to={`/navblog/${number.id}`}>
              <div className={styles.blog_box} key={indexone} >
              <div className={styles.img_frame} >
                <img src={number.imgtitle} alt="" />
              </div>
              <div className={styles.description_box} >
                <p>{number.caption}</p>
                <p>{number.description}</p>
                <button>Ardını oxu</button>
              </div>
            </div></Link>
 
          )

        })}


      </section>

      <div  className={styles.horizontal} ></div>
    </>
  )
}
