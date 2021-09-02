import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ text }) => (
  <header>
    <h1>{text}</h1>
  </header>
)

Header.propTypes = {
  text: PropTypes.string.isRequired
}

export default Header
