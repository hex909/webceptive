import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BsCart4 } from 'react-icons/bs'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
function Navbar() {
    const [isSideHam, setIsSideHam] = useState(false)
    const [navShow, setNavShow] = useState(false)

    return (
        <header className='nav'>
            <nav className="nav__navbar">
                <div className="logo__container">
                    <a href="/" className="img__container"><img src="/images/logo.png" alt="" /></a>
                    <button className='btn btn-ham' onClick={() => setIsSideHam(true)}><GiHamburgerMenu /></button>
                </div>

                <aside className={`nav__sidebar ${isSideHam && 'show'}`}>
                    <div className="overlay" onClick={() => setIsSideHam(false)}></div>

                    <nav className="nav__container">
                        <div className="to__back" onClick={() => setIsSideHam(false)}>
                            <span className='to__back__btn'><IoIosArrowBack /> Back</span>
                        </div>

                        <ul className='items'>
                            <li className='items__to'> Cakes <span> <IoIosArrowForward /></span>
                                <ul className='to'>
                                    <li>one</li>
                                    <li>Cakes</li>
                                    <li>Cakes</li>
                                    <li>Cakes</li>
                                    <li>Cakes</li>
                                    <li>Cakes</li>
                                    <li>Cakes</li>
                                    <li>Cakes</li>
                                </ul>
                            </li>
                            <li className='items__to'> Cakes  <span> <IoIosArrowForward /></span>
                                <ul className='to'>
                                    <li>one</li>
                                    <li>Cakes</li>
                                    <li>Cakes</li>
                                    <li>Cakes</li>
                                    <li>Cakes</li>
                                    <li>Cakes</li>
                                    <li>Cakes</li>
                                    <li>Cakes</li>
                                </ul>
                            </li>
                        </ul>
                    </nav>


                </aside>

                <div className='menusHam'>

                    <ul className={`menu ${navShow && 'show'}`}>
                        {navShow && <li className="to__back--menu" onClick={() => setNavShow(false)}>
                            <span className='to__back__btn'><IoIosArrowBack /> Back</span>
                        </li>}
                        <li className="menu__items"><a href="#" className="menu__links">popular choice</a></li>
                        <li className="menu__items"><a href="#" className="menu__links">new products</a></li>
                        <li className="menu__items"><a href="#" className="menu__links">cake</a></li>
                        <li className="menu__items"><a href="#" className="menu__links">ice cream</a></li>
                        <li className="menu__items"><a href="#" className="menu__links">about us</a></li>
                    </ul>
                </div>

                <div className='cart'>
                    <button className='btn btn-ham' onClick={() => setNavShow(true)}><GiHamburgerMenu /></button>
                    <div className="cart-Num">
                        <BsCart4 className='cart__logo' />
                        <span className='cart__items'><p>0</p></span>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar