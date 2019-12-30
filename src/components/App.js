import React from 'react';
import './sass/App.scss';
import logo from './img/logo-white.png'
import natOne from './img/nat-1-large.jpg'
import natTwo from './img/nat-2-large.jpg'
import natThree from './img/nat-3-large.jpg'

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
              <a href="www.google.com" className="btn btn-white btn-animated">Discover our tours</a>
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

                  <a href="www.google.com" className="btn-text">Learn More &rarr;</a>
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
                        <i className="fas fa-globe-americas"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">Explore the world</h3>
                            <p className="feature-box__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                            </p>
                        </div>
                    </div>

                    <div className="col-1-of-4">
                        <div className="feature-box">
                          <i class="far fa-compass"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">Meet nature</h3>
                            <p className="feature-box__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                            </p>
                        </div>
                    </div>

                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <i class="fas fa-mountain"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">Find your way</h3>
                             <p className="feature-box__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                            </p>
                        </div>
                    </div>

                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <i class="far fa-heart"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">Live a healthier life</h3>
                            <p className="feature-box__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
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
