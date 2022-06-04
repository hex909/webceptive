import React from 'react'

function RelatedPro() {
    return (
        <section className="related">
            <h2>Related Products</h2>
            <hr />
            <div className="cards">
                <div className="card">
                    <div className="data">

                        <img src="/images/cakes/frozen.png" alt="product img" />
                        <img src="/images/cakes/frozen.png" alt="product img" className='toshow' />
                    </div>
                    <a href="#" className='name'>Frozen Theme Elsa Photo print cake</a>
                    <h3>&#x20b9;1250</h3>
                </div>
                <div className="card">
                    <div className='data'>
                        <img src="/images/cakes/Chocolate.jpg" alt="product img" />
                        <img src="/images/cakes/Chocolate.jpg" alt="product img" className='toshow' />
                    </div>
                    <a href="#" className='name'>Chocolate  Truffle Cake</a>
                    <h3>&#x20b9;810</h3>
                </div>
                <div className="card">
                    <div className="data">
                        <img src="/images/cakes/mick2.jpg" alt="product img" />
                        <img src="/images/cakes/mick2.jpg" alt="product img" className='toshow' />
                    </div>
                    <a href="#" className='name'>Two Tier Micky Theme Cake</a>
                    <h3>&#x20b9;2610</h3>
                </div>
                <div className="card">
                    <div className="data">
                        <img src="/images/cakes/Rasmalai.jpg" alt="product img" />
                        <img src="/images/cakes/Rasmalai.jpg" alt="product img" className='toshow' />
                    </div>
                    <a href="#" className='name'>Rasmalai cake</a>
                    <h3>&#x20b9;855</h3>
                </div>
                <div className="card">
                    <div className="data">
                        <img src="/images/cakes/Ronaldo.jpg" alt="product img" />
                        <img src="/images/cakes/Ronaldo.jpg" alt="product img" className='toshow' />
                    </div>
                    <a href="#" className='name'>Ronaldo-football-theme-cake</a>
                    <h3>&#x20b9;1350</h3>
                </div>
                <div className="card">
                    <div className="data">
                        <img src="/images/cakes/Nursery.jpg" alt="product img" />
                        <img src="/images/cakes/Nursery.jpg" alt="product img" className='toshow' />
                    </div>
                    <a href="#" className='name'>School Theme Cake</a>
                    <h3>&#x20b9;900</h3>
                </div>
            </div>

            <div className='subscribe'>
                <input type="email" name="email" id="email" placeholder='Enter Your Email' />
                <button>subscribe</button>
            </div>
        </section>
    )
}

export default RelatedPro