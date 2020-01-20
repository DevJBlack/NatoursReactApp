import React from 'react'
import imgLarge from '../img/logo-green-2x.png'

const SectionFooter = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer__logo-box">
          <img src={imgLarge} alt="Full logo" className='footer__logo'/>
        </div>
        <div className="box">
          <div className="box-1-of-2">
            <div className="footer__navigation">
              <ul className="footer__list">
                <li className="footer__item"><a href="localhost:3000" className="footer__link">Company</a></li>
                <li className="footer__item"><a href="localhost:3000" className="footer__link">Contact Us</a></li>
                <li className="footer__item"><a href="localhost:3000" className="footer__link">Carers</a></li>
                <li className="footer__item"><a href="localhost:3000" className="footer__link">Privacy Policy</a></li>
                <li className="footer__item"><a href="localhost:3000" className="footer__link">Terms</a></li>
              </ul>
            </div>
          </div>

          <div className="box-1-of-2">
            <p className="footer__copyright">
              Built by <a href="localhost:3000" className="footer__link">Jonas Schmedtmann</a> for his online course <a href="localhost:3000" className="footer__link">Advanced CSS and Sass</a>. Copyright &copy; by Jonas Schmedtmann, You are 100% allowed to use this webpage for both personal and commercial use, but NOT to claim it as your own design. A credit to the original author, Jonas Schmedtmann, is of course highly appreciated!
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default SectionFooter