import React from 'react'
import './Checkout.css'
import img from './office.jpg'
export default function () {
  return (
    <>
      <div className='product'>
        <div className="product-image">
          <img src={img} alt="office" />
        </div>
        <div className="product-details">
          <h1>Product Name</h1> <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptas, quisquam voluptatibus enim sequi eligendi quia nihil rem nemo aperiam asperiores vel quae, officiis culpa cum neque eum? Sit, nulla.
          </p>
          <p>Price :</p>
        </div>
      </div>
    </>
  )
}
