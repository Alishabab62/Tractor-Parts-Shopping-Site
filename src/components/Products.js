import React, { useState, useEffect, useMemo } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import axios from "axios";
// import {  LinearProgress } from "@mui/material";

export default function Products(props) {
  const [products, setProducts] = useState([]);
  // const [wishListResponse , setWishListResponse] = useState(true)
  // const [progress , setProgress] = useState(0)

  useEffect(() => {
    const url = `https://tractor.onrender.com/get/products`;

    axios.get(url).then((response) => {
      if (response.data.products) {
        setProducts(response.data.products);
      }
    });
  }, []);

  const result = useMemo(() => {
    if (props.filter) {
      return products.filter((item) => {
        if (item.tractor === props.filter) {
          return item;
        }
        return null;
      });
    } else {
      return products;
    }
  }, [props.filter, products]);

  function handleWishlist(e){
    // setWishListResponse(true)
    let itemId = e.target.parentElement.getAttribute("item");
    let userData = JSON.parse(localStorage.getItem("userTractor"));
    const url = `https://tractor.onrender.com/wishlist/${userData.data.token}`
    const data = {
      "user":`${userData.data.email}`,
      "product":`${itemId}`
    }
    axios.post(url , data).then((res)=>{
      // setWishListResponse(false)
      console.log(res.data)
    }).catch((error)=>{
      console.log(error.response.status)
      if(error.response.status === 400){
        window.location.href = '/login'
      }
    })
  }


  return (
    <div className="main-products-wrapper" >
      {/* {wishListResponse ? <div style={{width:"10%" , backgroundColor:"red" , position:"absolute" , zIndex:"5" , right:"0px"}}>
      <LinearProgress variant="determinate" value={progress} style={{height:"10px"}} />
      </div> : "" } */}
      {result.map((item, index) => {
        return (
          <div className="product-wrapper" key={item._id}>
            <div className="product-image-wrapper">
              <img src={item.image} alt="img" />
                <FavoriteIcon
                  onClick={handleWishlist}
                  style={{ color: "red" }}
                  className="heart-icon"
                  item={item._id}
                />
              <div className="product-add-to-cart-button">Add To Cart</div>
            </div>
            <p>{item.brand}</p>
            <div className="product-name-wrapper">
              <h5>{item.name}</h5>
              <h5>Tractor - {item.tractor}</h5>
            </div>
            <div className="product-price-wrapper">
              <h5>Rs.{item.price}</h5>
              <h5 className="product-discount-price">Rs.450</h5>
              <h5>({item.discount}%)</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
}

