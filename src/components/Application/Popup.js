import React from 'react'
import natEight from '../img/nat-8.jpg'
import natNine from '../img/nat-9.jpg'

const Popup = () => {
  return (
    <div className="popup">
      <div className="popup__content">
        <div className="popup__left">
          <img className='popup__img' src={natEight} alt="nat-8"/>
          <img className='popup__img' src={natNine} alt="nat-9"/>
        </div>
        <div className="popup__right">
          <h2 className="heading-secondary">Start booking now</h2>
          <h3 className="heading-tertiary">Important &ndash; Please read these terms before booking</h3>
          <p className="popup__text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus molestias nostrum facilis dicta dolore ex molestiae, saepe amet eum consequatur maxime ipsa ad laudantium, reiciendis optio. Recusandae eaque distinctio eveniet!
          </p>
          <a href="localhost:300" className="btn btn-green">Book Now</a>
        </div>
      </div>
    </div>
  )
}

export default Popup