import React from 'react'
import "../Css/navbar.css"

const Navbar = ({scrollTop}) => {
    return (
        <>
            <nav className='navbar'>

                <img className='logo1' src="src/img/logo.png" alt="" />
                <div className="loc">
                    <p><i className="fa-solid fa-location-dot fa-2xl"></i>Delivery Address</p>
                    <br />
                    <label className='select' for="location">Select Address</label>
                    <select name="location">
                        <option value="">Use Current location</option>
                        <option value="">Enter Delivery Pincode</option>
                    </select>
                </div>
                    <div className="HomeContainer1" style={{display:(scrollTop<143)?"none":"block"}}>
                        <div className="Search1">
                            <span className="SearchSpn1 SearchSpan1"></span>
                            <label for="searchProduct1"></label>
                            <input id="searchProduct1" placeholder="Search Medicines" className="SearchInput1" />
                        </div>
                        </div>
                <div>
                    {/* <div className="searchbox">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="search" className='search' placeholder='Search Medicines' />
                    </div> */}
                    <div className="icons">
                        <img style={{ width: '30px' }} src="https://cdn0.iconfinder.com/data/icons/shopping-ecommerce-8/24/discount-coupon-bubble-percent-price-prices-off-512.png" alt="" />
                        <i class="fa-solid fa-cart-shopping fa-xl"></i>
                        <i class="fa-regular fa-circle-user fa-xl"></i>                </div>

                </div>
            </nav>


        </>
    )
}

export default Navbar
