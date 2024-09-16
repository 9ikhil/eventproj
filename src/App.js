import React from "react";
import './app.css'
import LandPage from "./component/landingPage.jsx";
import Navbar from "./component/navbar.jsx";


const App = () => {

  return(
    <div className="main_container">
      <LandPage/>

      <div className="main_navbar">
        <Navbar/>
      </div>
    </div>
  )
}




export default App;