import React from 'react'
import './cat.css'
import PropTypes from 'prop-types';

const Cat = (props) => {

  return (
    <li className="cat">
      {props.name}
    </li>
  )
}

Cat.propTypes = {
  name: PropTypes.string.isRequired
}

export default Cat