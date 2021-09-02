import React from 'react'
import PropTypes from 'prop-types'

import '@styles/Footer.scss'

const Footer = ({ text }) => (
  <footer className="footer">
    <p className="footer__text">{text}</p>
  </footer>
)

Footer.propTypes = {
  text: PropTypes.string
}

export default Footer
