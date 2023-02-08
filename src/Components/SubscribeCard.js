import React from 'react'
import '../Styles/SubscribeCard.css'

function SubscribeCard() {
  return (
    <div className='card'>
      <form>
        <div className='instructions'>
          <p>Subscribe to our newsletter for updates and tips & tricks.
          </p>
        </div>
        
        <div className="input-and-button">
          <input type="text" placeholder='   Email' />
          <button>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default SubscribeCard
