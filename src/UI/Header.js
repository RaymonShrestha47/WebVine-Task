import React from 'react'
import './Header.css'
export default function Header() {
  return (
    <>
        <nav className='nav-bar'>
            <select name=" currency" id="currency">
                <option value="AUD">AUD</option>
                <option value="IDR">IDR</option>
                <option value="CAD">CAD</option>
            </select>
            <button>Cart</button>
            <button>Checkout</button>
        </nav>
    </>
  )
}
