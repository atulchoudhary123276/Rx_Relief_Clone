import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import "../Css/slider.css"

const Slider4 = () => {
  const imageContainerRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true); // Initially show the right button

  const imageCount = 7; // Specify the number of images you have

  useEffect(() => {
    const firstImage = imageContainerRef.current.children[0].cloneNode(true);
    const lastImage = imageContainerRef.current.children[imageCount - 1].cloneNode(true);
    imageContainerRef.current.appendChild(firstImage);
    imageContainerRef.current.insertBefore(lastImage, imageContainerRef.current.firstChild);

    const handleScroll = () => {
      const scrollLeft = imageContainerRef.current.scrollLeft;
      const maxScroll = imageContainerRef.current.scrollWidth - imageContainerRef.current.clientWidth;

      // When you reach the last image, instantly scroll back to the first image
      if (scrollLeft === maxScroll-1) {
        imageContainerRef.current.scrollLeft = 0;
      }

      // Show/hide the navigation buttons based on the scroll position
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < maxScroll);
    };

    imageContainerRef.current.addEventListener('scroll', handleScroll);

    return () => {
      imageContainerRef.current.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scroll = (direction) => {
    const far = imageContainerRef.current.clientWidth / 2 * direction;
    const pos = imageContainerRef.current.scrollLeft + far;

    // Use smooth scrolling behavior
    imageContainerRef.current.scroll({
      left: pos,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className="main">
        <div className="wrapper">
          <div className="button left" style={{ display: showLeftButton ? 'inline-block' : 'none' }}>
            <span className="prev" onClick={() => scroll(-1)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"></path></svg></span></div>
          <div ref={imageContainerRef} className="image-container">
            <div className="image"><img src="https://images.apollo247.in/pub/media/magestore/bannerslider/images/a/p/apollo_brands_festival_web.jpg?tr=w-400,q-80,f-webp,c-at_max" alt="" /></div>
            <div className="image"><img src="https://images.apollo247.in/pub/media/magestore/bannerslider/images/v/o/volini_painrelief.jpg?tr=w-400,q-80,f-webp,c-at_max" alt="" /></div>
            <div className="image"><img src="https://images.apollo247.in/pub/media/magestore/bannerslider/images/n/o/novology_deals.jpg?tr=w-400,q-80,f-webp,c-at_max" alt="" /></div>
            <div className="image"><img src="https://images.apollo247.in/pub/media/magestore/bannerslider/images/i/n/indulekha_deals.jpg?tr=w-400,q-80,f-webp,c-at_max" alt="" /></div>
            <div className="image"><img src="https://images.apollo247.in/pub/media/magestore/bannerslider/images/n/e/nestle_optifast_resource.jpg?tr=w-400,q-80,f-webp,c-at_max" alt="" /></div>
            <div className="image"><img src="https://images.apollo247.in/pub/media/magestore/bannerslider/images/p/a/pampers_premium_care_deals_2.jpg?tr=w-400,q-80,f-webp,c-at_max" alt="" /></div>
            <div className="image"><img src="https://images.apollo247.in/pub/media/magestore/bannerslider/images/p/e/pentasure_health_drinks.jpg?tr=w-400,q-80,f-webp,c-at_max" alt="" /></div>

          </div>
          <div className="button right" style={{ display: showRightButton ? 'inline-block' : 'none' }}><span className="next" onClick={() => scroll(1)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path></svg></span>
          </div>
        </div>
      </div>

    </>
  )
}

export default Slider4
