import React from 'react'
import styles from './Checkout.module.css'
import { Globalcontext } from '../../App'
import Meta from '../Meta/Meta'

export default function Checkout() {
  const mydata = React.useContext(Globalcontext)
  const total = (mydata.productsId.reduce((total, currentItem) => total = total + currentItem.price * currentItem.count, 0));
  return (
    <>
    <Meta title="Checkout" />
    <section className={styles.checkout} >
      <div className={styles.input_group}>
        <form action="#">
          <div >
            <input type="text" placeholder='Ad' name="" id="" />
            <input type="text" placeholder='Soyad' name="" id="" />
            <input type="email" placeholder='Email' name="" id="" />
            <input type="text" placeholder='Olke' name="" id="" />
          </div>
          <div >
            <input type="text" placeholder='Adres' name="" id="" />
            <input type="text" placeholder='Sheher' name="" id="" />
            <input type="password" placeholder='Pocht kodu' name="" id="" />
            <input type="tel" placeholder='Elaqe nomresi' name="" id="" />
          </div>
        </form>
        <textarea placeholder='Sifarişiniz üçün şərh yazın'></textarea>
      </div>

      <div className={styles.total}>
        <b>Ümumi məbləğ</b>
        <div className={styles.sum}>
          <div>
            <span>Qiymətlər cəmi:</span>
            <span>{total} AZN</span>
          </div>
          <div>
            <span>Çatdırılma:</span>
            <span>Pulsuz</span>
          </div>
          <div>
            <span>
              Ümumi cəm:
            </span>
            <span>{total}  AZN</span>
          </div>
        </div>
        <button>
         Ödə
        </button>
      </div>

    </section>



   
    </>
  )
}
