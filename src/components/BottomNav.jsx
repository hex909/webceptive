import React from 'react'
import { FcLikePlaceholder } from 'react-icons/fc'
import { AiOutlineUser } from 'react-icons/ai'
import { BsCart4 } from 'react-icons/bs'

function BottomNav() {
    return (
        <nav className='footer__sticky'>
            <FcLikePlaceholder className='svg-ic' />
            <div className="cart-Numf">
                <BsCart4 className='cart__logo svg-ic' />
                <span className='cart__itemsf' style={{ fontSize: '16px' }}><p>0</p></span>
            </div>
            <AiOutlineUser className='svg-ic' />
        </nav>
    )


}

export default BottomNav