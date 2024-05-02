import React, { useState } from 'react'
import "../Css/navbar2.css"
import Open from './Open';

const Navbar2 = () => {
    const [hovered, setHovered] = useState(false);
    const [id, setId] = useState(-1);
    const toggleHover = (i) => {
        setHovered(!hovered);
        setId(i);
    }
    return (
        <>
            <section className='categories'>
                <ul className='menu'>
                    <li onMouseEnter={() => toggleHover(0)}
                        onMouseLeave={() => toggleHover(0)}><a href="">All Products</a></li>
                    <li onMouseEnter={() => toggleHover(1)}
                        onMouseLeave={() => toggleHover(1)}><a href="">Supplements</a></li>
                    <li onMouseEnter={() => toggleHover(2)}
                        onMouseLeave={() => toggleHover(2)}><a href="">Baby Products</a></li>
                    <li onMouseEnter={() => toggleHover(3)}
                        onMouseLeave={() => toggleHover(3)}><a href="">Ayurveda</a></li>
                    <li onMouseEnter={() => toggleHover(4)}
                        onMouseLeave={() => toggleHover(4)}><a href="">Skin Care</a></li>
                    <li onMouseEnter={() => toggleHover(5)}
                        onMouseLeave={() => toggleHover(5)}><a href="">Women care</a></li>
                    <li onMouseEnter={() => toggleHover(6)}
                        onMouseLeave={() => toggleHover(6)}><a href="">Home Essentials</a></li>
                    <Open id={id} op={hovered}/>
                </ul>


            </section>
        </>
    )
}

export default Navbar2
