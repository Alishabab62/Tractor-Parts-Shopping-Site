import img1 from '../images/image1.jpg'
import img2 from '../images/image2.jpg'
import img3 from '../images/image3.jpg'
import img4 from '../images/image4.jpg'
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarouselMain = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 4
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={img1} alt="placeholder" />
      </div>
      <div>
        <img src={img2} alt="placeholder" />
      </div>
      <div>
        <img src={img3} alt="placeholder" />
      </div>
      <div>
        <img src={img4} alt="placeholder" />
      </div>
    </Slider>
  );
};


export default CarouselMain