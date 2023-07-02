import React from 'react'
import styles from './Discount.module.css'


export default function Discount() {
  return (
    <section className={styles.sec_discnt} >

        <div   className={styles.discount} > 
            <p>Abunəçilər Üçün Xüsusi Təkliflər</p>
            <p>Yüzdə On Üzv Endirimi</p>
            <div  className={styles.input} >
            <input type="text" placeholder='e-poçt ünvanınız' />
            <button>Abunə olun</button>
            </div>
          
        </div>
    </section>
  )
}
