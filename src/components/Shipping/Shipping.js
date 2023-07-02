import React from 'react'
import './Shipping.css';
import Meta from '../Meta/Meta';

const Shipping = () => {
  return (<>
  <Meta title='Shipping'/>
    <div className='container-xxl'>
    <div className="row">
    <div className="col-12">
      <div className="policy">
        <h4>Delivery times are extended over public holidays.</h4>
        <p>
          Here at WatchShop, we pride ourselves on ensuring every order is
          picked and packed with care and sent out to you as quickly as
          possible. Usually, we deliver the next day if ordered before 4pm
          on weekdays.
          <br></br>
          <br></br>
          Our aim is to provide you with excellent service, and whether
          you’re ordering for a loved one or yourself, rest assured the
          WatchShop team will deliver this time and time again.
        </p>
        <h4>Refusal of Delivery</h4>
        <p>
          If a package is refused for delivery, the customer will be
          responsible for actual shipping charges incurred by
          WorldofWatches.com. Once we receive the package back in our
          warehouse, we will issue a credit to the original credit card
          for the purchase price less the actual shipping cost of shipping
          the package to you, as well as any import or return freight
          charges that WorldofWatches was obliged to cover on your behalf
          will be deducted from your refund when the package is returned
          to us by the carrier. This shipping charge will apply even if
          you were not originally charged shipping under a free shipping
          promotion. The purpose of this is to defray unnecessary shipping
          costs and to allow us to offer the lowest prices possible. This
          does not apply to packages that appear to be damaged in
          shipping.
        </p>
        <h4>Returns</h4>
        <p>
          Return shipping charges for items not specifically covered under
          warranty coverage or otherwise damaged or defective will be
          deducted from any refunds given.
        </p>
        <h4>Insurance</h4>
        <p>
          WatchMe provides insurance coverage for every item we ship out.
          Note: You may be asked to sign for the package upon delivery.
        </p>
      </div>
    </div>
  </div></div>
  <br></br></>
  )
}

export default Shipping