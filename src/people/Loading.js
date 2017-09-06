import React from 'react'
import './loading.css'

const Loading = (props) => {

  const isLoading = props.isLoading ? 'loading--show' : ''
  const classNames = `loading ${isLoading}`

  return (
    <h4 className={classNames}>Loading...</h4>
  )
}

export default Loading;