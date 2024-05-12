import React from 'react'
import './index.css'

const ProductCard = props => {
    const {each} = props
    const {image, title} = each
  return (
    <div className='product-card'>
      <img src={image} alt={title} className='product-image'/>
      <div className='title-like'>
        <p className='product-title'>{title}</p>
        <button type='button' className='like-btn'>
          <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.62 18.8116C11.28 18.9316 10.72 18.9316 10.38 18.8116C7.48 17.8216 1 13.6916 1 6.69156C1 3.60156 3.49 1.10156 6.56 1.10156C8.38 1.10156 9.99 1.98156 11 3.34156C12.01 1.98156 13.63 1.10156 15.44 1.10156C18.51 1.10156 21 3.60156 21 6.69156C21 13.6916 14.52 17.8216 11.62 18.8116Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>  
      </div>
      <p className='product-description'><a className='sign-in' href='./index.html'>sign in</a>or Create an Account to see pricing</p>
    </div>
  )
}

export default ProductCard
