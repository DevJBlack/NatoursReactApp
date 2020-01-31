import React from 'react'

const SectionTours = () => {
  return(
    <div style={{ width: '100%'}}>
       <section className="section-tours" id="sectionTour">
              <div className="u-center-text u-margin-bottom-large">
                <h2 className="heading-secondary">
                  Most popular tours
                </h2>
              </div>

              <div className="box">
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
                          <a href="#popup" className="btn btn-white">Book Now</a>
                        </div>
                      </div>
                    </div>
                 </div>
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
                            <a href="#popup" className="btn btn-white">Book Now</a>
                          </div>
                        </div>
                      </div>
                  </div>
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
                            <a href="#popup" className="btn btn-white">Book Now</a>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
              <div className="u-center-text u-margin-top-large">
                <a href="localhost:3000" className="btn btn-green">Discover All Tours</a>
              </div>

          </section>
    </div>
  )
}

export default SectionTours