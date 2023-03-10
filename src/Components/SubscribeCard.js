import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'
import '../Styles/SubscribeCard.css'




function SubscribeCard() {
  const schema = yup.object().shape({
    email: yup.string().email('Please provide a valid email address.').required('Please provide an email.')
  })
  
  
  const [success, setSuccess] = useState('')
  const { register, handleSubmit, formState: {errors}, reset} = useForm({
    resolver: yupResolver(schema)
  });

  
  const onSubmit = (data) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data).toString(),
      })
      .then(() => {
        setSuccess(`Thank you for Subscribing!`)
    reset();

      })
      .catch(error => alert(error))
    console.log(data);

  
  }
  return (
    <div className='subscribe-card'>
      <form 
        onSubmit={handleSubmit(onSubmit)}
        name="subscibe"
        method="post"
        >
        
        <input 
          type="hidden" 
          name="form-name" value="subscribe" 
        />

        <div className='instructions'>
          <p className='instructions-text'>Subscribe to our newsletter for updates and tips & tricks.
          </p>
          <p className="success-message">{success}</p>
        </div>
        
        <div className="input-and-button">
          <input
          className="email-input" 
          type="email"
          placeholder='   Email'
          {...register('email')}
          />

          <button
          className="subscribe-button"
          type="submit"
          >Submit</button>

          
          <p className='error-message'>{errors.email?.message}</p>
          
        </div>
      </form>
    </div>
  )
}

export default SubscribeCard
