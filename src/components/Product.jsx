import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

function Product() {
  const [tabSwitch, SetTabSwitch] = useState("details");

  return (
    <section className='tabs'>
      <ul className='flex'>
        <li>
          <a
            className={` ${tabSwitch === "details" && "is-active"}`}
            data-tabs='details'
            onClick={(e) => SetTabSwitch(e.target.dataset.tabs)}>
            Details
          </a>
        </li>
        <li>
          <a
            className={` ${tabSwitch === "specification" && "is-active"}`}
            data-tabs='specification'
            onClick={(e) => SetTabSwitch(e.target.dataset.tabs)}>
            Specification
          </a>
        </li>
        <li>
          <a
            className={`${tabSwitch === "video" && "is-active"}`}
            data-tabs='video'
            onClick={(e) => SetTabSwitch(e.target.dataset.tabs)}>
            Video
          </a>
        </li>
        <li>
          <a
            className={`${tabSwitch === "review" && "is-active"}`}
            data-tabs='review'
            onClick={(e) => SetTabSwitch(e.target.dataset.tabs)}>
            Write Review
          </a>
        </li>
      </ul>
      <hr />
      <div className={`isTab ${tabSwitch === "details" && "active"}`}>
        <p>
          Two tier fresh cream cake Micky Mouse Theme Cake Right choice for
          first birthday
        </p>
      </div>
      <div className={`isTab ${tabSwitch === "specification" && "active"}`}>
        <p>
          The Model is wearing a white blouse from our stylist's collection, see
          the image for a mock-up of what the actual blouse would look like.it
          has text written on it in a black cursive language which looks great
          on a white color.
        </p>

        <div className='rows'>
          <div className='columns'>
            <p className='shade'>Shape</p>
            <p>Heart</p>
          </div>
          <div className='columns'>
            <p className='shade'>Taste</p>
            <p>Delicious</p>
          </div>
          <div className='columns'>
            <p className='shade'>Occasion</p>
            <p>Birthday</p>
          </div>
          <div className='columns'>
            <p className='shade'>Content</p>
            <p>Sugarless</p>
          </div>
          <div className='columns'>
            <p className='shade'>Gift</p>
            <p>Candles</p>
          </div>
        </div>
      </div>
      <div className={`isTab ${tabSwitch === "video" && "active"}`}>
        <iframe
          width='560'
          height='315'
          src='https://www.youtube.com/embed/5bNT7XynEms'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen></iframe>
      </div>
      <div className={`isTab ${tabSwitch === "review" && "active"}`}>
        <p>
          Rating{" "}
          <span className='star'>
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
          </span>
        </p>

        <form className='flex-form'>
          <div className='con'>
            <div className='items'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                name='name'
                id='name '
                placeholder='Enter Your Name'
              />
            </div>

            <div className='items'>
              <label htmlFor='email'>email</label>
              <input
                type='text'
                name='email'
                id='email '
                placeholder='Enter Your Email'
              />
            </div>
          </div>

          <label htmlFor='title'>Review Title</label>
          <input
            type='text'
            name='title'
            id='title '
            placeholder='Enter Your Review Subject'
          />

          <label htmlFor='testimonial'>Review Testimonial</label>
          <textarea
            name='testimonial'
            id='testimonital'
            placeholder='Enter Your Testimonial'></textarea>
        </form>
      </div>
    </section>
  );
}

export default Product;
