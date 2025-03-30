import React from "react";
import { IoIosMail } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer_container">
      <p className="footer_top">its all up for you !</p>
      <div className="footer_section">
        <div className="footer_left">
        <span class="type footer_title">Event<span>Rover</span></span> 
          <div className="footer_left_below">

            <div className="footer_text">
              <p>
              Stay updated on upcoming
              <p>events! just by subscribing our</p>
              <p> newsletter..... </p>
            </p>
            </div>
            
            <div className="footer_input">
              <input type="text" name="label" id="" placeholder="Start Here" />
            </div>
          </div>
        </div>
        <div className="footer_right">
          <div className="footer_link">
            <p>About Us</p> 
          <p>blog</p> 
          <p>Careers</p>
          <p>support</p>
          <p>Contact Us</p>
          </div>

          <div>
            <p>Terms of service</p>
          <p>Privacy-policy</p>
          </div>

          
          
          
        </div>

    

      </div>

      <div className="footer_lower">
            <div className="footer_rights">@2024 EventRover, All Rights Reserved</div>
            <div className="footer_madeby">Made by ............</div>
            <div className="footer_links">
              <IoIosMail  className="footer_icon " />
              <BsInstagram className="footer_icon" />
              <FaXTwitter className="footer_icon" />
              <FaLinkedin className="footer_icon" />

              
          
            </div>
          </div>
    </div>
  );
};

export default Footer;
