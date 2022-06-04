import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGooglePlusG,
} from "react-icons/fa";

import { AiFillStar } from "react-icons/ai";
import { BsCartFill, BsFillSaveFill } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Hero() {
  const [state, setState] = useState({
    2: { price: 2610, rlPrice: 2900 },
    3: { price: 3510, rlPrice: 3900 },
    4: { price: 4410, rlPrice: 4900 },
    5: { price: 5310, rlPrice: 5900 },
    sugerless: 200,
    eggless: 100,
    count: 1,
  });

  const [activeState, setActiveState] = useState("2");

  return (
    <>
      <section className='path-details'>
        <div className='path__dir'>
          <h4>PRODUCT</h4>
          <h4>
            HOME / <span className='sub__dir'>PRODUCT</span>
          </h4>
        </div>
      </section>

      <section className='product'>
        <div className='image-con'>
          <div className='small__img'>
            <img src='/images/mickey2.jpg' alt='mickey2' />
          </div>

          <div className='large__img'>
            <img src='/images/mickey2.jpg' alt='mickey2' />
          </div>
        </div>
        <div className='product__details'>
          <div className='sale__report'>
            <div>
              <p>
                <img src='/images/fire.gif' alt='fire' /> 37 orders in last 24
                hours
              </p>
            </div>
            <div>
              <p>
                <img src='/images/person.gif' alt='person' /> 44 active view
                this
              </p>
            </div>
          </div>
          <h1 className='product__name'>TWO TIER MICKY THEME CAKE</h1>
          <div className='product__rating'>
            <div className='star'>
              <span>
                <AiFillStar className='gold' />
              </span>
              <span>
                <AiFillStar className='gold' />
              </span>
              <span>
                <AiFillStar className='gold' />
              </span>
              <span>
                <AiFillStar className='gold' />
              </span>
              <span>
                <AiFillStar className='negative' />
              </span>
            </div>
            <h3>120 ratings</h3>
          </div>
          <div className='delivery'>
            <p className='pill-delivery'>Estimated Delivery</p>{" "}
            <span>Tomorrow</span>
          </div>
          <div className='rate'>
            <h4 className='rate__value'>
              &#x20b9;{state[activeState].price * state.count}
            </h4>
            <h5 className='rate__rValue'>
              &#x20b9;{state[activeState].rlPrice}
            </h5>
            <h4 className='rate__offer'>-10% off</h4>
          </div>
          <div className='order__by'>
            <div className={`${activeState === "2" && "active"}`}>
              <img
                src='/images/mickey1.jpg'
                alt=''
                onClick={(e) => setActiveState(e.target.dataset.value)}
                data-value='2'
              />
              <span>2kg</span>
            </div>
            <div className={`${activeState === "3" && "active"}`}>
              <img
                src='/images/mickey1.jpg'
                alt=''
                onClick={(e) => setActiveState(e.target.dataset.value)}
                data-value='3'
              />
              <span>3kg</span>
            </div>
            <div className={`${activeState === "4" && "active"}`}>
              <img
                src='/images/mickey1.jpg'
                alt=''
                onClick={(e) => setActiveState(e.target.dataset.value)}
                data-value='4'
              />
              <span>4kg</span>
            </div>
            <div className={`${activeState === "5" && "active"}`}>
              <img
                src='/images/mickey1.jpg'
                alt=''
                onClick={(e) => setActiveState(e.target.dataset.value)}
                data-value='5'
              />
              <span>5kg</span>
            </div>
          </div>
          <hr className='hr-dot' />
          <div className='shape'>
            <div>
              <h3>Select Shape</h3>
              <button>TWO_TIER</button>
            </div>
            <button className='check--offer'>Check Offer</button>
          </div>

          <div className='quantity'>
            <h3>Quantity</h3>
            <div className='container'>
              <div className='counter'>
                <div
                  className='icon-con'
                  onClick={() =>
                    setState((s) => {
                      if (s.count !== 1) {
                        return { ...s, count: s.count-- };
                      } else {
                        return s;
                      }
                    })
                  }>
                  <IoIosArrowBack />
                </div>
                <div>
                  <input
                    name='input'
                    type='text'
                    placeholder='1'
                    value={state.count}
                    onChange={(e) => {
                      let value = parseInt(e.target.value);
                      if (isNaN(value)) return;

                      if (value < 1) return;

                      setState((s) => {
                        return { ...s, count: value };
                      });
                    }}></input>
                </div>
                <div
                  className='icon-con'
                  onClick={() =>
                    setState((s) => {
                      return { ...s, count: s.count++ };
                    })
                  }>
                  <IoIosArrowForward />
                </div>
              </div>

              <div className='extras'>
                <div>
                  <label htmlFor='eggless'>
                    <input
                      type='checkbox'
                      name='eggless'
                      id='eggless'
                      value='Eggless'
                    />
                    Eggless
                  </label>
                </div>

                <div>
                  <label htmlFor='sugerless'>
                    <input
                      type='checkbox'
                      name='sugerless'
                      id='sugerless'
                      value='Sugerless'
                    />
                    sugerless
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className='delivery-form'>
            <div className='label'>
              <label htmlFor='cake'>Writing On Cake</label>
              <input
                type='text'
                name='cake'
                id='cake'
                placeholder='eg: Happy Birthday ELon'
              />
            </div>

            <div className='label'>
              <label htmlFor='deliveryInstrucion'>
                Suggestion On Cake Or Delivery Instruction.
              </label>
              <input
                type='text'
                name='deliveryInstrucion'
                id='deliveryInstrucion'
                placeholder='Eg : Surprise delivery , cake blue in colour. '
              />
            </div>

            <div className='label'>
              <label htmlFor='pincode'>Enter Pincode</label>
              <input
                type='text'
                name='pincode'
                id='pincode'
                placeholder='Delivery Pincode'
              />
            </div>

            <div className='btn-con'>
              <button className='btn toCart'>
                <BsCartFill className='animation' /> ADD TO CART
              </button>
              <button className='btn wishlist'>
                <BsFillSaveFill /> WISHLIST
              </button>
            </div>
          </div>

          <div className='delivery-log'>
            <p>
              <img src='/images/truck.png' className='truck' alt='truck' />
              Enjoy free Delivery in most pincodes
            </p>
          </div>
          <hr className='hr-dot' />

          <div className='delivery-details'>
            <h3>Shipping Info</h3>
            <p>
              100% Happiness is our promise Delivering high quality cakes at
              your door step on time is our ultimate Motto
            </p>
            <p>
              ( COD ) Cash on Delivery available (Except for theme cakes) Safe
              and Hygienic Delivery Guaranteed
            </p>
          </div>
          <hr className='hr-dot' />

          <div className='share-it'>
            <h3>Share It</h3>
            <div className='social'>
              <a href='#'>
                <FaFacebookF />
              </a>
              <a href='#'>
                <FaTwitter />
              </a>
              <a href='#'>
                <FaInstagram />
              </a>
              <a href='#'>
                <FaGooglePlusG />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
