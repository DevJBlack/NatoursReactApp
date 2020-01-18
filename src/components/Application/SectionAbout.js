import React from 'react'

import natOne from '../img/nat-1-large.jpg'
import natTwo from '../img/nat-2-large.jpg'
import natThree from '../img/nat-3-large.jpg'

const SectionAbout = () => {
  return (
    <div style={{width: '100%'}}>
      <section className="section-about">
            <div className="u-center-text u-margin-bottom-large">
              <h2 className="heading-secondary">
                Exciting tours for adventurous people
              </h2>
            </div>

            <div className='box'>
              <div className='box-1-of-2'>
                  <h3 className="heading-tertiary u-margin-bottom-small">You're going to fall in love nature</h3>
                  <p className="paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quam quod delectus libero, rem vitae voluptatem unde eveniet molestiae iure asperiores eius sit nobis porro, dolorem inventore rerum eos temporibus?
                  </p>
                  <h3 className="heading-tertiary u-margin-bottom-small">Live adventures like you never have before</h3>
                  <p className="paragraph">
                    This is one of the coolest applications that I have ever built and I love learning SASS and styling for Apps.
                  </p>

                  <a href="localhost:3000" className="btn-text">Learn More &rarr;</a>
              </div>
              <div className='box-2-of-2'>
                  <div className="composition">
                    <img src={natOne} alt="1" className="composition__photo composition__photo--p1"/>
                    <img src={natTwo} alt="2" className="composition__photo composition__photo--p2"/>
                    <img src={natThree} alt="3" className="composition__photo composition__photo--p3"/>
                  </div>
              </div>
            </div>
          </section>
    </div>
  )
}

export default SectionAbout