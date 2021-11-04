import React from 'react'
import PropTypes from 'prop-types'

import '@styles/Footer.scss'

export default function Footer({ text }) {
  return (
    <footer className="footer">
      <p className="footer__text">{text}</p>
    </footer>
  )
}

Footer.propTypes = {
  text: PropTypes.string
}
