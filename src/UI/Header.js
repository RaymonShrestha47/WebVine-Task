import React from 'react'
import { useState } from 'react';
import './Header.css'
import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, Space } from 'antd'
export default function Header() {

  const menu = (
    <Menu
      items={[
        {
          label: <div className="label-1" onClick={handleClick}>AUD</div>,
          key: '0'
        },
        {
          label: <div className="label-2" onClick={handleClick}>IDR</div>,
          key: '1'
        },
        {
          label: <div className="label-3" onClick={handleClick}>CAD</div>,
          key: '2'
        },
      ]}
    />
  );
  const [price, setPrice] = useState('null')
  function handleClick() {
    var labels = document.querySelectorAll('div[class^=label]')
    for (var i = 0; i < labels.length; i++) {
      labels[i].addEventListener('click', function () {
        setPrice(this.innerHTML)
        console.log('click')
      });
    }
  }

  return (
    <>
      <nav className='nav-bar'>
        <Dropdown overlay={menu}>
          <Button>
            Choose a Currency
            <DownOutlined />
          </Button>
        </Dropdown>
        <Button>Cart</Button>
        <Button>Checkout</Button>
      </nav>
      <p>Price : {price}</p>
    </>
  )
}
