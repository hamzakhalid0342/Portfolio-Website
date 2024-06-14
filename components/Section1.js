import React from 'react'

export default function Section1() {
  return (
    <>
    <div className='body'>
        <div className='main-section'>
        <div className='hero-page-text'>
        <p className='introducing-text'>-introducing</p>
        <h2 className='Hello-text'>Hello</h2>
        <h1 className='Intro-text'>I'm Hamza Khalid</h1>
        <p className='Main-text'>Since beginning my journey as a freelance designer nearby 7 years ago, 
            I 've done remote work for agencies, consulted for startup, and 
            collaborated with talented people to create digital products.</p>
        <button className=' btn-contact-me'>Contact Me</button>
        </div>
        
        <div className='main-section'>
         
        <div className='hero-img-section'>
        
            <img src="./hero-img.png" alt="heroimage" className='hero-img'/> 
            <img src="./hero-img-bg.svg" alt="heroimage" className='hero-img-bg'/> 
        </div>
        </div>
        </div>
    </div>
    </>
  )
}
