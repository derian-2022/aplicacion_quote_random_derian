import React from 'react'

const ButtonBox = ({colorRandom, handleClick}) => {
  return (
    <button style={{background: colorRandom}}className='box__btn' onClick ={handleClick}>&gt;</button>
  )
}

export default ButtonBox