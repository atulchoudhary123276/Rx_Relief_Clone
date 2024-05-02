import Navbar from "./Components/Navbar.jsx"
import Navbar2 from "./Components/Navbar2.jsx"
import Section3 from "./Components/Section3.jsx"
import Slider4 from "./Components/Slider4.jsx"
import T5 from "./Components/T5.jsx"
import { useState, useEffect } from 'react';
import obj from "./Components/UserApi.jsx";
import T7 from "./Components/T6.jsx";
import Footer from "./Components/Footer.jsx";


function App() {
  const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = event => {
            setScrollTop(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <>
    <Navbar scrollTop={scrollTop}/>
    <Navbar2/>
     <Section3 scrollTop={scrollTop}/>
     <Slider4/>
     <T5/>
     <T7 info={obj.hotseller} />
    
     <T7 info={obj.skincare} />
     <Footer></Footer>
    </>
  )
}

export default App
