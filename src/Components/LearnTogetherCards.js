import React from 'react'
import '../Styles/LearnTogetherCards.css'

function LearnTogetherCards(props) {
  return (
    <div className='card'>
      <h1>{ props.title }</h1>
      <img src={ props.img } alt={ props.alt } />
      <p>{ props.text }</p>
    </div>
  )
}

export default LearnTogetherCards
