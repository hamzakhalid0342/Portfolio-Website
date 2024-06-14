import React from 'react'

export default function Worktogether() {
  return (
    <>
    <div className="word-block">
    <div className='work-container'>
    <div className="line-block" style={{display: 'grid' , placeItems: 'center', paddingTop:'70px'}}>
        <div className="line my-2" style={{height: '2px' , width: '70px' , backgroundColor: '#64F4AB'}}>
        </div>
        <img src='./Intersection-1.svg' alt='' style={{ position: 'absolute', top: '0px' , left: '0px'}}/>
        
        <img src='./Intersection-2.svg' alt=''  style={{ position: 'absolute', bottom: '0px' , right: '0px'}}/>
        
        <h1 className="my-3"style={{color: 'white' , fontWeight:'600'}}>Lets Work Together</h1>
        <p style={{color: 'white', width: '700px' , textAlign: 'center', fontSize: '18px'}}>The technological revolution is changing aspect of our lives, and the fabric of 
            society itself. it's also changing the way we learn and what we learn</p>
        <button className=' btn-contact-me'>Contact Me</button>
        
    </div>
        </div>
        
    </div>
    </>
    
  )
}
