
import React from 'react';
import {Link} from 'gatsby-plugin-react-i18next';
import PropTypes from 'prop-types'

const CustomLocalizedLink = (props) => {
  return (
      <Link to={props.goto } className={props.cls}>{props.label}</Link>
  )
};

CustomLocalizedLink.propTypes = {
  goto: PropTypes.string.isRequired,
  cls: PropTypes.string,
  label: PropTypes.string.isRequired,
};

export default CustomLocalizedLink;
