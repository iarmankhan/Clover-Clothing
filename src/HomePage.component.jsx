import React from 'react';

import './HomePage.styles.scss'

const HomePage = () => (
    <div className="homepage">
        <div className="directory-menu">
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Hats</h1>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Shirts</h1>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">T-shirts</h1>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Jeans</h1>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Sneakers</h1>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>
        </div>
    </div>   
);
 
export default HomePage;