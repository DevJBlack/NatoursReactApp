import React from 'react'

const SectionFeatures = () => {
  return (
    <div>
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
    </div>
  )
}

export default SectionFeatures