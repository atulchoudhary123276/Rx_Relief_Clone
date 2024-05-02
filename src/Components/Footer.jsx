import React from "react";
import "../Css/footer.css";
const Footer = () => {
  return (
    <>

      <div className="footer">
        <div className="A1">
          <h2 className="footerh2">About RxRelief Pharmacy</h2>
          <ul>
            <li>
              <a href="">about us</a>
            </li>
            <li>
              <a href="">FAQs</a>
            </li>
            <li>
              <a href="">Find a Pharmacy</a>
            </li>
            <li>
              <a href="">Health Quaries</a>
            </li>
            <li>
              <a href="">Return & Refund</a>
            </li>
          </ul>
        </div>
        <div className="A1">
          <h2 className="footerh2">Services</h2>
          <ul>
            <li>
              <a href="">Online Doctor Consultation</a>
            </li>
            <li>
              <a href="">Apollo Pro Health Program</a>
            </li>
            <li>
              <a href="">Consult Diabetologists</a>
            </li>
            <li>
              <a href="">Consult Paediatricians</a>
            </li>
            <li>
              <a href="">Consult Gynaecologists</a>
            </li>
          </ul>
        </div>
        <div className="A1">
          <h2  className="footerh2">Book Lab Tests at Home</h2>
          <ul>
            <li>
              <a href="">RT PCR Test At Home</a>
            </li>
            <li>
              <a href="">Book Lab Tests at Home</a>
            </li>
            <li>
              <a href="">Renal Profile (KFT, RFT Test)</a>
            </li>
            <li>
              <a href="">Thyroid Profile Test (T3 T4 Tsh Test)</a>
            </li>
            <li>
              <a href="">Complete Blood Count (CBC Test)</a>
            </li>
            <li>
              <a href="">Liver Function Test (LFT Test)</a>
            </li>
          </ul>
        </div>
        <div className="A1">
          <h2  className="footerh2">Product Categories</h2>
          <ul>
            <li>
              <a href="">View All Brands</a>
            </li>
            <li>
              <a href="">View All Salts</a>
            </li>
            <li>
              <a href="">View All Medicine</a>
            </li>
            <li>
              <a href="">View All Manufacturers</a>
            </li>
            <li>
              <a href="">Health Devices</a>
            </li>
            <li>
              <a href="">Personal Care</a>
            </li>
            <li>
              <a href="">Baby Care</a>
            </li>
            <li>
              <a href="">Beauty Skin Care</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="lowerfooter">
        <div>
          <img className="logo2"
            src="src/img/logo.png"
            alt=""
          />
        </div>
        <div className="lf2">
          <div><h2 className="footerh2">Find us on</h2></div>
          <div class="social-icons">
           <a href=""><i class="fa-brands fa-square-facebook fa-2xl"></i></a>
           <a href=""><i class="fa-brands fa-x-twitter fa-2xl"></i></a>
           <a href=""><i class="fa-brands fa-linkedin fa-2xl"></i></a>
           <a href=""><i class="fa-brands fa-youtube fa-2xl"></i></a>


          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
