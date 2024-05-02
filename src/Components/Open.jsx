import React, { useState } from 'react'

const Open = (props) => {
    const [hovered1, setHovered1] = useState(false);
    const toggleHover1 = () => setHovered1(!hovered1);
    return (
        <section className='extend'>
            <div className={props.op || hovered1 ? 'dropdown-content' : 'dropdown-content-none'}
                onMouseEnter={toggleHover1}
                onMouseLeave={toggleHover1}
                style={{ left: 7 + (props.id) * 30 + "vh" }}
            >
                <div className={"dropdown "+ (props.id===0 || props.id===1 ? "" : "dropdown-none")}>
                    <h3>Personal Care</h3>
                    <a href="#">Baby Care</a>
                    <a href="#">Personal Care</a>
                    <a href="#">Home Essentials</a>
                    <a href="#">Health Devices</a>
                    <a href="#">Ayurveda</a>
                </div>
                <div className={"c dropdown "+ (props.id===0 || props.id===2 ? "" : "dropdown-none")}>
                    <h3 className='dropdown-head'>Baby Care</h3>
                    <div>
                    <p>Diapering</p>
                    <a href="#">Diapers</a>
                    <a href="#">Wipes</a> </div>
                    <div>
                        <p>Baby Skin Care</p>
                    <a href="#">Baby cream</a>
                    <a href="#">Baby Lotions</a>
                    <a href="#">Baby powders</a>
                    <a href="#">Baby Massage Oils</a>
                    </div>
                    <div>
                        <p>Baby Food</p>
                    <a href="#">Baby Cereals</a>
                    <a href="#">Formula Milk</a>
                    <a href="#">Baby powders</a>
                    <a href="#">Baby Massage Oils</a>
                    </div>
                </div>
                <div className={"dropdown "+ (props.id===0 || props.id===3 ? "" : "dropdown-none")}>
                    <h3>Ayurveda</h3>
                    <a href="#">Baby Care</a>
                    <a href="#">Personal Care</a>
                    <a href="#">Home Essentials</a>
                    <a href="#">Health Devices</a>
                    <a href="#">Ayurveda</a>
                </div>
                <div className={"c dropdown "+ (props.id===0 || props.id===4 ? "" : "dropdown-none")}>
                    <p>Skin care</p>
                    <a href="#">Baby Care</a>
                    <a href="#">Personal Care</a>
                    <a href="#">Home Essentials</a>
                    <a href="#">Health Devices</a>
                    <a href="#">Ayurveda</a>
                </div>
                <div className={"dropdown "+ (props.id===0 || props.id===5 ? "" : "dropdown-none")}>
                    <p>women care</p>
                    <a href="#">Baby Care</a>
                    <a href="#">Personal Care</a>
                    <a href="#">Home Essentials</a>
                    <a href="#">Health Devices</a>
                    <a href="#">Ayurveda</a>
                </div>
                <div className={"c dropdown "+ (props.id===0 || props.id===6 ? "" : "dropdown-none")}>
                    <p>Home Essentials</p>
                    <a href="#">Baby Care</a>
                    <a href="#">Personal Care</a>
                    <a href="#">Home Essentials</a>
                    <a href="#">Health Devices</a>
                    <a href="#">Ayurveda</a>
                </div>
            </div>
        </section>
    )
}

export default Open
