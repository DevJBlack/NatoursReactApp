import React from 'react'

import natEight from '../img/nat-8.jpg'
import natNine from '../img/nat-9.jpg'
import videoMp4 from '../img/video.mp4'
import videoMebm from '../img/video.webm'

const SectionStories = () => {
  return (
    <div>
      <section className="section-stories">

        <div className="bg-video">
          <video className="bg-video__content" autoPlay muted loop >
            <source src={videoMp4} type="video/mp4"/>
            <source src={videoMebm} type="img/video.webm" />
            Your browser is not supported!
          </video>
        </div>

          <div className="u-center-text u-margin-bottom-large">
              <h2 className="heading-secondary">
                We make people genuinely happy
              </h2>
            </div>

            <div className="box">
              <div className="story u-margin-bottom-large">
                <figure className="story__shape">
                  <img src={natEight} alt="Person on a tour" className='story__img'/>
                  <figcaption className="story__caption">Mary Smith</figcaption>
                </figure>
                <div className="story__text">
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    I had the best week ever with my family
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.Aperiam, ipsum sapiente aspernatur.Aperiam, ipsum sapiente aspernatur.Aperiam, ipsum sapiente aspernatur.clip-pathclip-pathclip-pathclip-pathclip-pathclip-path
                  </p>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="story">
                <figure className="story__shape">
                  <img src={natNine} alt="Person on a tour" className='story__img'/>
                  <figcaption className="story__caption">Jack Wilson</figcaption>
                </figure>
                <div className="story__text">
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    WOW! My life is completely different now.
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.Aperiam, ipsum sapiente aspernatur.Aperiam, ipsum sapiente aspernatur.Aperiam, ipsum sapiente aspernatur.clip-pathclip-pathclip-pathclip-pathclip-pathclip-path
                  </p>
                </div>
              </div>
            </div>

            <div className="u-center-text u-margin-top-large">
              <a href="localhost:3000" className="btn-text">Read all stories &rarr;</a>
            </div>

      </section>
    </div>
  )
}

export default SectionStories