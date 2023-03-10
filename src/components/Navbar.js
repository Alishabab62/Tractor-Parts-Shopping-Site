import React from "react";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>
          Tractors
          <ul>
            <li>Buy Tractors</li>
            <li>Sell Tractors</li>
          </ul>
        </li>
        <li>Parts & Accessories</li>
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
    </nav>
  );
}
