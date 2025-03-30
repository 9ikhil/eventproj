import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import img1 from "../assets/Images/1.jpeg";
import img2 from "../assets/Images/2.jpeg";
import img3 from "../assets/Images/3.jpeg";
import img4 from "../assets/Images/4.jpeg";
import img5 from "../assets/Images/5.jpeg";
import rotator from "../assets/Images/revolving.svg";
import asterisk from "../assets/Images/asterisk.svg";
import Faq from "./faq.jsx";
import Footer from "../component/footer.jsx";

// import 'swiper/swiper.min.css'

const LandPage = () => {

  return (
    <div className="main_container_landing ">
      <h2 className="event_rover">Event Rover</h2>
      <h1>Explore College events </h1>
      <h3>Across Diverse Campuses.</h3>
      <h4>Discover. Publish. Connect. Your Hub for College Events</h4>

      <div className="landing_button-divein">
        <button className="button-50">let's dive</button>
      </div>

      <div className="button_below">Made for Colleagues</div>

      <div className="landing_crausel ">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <img src={img1} alt="event1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="event2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="event3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt="event4" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5} alt="event5" />
          </SwiperSlide>
        </Swiper>
      </div>

      <img src={rotator} alt="" className="rotator"></img>

      <div className="loop ">
        <div className="element">
          <h2>GGS Indraprastha University</h2>
          <img src={asterisk} alt="" />
          <h2> Dr. A.P.J Abdul Kalam Technical University</h2>
          <img src={asterisk} alt="" />
          <h2>Delhi University</h2>
          <img src={asterisk} alt="" />
          <h2>Indian Institute of Techcnology</h2>
          <img src={asterisk} alt="" />
          <h2>Netaji Subhash University of Technology</h2>
          <img src={asterisk} alt="" />
          <h2>Delhi Technical University</h2>
          <img src={asterisk} alt="" />
        </div>

        <div className="element">
          <h2>GGS Indraprastha University</h2>
          <img src={asterisk} alt="" />
          <h2> Dr. A.P.J Abdul Kalam Technical University</h2>
          <img src={asterisk} alt="" />
          <h2>Delhi University</h2>
          <img src={asterisk} alt="" />
          <h2>Indian Institute of Techcnology</h2>
          <img src={asterisk} alt="" />
          <h2>Netaji Subhash University of Technology</h2>
          <img src={asterisk} alt="" />
          <h2>Delhi Technical University</h2>
          <img src={asterisk} alt="" />
        </div>
      </div>
      <div className="yellow_container">
        <div className="yellow_headings">
          <h2>We didn’t Just Find </h2>
          <h2>for you, We Support</h2>
          <p>
            Share your college events and hackathons, unlock rewards, and get
            the support you deserve!
          </p>


        </div>

        <div className="yellow_icons">
          <div className="icon1">
            <img src={asterisk} alt="" />
            <h4>
              Find events and hackathons effortlessly. One-stop for all the fun!
            </h4>
          </div>

          <div className="icon2">
            <img src={asterisk} color="white" alt="" />
            <h4>
              Highlight your college events! Post ads, get featured. It's that
              easy!
            </h4>
          </div>

          <div className="icon3">
            <img src={asterisk} alt="" />
            <h4>
              Earn adorable reward points with every event you post on our
              website!
            </h4>
          </div>
        </div>
      </div>

      <div className="faqs_section">
        <Faq />

      </div>

     


    </div>
  );
};

export default LandPage;
