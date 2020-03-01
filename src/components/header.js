import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container } from "./container"

const Header = ({ siteTitle }) => (
  <header>
    <Container>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
