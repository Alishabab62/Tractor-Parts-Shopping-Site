import React from 'react';
import img from '../images/image1.jpg'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import axios from 'axios';

export default function Products() {
  // const [products, setProducts] = React.useState([]);


  // React.useEffect(() => {
  //   const url = 'https://tractor.onrender.com/get/products';

  //   axios.get(url).then((response) => {
  //     setProducts(response.data.data);
  //     console.log(response.data.data)
  //   });

  // }, []);

//   const createImageURL = (imageData) => {
//     if (!imageData || !imageData.contentType || !imageData.data) {
//       return '';
//     }
//     const blob = new Blob([new Uint8Array(imageData.data)], {
//       type: imageData.contentType,
//     });
//     return URL.createObjectURL(blob);
//   };

  return (
    <div className='main-products-wrapper'>

      <div className='product-wrapper'>
      <div className='product-image-wrapper' >
        <img src={img} alt="img"></img>
        <FavoriteBorderIcon className='heart-icon'/>
        <div className='product-add-to-cart-button'>Add To Cart</div> 
      </div>
      <p>PTCI</p>
      <div className='product-name-wrapper'><h5>Soccer</h5><h5>Tractor - Sonalika</h5></div>
      <div className='product-price-wrapper'><h5 >Rs.300</h5><h5 className='product-discount-price'>Rs.450</h5><h5>(15%)</h5></div>
      </div>
      
      <div className='product-wrapper' >
      <div className='product-image-wrapper' >
        <img src={img} alt="img"></img>
        <FavoriteBorderIcon className='heart-icon'/>
        <div className='product-add-to-cart-button' >Add To Cart</div> 
      </div>
      <p>PTCI</p>
      <div className='product-name-wrapper'><h5>Soccer</h5><h5>Tractor - Sonalika</h5></div>
      <div className='product-price-wrapper'><h5 >Rs.300</h5><h5 className='product-discount-price'>Rs.450</h5><h5>(15%)</h5></div>
      </div>

      <div className='product-wrapper' >
      <div className='product-image-wrapper' >
        <img src={img} alt="img"></img>
        <FavoriteBorderIcon className='heart-icon'/>
        <div className='product-add-to-cart-button' >Add To Cart</div> 
      </div>
      <p>PTCI</p>
      <div className='product-name-wrapper'><h5>Soccer</h5><h5>Tractor - Sonalika</h5></div>
      <div className='product-price-wrapper'><h5 >Rs.300</h5><h5 className='product-discount-price'>Rs.450</h5><h5>(15%)</h5></div>
      </div>

      <div className='product-wrapper' >
      <div className='product-image-wrapper' >
        <img src={img} alt="img"></img>
        <FavoriteBorderIcon className='heart-icon'/>
        <div className='product-add-to-cart-button' >Add To Cart</div> 
      </div>
      <p>PTCI</p>
      <div className='product-name-wrapper'><h5>Soccer</h5><h5>Tractor - Sonalika</h5></div>
      <div className='product-price-wrapper'><h5 >Rs.300</h5><h5 className='product-discount-price'>Rs.450</h5><h5>(15%)</h5></div>
      </div>

      <div className='product-wrapper' >
      <div className='product-image-wrapper' >
        <img src={img} alt="img"></img>
        <FavoriteBorderIcon className='heart-icon'/>
        <div className='product-add-to-cart-button'>Add To Cart</div> 
      </div>
      <p>PTCI</p>
      <div className='product-name-wrapper'><h5>Soccer</h5><h5>Tractor - Sonalika</h5></div>
      <div className='product-price-wrapper'><h5 >Rs.300</h5><h5 className='product-discount-price'>Rs.450</h5><h5>(15%)</h5></div>
      </div>

      <div className='product-wrapper' >
      <div className='product-image-wrapper' >
        <img src={img} alt="img"></img>
        <FavoriteBorderIcon className='heart-icon'/>
        <div className='product-add-to-cart-button' >Add To Cart</div> 
      </div>
      <p>PTCI</p>
      <div className='product-name-wrapper'><h5>Soccer</h5><h5>Tractor - Sonalika</h5></div>
      <div className='product-price-wrapper'><h5 >Rs.300</h5><h5 className='product-discount-price'>Rs.450</h5><h5>(15%)</h5></div>
      </div>

      <div className='product-wrapper' >
      <div className='product-image-wrapper' >
        <img src={img} alt="img"></img>
        <FavoriteBorderIcon className='heart-icon'/>
        <div className='product-add-to-cart-button' >Add To Cart</div> 
      </div>
      <p>PTCI</p>
      <div className='product-name-wrapper'><h5>Soccer</h5><h5>Tractor - Sonalika</h5></div>
      <div className='product-price-wrapper'><h5 >Rs.300</h5><h5 className='product-discount-price'>Rs.450</h5><h5>(15%)</h5></div>
      </div>

      
    </div>
  );
}
