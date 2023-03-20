import React from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav>
      <ul>
        <Link to='/'>
        <li>Home</li>
        </Link>
        <li>
          Tractors
          <ul>
            <li>Buy Tractors</li>
            <li>Sell Tractors</li>
          </ul>
        </li>
        <Link to="/parts">
        <li>Parts & Accessories</li>
        </Link>
        <li>
          Services
          <ul>
            <li>Booking on Shop</li>
            <li>Home Service</li>
          </ul>
        </li>
        <li>Site Map</li>
        <li>FAQ</li>
      </ul>
      <div style={{marginRight:"20px"}}>
        <Link to={"/wishlist"}>
        <FavoriteBorderIcon/>
        </Link>
        <Link to={"/kart"}>
        <AddShoppingCartIcon/>
        </Link>
      </div>
    </nav>
  );
}
