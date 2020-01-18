import React from 'react'
import logo from '../img/logo-white.png'

const Header = () => {
  return (
    <div>
       <header className="header">
            <div className="header__logo-box">
                <img src={logo} alt="Logo" className="header__logo" />
            </div>

            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary-main">Outdoors</span>
                    <span className="heading-primary-sub">is where life happens</span>
                </h1>
              <a href="localhost:3000" className="btn btn-white btn-animated">Discover our tours</a>
            </div>
        </header>
    </div>
  )
}

export default Header