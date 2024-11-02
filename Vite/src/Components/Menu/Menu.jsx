import React from 'react'
import './Menu.css';
import Menu1 from '../assets/menu1.png'
import Vector from '../assets/Vector.png'

export default function Menu() {
  return (
    <div className="BigPic">
      <div className="mainMenu">
        <h1 className="titletop">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <div className="Vector">
          <p className="content">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
          <img className="Vector2" src={Vector} width="56px" height="56px" alt="" />
        </div>
        <button>Shop Now</button>
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">200+</div>
            <div className="stat-label">International Brands</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">2,000+</div>
            <div className="stat-label">High-Quality Products</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">30,000+</div>
            <div className="stat-label">Happy Customers</div>
          </div>
        </div>

      </div>
      <img className="Pic" src={Menu1} width="500px" height="633px" alt="" />
      <img className="Vector1" src={Vector} width="104px" height="104px" alt="" />

    </div>
  )
}
