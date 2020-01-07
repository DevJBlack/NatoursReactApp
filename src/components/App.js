import React from 'react';
import './sass/App.scss';
import logo from './img/logo-white.png'
import natOne from './img/nat-1-large.jpg'
import natTwo from './img/nat-2-large.jpg'
import natThree from './img/nat-3-large.jpg'
import natEight from './img/nat-8.jpg'

const App = () => {
  return (
    <div className="App">
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

        <main className='main-box'>
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

          <section className="section-features">  

                <div className="box">
                    <div className="col-1-of-4">
                        <div className="feature-box">
                        <i className="feature-box__icon fas fa-globe-americas"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">Explore the world</h3>
                            <p className="feature-box__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                            </p>
                        </div>
                    </div>

                    <div className="col-1-of-4">
                        <div className="feature-box">
                          <i className="feature-box__icon far fa-compass"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">Meet nature</h3>
                            <p className="feature-box__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                            </p>
                        </div>
                    </div>

                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <i className="feature-box__icon fas fa-mountain"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">Find your way</h3>
                             <p className="feature-box__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                            </p>
                        </div>
                    </div>

                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <i className="feature-box__icon far fa-heart"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">Live a healthier life</h3>
                            <p className="feature-box__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-tours">
              <div className="u-center-text u-margin-bottom-large">
                <h2 className="heading-secondary">
                  Most popular tours
                </h2>
              </div>

              <div className="box">
                <div className="col-1-of-3">
                  <div className="card">
                    <div className="card__side card__side--front">

                      <div className="card__picture card__picture--1">
                        &nbsp;
                      </div>
                      <h4 className="card__heading">
                        <span className="card__heading-span card__heading-span--1">
                          The Sea Explorer
                        </span>
                      </h4>
                      <div className="card__details">
                        <ul>
                          <li>3 Day Tour</li>
                          <li>Up to 30 People</li>
                          <li>2 Tour Guides</li>
                          <li>Sleep in Cozy Hotels</li>
                          <li>Difficulty: Easy</li>
                        </ul>
                      </div>

                    </div>
                    <div className="card__side card__side--back card__side--back-1">
                      <div className="card__cta">
                        <div className="card__price-box">
                          <p className="card__price-only">
                            Only
                          </p>
                          <p className="card__price-value">$297</p>
                          <a href="localhost:3000" className="btn btn-white">Book Now</a>
                        </div>
                      </div>
                    </div>
                 </div>
                </div>
                <div className="col-1-of-3">                 
                  <div className="card">
                      <div className="card__side card__side--front">

                        <div className="card__picture card__picture--2">
                          &nbsp;
                        </div>
                        <h4 className="card__heading">
                          <span className="card__heading-span card__heading-span--2">
                            The Forest Hiker
                          </span>
                        </h4>
                        <div className="card__details">
                          <ul>
                            <li>7 Day Tour</li>
                            <li>Up to 40 People</li>
                            <li>6 Tour Guides</li>
                            <li>Sleep in Provided Tents</li>
                            <li>Difficulty: Medium</li>
                          </ul>
                        </div>

                      </div>
                      <div className="card__side card__side--back card__side--back-2">
                        <div className="card__cta">
                          <div className="card__price-box">
                            <p className="card__price-only">
                              Only
                            </p>
                            <p className="card__price-value">$497</p>
                            <a href="localhost:3000" className="btn btn-white">Book Now</a>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
                <div className="col-1-of-3">                   
                  <div className="card">
                      <div className="card__side card__side--front">

                        <div className="card__picture card__picture--3">
                          &nbsp;
                        </div>
                        <h4 className="card__heading">
                          <span className="card__heading-span card__heading-span--3">
                            The Snow Adventure
                          </span>
                        </h4>
                        <div className="card__details">
                          <ul>
                            <li>5 Day Tour</li>
                            <li>Up to 15 People</li>
                            <li>2 Tour Guides</li>
                            <li>Sleep in Provided Tents</li>
                            <li>Difficulty: Hard</li>
                          </ul>
                        </div>

                      </div>
                      <div className="card__side card__side--back card__side--back-3">
                        <div className="card__cta">
                          <div className="card__price-box">
                            <p className="card__price-only">
                              Only
                            </p>
                            <p className="card__price-value">$678</p>
                            <a href="localhost:3000" className="btn btn-white">Book Now</a>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>

              <div className="u-center-text u-margin-top-large">
                <a href="localhost:3000" className="btn btn-green">Discover All Tours</a>
              </div>

            </section>

            <section className="section-stories">
            <div className="u-center-text u-margin-bottom-large">
                <h2 className="heading-secondary">
                  We make people genuinely happy
                </h2>
              </div>

              <div className="box">
                <div className="story">
                  <figure className="story__shape">
                    <img src={natEight} alt="Person on a tour" className='story__img'/>
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
            </section>
        </main>
    </div>
  );
}

export default App;
