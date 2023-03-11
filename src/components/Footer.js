import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CopyrightIcon from '@mui/icons-material/Copyright';
export default function Footer() {
  return (
    <footer>
      <div className='footer-contact-us'>
        <h2>Contact Us</h2>
        <div><LocationOnIcon />Dehagawan Dist. - Badaun U.P</div>
        <div><EmailIcon />alishabab62@gmail.com</div>
          <h3>Connect With Us</h3>
        <div>
          <InstagramIcon/>
          <TwitterIcon/>
          <FacebookIcon/>
          <YouTubeIcon/>
        </div>
      </div>
      <div className='footer-quick-links'>
      <h2>Quick Links</h2>
        <ul>
          <li>Tractors</li>
          <li>Parts & Accessories</li>
          <li>Service</li>
          <li>FAQ</li>
          <li>About Us</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className='footer-copyright'>
      <h2>Copyright</h2>
      <div> <CopyrightIcon/> 2023 All right reserved to Shabab Ali</div>
      </div>
    </footer>
  )
}
