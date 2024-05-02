import React from 'react'
import "../Css/t6.0.css"

const T7 = ({info}) => {
  // console.log(info);
  return (
    <>
    <div className="list">
        <h2 className='head'>{info.head}</h2>
       <div className='a1'> <a  href="">View All</a></div>
        <div className="product">
          {info.data.map((data)=>{
            return(
            <div className="productContainer">
            <img src={data.image} alt="" width="100" height="90" loading="lazy" fetchpriority="low"/>
            <h2 className='content'  >{data.content}</h2>
            <br /><br />
            <p className='discount'>&#8377;{data.discount}</p>
            <div className="inline">
            <h4>&#8377;{data.price}</h4>
            <div className='strike'>&#8377;({data.strikeprice})</div><small className='small'>{data.rate} off</small>
            </div>
            <button className='btn'>Add</button>
            </div>
            )

          })}
            
            
        </div>
    </div>

      
    </>
  )
}

export default T7;
