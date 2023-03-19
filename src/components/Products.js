// import React, { useState, useEffect, useMemo } from "react";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import axios from "axios";

// export default function Products(props) {
//   const [products, setProducts] = useState([]);
//   const [wishList , setWishList] = useState(false)

//   useEffect(() => {
//     const url = `https://tractor.onrender.com/get/products`;

//     axios.get(url).then((response) => {
//       if (response.data.products) {
//         setProducts(response.data.products);
//       }
//     });
//   }, []);

//   const result = useMemo(() => {
//     if (props.filter) {
//       return products.filter((item) => {
//         if (item.tractor === props.filter) {
//           return item;
//         }
//         return null;
//       });
//     } else {
//       return products;
//     }
//   }, [props.filter, products]);

//   function handleWishList(e){
//     console.log(e.target.parentNode)
//     setWishList((prevState)=>{
//         if(prevState){
//             setWishList(false)
//         }else{
//             setWishList(true)
//         }
//     })
//   }

//   return (
//     <div className="main-products-wrapper">
//       {result.map((item) => {
//         return (
//           <div className="product-wrapper" key={item._id}>
//             <div className="product-image-wrapper">
//               <img src={item.image} alt="img"></img>
//               {wishList ? <FavoriteBorderIcon  onClick={handleWishList} className="heart-icon" /> : <FavoriteIcon onClick={handleWishList} style={{color:"red"}} className="heart-icon" />}
//               <div className="product-add-to-cart-button">Add To Cart</div>
//             </div>
//             <p>{item.brand}</p>
//             <div className="product-name-wrapper">
//               <h5>{item.name}</h5>
//               <h5>Tractor - {item.tractor}</h5>
//             </div>
//             <div className="product-price-wrapper">
//               <h5>Rs.{item.price}</h5>
//               <h5 className="product-discount-price">Rs.450</h5>
//               <h5>({item.discount}%)</h5>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }



import React, { useState, useEffect, useMemo } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import axios from "axios";

export default function Products(props) {
  const [products, setProducts] = useState([]);

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

  function handleWishList(e) {
    const index = e.target.getAttribute("data-attribute");
    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts];
      updatedProducts[index].wishList = !updatedProducts[index].wishList;
      return updatedProducts;
    });
  }

  return (
    <div className="main-products-wrapper">
      {result.map((item, index) => {
        return (
          <div className="product-wrapper" key={item._id}>
            <div className="product-image-wrapper">
              <img src={item.image} alt="img" />
              {item.wishList ? (
                <FavoriteIcon
                  onClick={handleWishList}
                  style={{ color: "red" }}
                  className="heart-icon"
                  data-attribute={index}
                />
              ) : (
                <FavoriteBorderIcon
                  onClick={handleWishList}
                  className="heart-icon"
                  data-attribute={index}
                />
              )}
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

