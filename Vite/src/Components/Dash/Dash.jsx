import React from 'react'
import './Dash.css';
import User from '../assets/user.png'
import Shopping from '../assets/shopping.png'
import Search from '../assets/search.png'


export default function Dash() {
    return (
        <div className="MainDash">
            <p className="textDash">SHOP.CO</p>
                <ul className="textcontent">
                    <li>Shop v</li>
                    <li>On Sale</li>
                    <li>New Arrivals</li>
                    <li>Brands</li>
                </ul>
            <div className="BoxSearch">

                <img className="logoSeacrch" src={Search} height="24px" width="24px" alt="" />

                <input className="box" type="text" placeholder="Search for products..." name="" id="" />

            </div>
            <div className="Icon">
                <img className="Shopping" src={Shopping} alt="" />
                <img className="toggle-icon" src={User} alt="" />
            </div>



        </div>
    )
}
