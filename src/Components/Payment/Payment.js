import React from 'react';
import './Payment.scss';

export default function Payment(props) {

  const { title, type, amount } = props.data;

  return (
    <>
      <div className="payment">
        <img src='https://cdn.iconscout.com/icon/premium/png-256-thumb/burger-1774383-1510717.png?f=webp&w=256' alt='' />
        <h6>{title}</h6>
        {
          type === 'income' ? <><a href='/' style={{color: 'green'}}>+ $ {amount}</a>
            <img src='https://icon-library.com/images/ellipsis-icon/ellipsis-icon-3.jpg' alt='' /></> : <><a style={{color: 'red'}} href='/'>- $ {amount}</a>
            <img src='https://icon-library.com/images/ellipsis-icon/ellipsis-icon-3.jpg' alt='' /></>
        }

      </div>
    </>
  );
}
