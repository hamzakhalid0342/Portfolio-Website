import React from 'react'

export default function Testimonials(props) {
    
  return (
    <>
    <div className='testimonial-container' >
      
    <div className="image-block" style={{width: '500px' , paddingLeft: '200px'}} >
        <img src={props.profileImgUrl} alt="" className="profile-image" style={{width: '470px' , height: '551px', borderRadius: '50px'}} />
        <div className="rectangle-testimonial" style={{width: '470px' , height: '551px', backgroundColor: 'white', opacity: '8%', borderRadius: '50px'}}></div>
    </div>
    <div className="Text-block" style={{width: '1000px' , paddingLeft: '300px', paddingTop: '80px' }}>
    <i className='bx bxs-quote-alt-left' style={{fontSize: '70px', color: '#64F4AB'}}></i>

        <p className="testimonial" style={{color: 'white', width: '600px' , fontSize: '28px', fontWeight: "600"}}>{props.testimonial}</p>
        <h4 style={{color: '#64F4AB', fontSize: '25' , fontWeight: '500' }}>{props.name}</h4>
        <p style={{color: 'white'}}>{props.designation}</p>
      
        <div style={{display: 'flex' , gap: '10px'}}>
        <button className='previous-test' ></button>
        <button className='next-test'></button>
        </div>
        
    </div>
        
    </div>
    </>
    
  )
}
