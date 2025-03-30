import React from "react";
import './app.css'
import LandPage from "./component/landingPage.jsx";
import Navbar from "./component/navbar.jsx";
import { useEffect , useState } from "react";
import Faq from "./component/faq.jsx";
import Footer from "./component/footer.jsx";


const App = () => {



    

  return(
    <div className="main_container">
      <LandPage/>

      <div className="main_navbar">
        <Navbar/>
      </div>

      <div className="faqs_section">
        <Footer/>
      </div>
     
      
    </div>
  )
}




export default App;