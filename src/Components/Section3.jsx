import React from 'react'

import "../Css/section3.css"

const Section3 = ({scrollTop}) => {


    console.log(scrollTop);
    return (
        <>
            <section className='banner' >
                <div className="insidebanner" >
                    <div className="buyMedicineTitle">
                        <h1 className='title'>Buy Medicines and Essentials</h1>
                        <div className="HomeContainer" style={{display:(scrollTop>143)?"none":"block"}}><div className="Search">
                            <span className="SearchSpn SearchSpan"></span>
                            <label for="searchProduct"></label>
                            <input id="searchProduct" placeholder="Search Medicines" className="SearchInput" />
                        </div>
                        </div>
                    </div>
                </div>
            </section>




        </>
    )
}

export default Section3
