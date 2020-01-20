import React from 'react'

const Navigation = () => {
  return (
    <div className='navigation'>
      <input type="checkbox" id="navi-toggle" className="navigation__checkbox"/>

      <label htmlFor="navi-toggle" className="navigation__button">Menu</label>
      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item"><a href="localhost:3000" className="navigation__link">About Natours</a></li>
          <li className="navigation__item"><a href="localhost:3000" className="navigation__link">Your Benefits</a></li>
          <li className="navigation__item"><a href="localhost:3000" className="navigation__link">Popular Tours</a></li>
          <li className="navigation__item"><a href="localhost:3000" className="navigation__link">Stories</a></li>
          <li className="navigation__item"><a href="localhost:3000" className="navigation__link">Book Now</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation