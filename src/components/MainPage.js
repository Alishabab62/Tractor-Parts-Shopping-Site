import React from "react";
import Header from "./Header";
import "../css/index.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import img1 from "../images/image1.jpg";
import img2 from "../images/image2.jpg";
import img3 from "../images/image3.jpg";
import img4 from "../images/image4.jpg";
import spare1 from "../images/spare1.jpg";
import spare2 from "../images/spare2.jpg";
import spare3 from "../images/spare3.jpg";
import spare4 from "../images/spare4.jpg";
import spare5 from "../images/spare5.jpg";
import spare6 from "../images/spare6.jpg";
import spare7 from "../images/spare7.jpg";
import spare8 from "../images/spare8.jpg";
export default function MainPage() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="body-images">
        <h3>Top Selling Tractors</h3>
        <div className="main-page-image">
          <img src={img1} alt="img"></img>
          <img src={img2} alt="img"></img>
          <img src={img3} alt="img"></img>
          <img src={img4} alt="img"></img>
        </div>
      </div>
      <div className="body-images-spare">
        <h3>Top Selling Spare Parts</h3>
        <div className="main-page-image-spare">
          <div>
            <img src={spare1} alt="img"></img>
            <h3>Clutch Plates</h3>
          </div>
          <div>
            <img src={spare3} alt="img"></img>
            <h3>Filters</h3>
          </div>
          <div>
            <img src={spare2} alt="img"></img>
            <h3>Pistons</h3>
          </div>
          <div>
            <img src={spare4} alt="img"></img>
            <h3>Alloy Wheels</h3>
          </div>
          <div>
            <img src={spare5} alt="img"></img>
            <h3>Bearings</h3>
          </div>
          <div>
            <img src={spare6} alt="img"></img>
            <h3>Engine</h3>
          </div>
          <div>
            <img src={spare7} alt="img"></img>
            <h3>Soccer</h3>
          </div>
          <div>
            <img src={spare8} alt="img"></img>
            <h3>Dynamo</h3>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
