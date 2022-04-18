
import React from 'react';
import {Link} from 'gatsby-plugin-react-i18next';
import PropTypes from 'prop-types'

const CustomLocalizedLink = (props) => {
  return (
      <Link to={props.goto }
            className={props.cls}
            onClick={props.onClick}>
            {props.label}
      </Link>
  )
};

CustomLocalizedLink.propTypes = {
  goto: PropTypes.string.isRequired,
  cls: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default CustomLocalizedLink;
