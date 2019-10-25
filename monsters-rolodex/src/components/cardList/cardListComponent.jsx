import React from 'react'
import './cardListStyles.css'

export const CardList = (props) => {
  return (
    <div className='cardList'>{props.children}</div>
  )
}
