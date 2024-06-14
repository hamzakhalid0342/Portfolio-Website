import React from 'react'

export default function Footer() {
  return (
    <>

    <div className="footer-container" style={{height: '160px' , backgroundColor: '#25262A'}}>
        <img src='./logo-header.svg' alt='' style={{ width :'148px', height: '48px'}}/>
        <p style={{color: 'white'}}>© 2024 Freelancer - Phlox Elementor WordPress Theme. All rights reserved.</p>
        <div className="icon-container ">
        <div className="twitch-icon mx-3" style={{width:'60px', height: '60px', backgroundColor: '#2D2E32', borderRadius: '10px' , display: 'grid' , placeItems: 'center'}}>
        <i className='bx bxl-twitch'  style={{fontSize: '35px' , color: '#FFAF29'}}></i>
        </div>
        <div className="linkedin-icon mx-3" style={{width:'60px', height: '60px' , backgroundColor: '#2D2E32' , borderRadius: '10px', display: 'grid' , placeItems: 'center'}}>
        <i className='bx bxl-linkedin' style={{fontSize: '35px' , color: '#FFAF29'}}></i>
        </div>
        <div className="insta-icon mx-3" style={{width:'60px', height: '60px' , backgroundColor: '#2D2E32' , borderRadius: '10px', display: 'grid' , placeItems: 'center'}}>
        <i className='bx bxl-instagram' style={{fontSize: '35px' , color: '#FFAF29'}}></i>
        </div>
        <div className="behance-icon mx-3" style={{width:'60px', height: '60px' , backgroundColor: '#2D2E32' , borderRadius: '10px', display: 'grid' , placeItems: 'center'}}>
        <i className='bx bxl-behance' style={{fontSize: '35px' , color: '#FFAF29'}}></i>
        </div>
        </div>
        
        
    </div>
    </>
  )
}
