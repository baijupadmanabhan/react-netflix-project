import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='title'>Movie name</h1>
            <div className='banner-buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</h1>
        </div>
        <div className='fade_banner'></div>
    </div>
  )
}

export default Banner

