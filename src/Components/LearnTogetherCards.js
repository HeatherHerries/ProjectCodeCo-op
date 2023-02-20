import React from 'react'
import '../Styles/LearnTogetherCards.css'

function LearnTogetherCards(props) {
  return (
    <div className='lt-card'>
      <h1>{ props.title }</h1>
      <img src={ props.img } alt={ props.alt } />
      <p className='lt-card-text'>{ props.text }</p>
    </div>
  )
}

export default LearnTogetherCards
