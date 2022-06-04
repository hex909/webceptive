import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaGooglePlusG } from 'react-icons/fa'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdEmail, MdLocationPin } from 'react-icons/md'

function Footer() {
    return (
        <footer>
            <section className='grid'>

                <div className="row">
                    <img src="/images/logo.png" alt="logo" />
                    <p className='para'>We always love to be a part in your celebration, may not be by physical presence, but by serving you a beautiful cake of your choice . </p>
                    <div className='social'>
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaGooglePlusG /></a>
                    </div>
                </div>
                <div className="row">
                    <h4 className='title'>About</h4>
                    <a href="#" className='effect'>Contact us</a>
                    <a href="#" className='effect'>About us</a>
                    <a href="#" className='effect'>Careers</a>
                </div>
                <div className="row">
                    <h4 className='title'>Policy</h4>
                    <a href="#" className='effect'>Shipping Policy</a>
                    <a href="#" className='effect'>Refund Policy</a>
                    <a href="#" className='effect'>Terms & Conditions</a></div>
                <div className="row">
                    <h4 className='title'>Store Informaiton</h4>
                    <div className='flex'>
                        <MdLocationPin />
                        <p> 47/764-D, First Floor, Villiadath Building, Post, Chalikkavattom, Vennala, Kochi, Kerala 682028
                        </p>
                    </div>
                    <div className='flex'>
                        <BsFillTelephoneFill />
                        <p> Call Us: 9876543210, 1234567890
                        </p>
                    </div>
                    <div className="flex">
                        <MdEmail />
                        <p> Email Us: <a href="mailto:support@workceptive.com">support@workceptive.com</a></p>
                    </div>

                </div>
            </section>

            <div className="copyrights">
                <div className='con'>

                    <p>&copy; 2022 powered by Workceptive</p>
                    <div className="payments">
                        <img src="/images/visa.png" alt="visa" />
                        <img src="/images/mastercard.png" alt="mastercard" />
                        <img src="/images/paypal.png" alt="paypal" />
                        <img src="/images/american-express.png" alt="american-express" />
                        <img src="/images/discover.png" alt="discover" />
                    </div>
                </div>
            </div>

        </footer >
    )
}

export default Footer