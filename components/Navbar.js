import React from 'react'

export default function Navbar() {
  return (
    <>
        <nav className="navbar" >
          <div className="nav-left">
          <div className="navbar-logo" >
       <img src='./logo-header.svg' alt='' style={{width: "148px", height:"48px"}}/>
       </div>
       <div className="nav-directs" >
          <a className="nav-link active" aria-current="page" href="/" >Home</a>
          <a className="nav-link" href="/">Portfolio</a>
          <a className="nav-link" href="/">Contact</a>
            </div></div>  
    
      <div className="nav-items">
      <div className="behance-icon mx-5" > 
      <i className='bx bx-basketball'></i>
        </div>
        <button className=' btn-contact-me'>Contact Me</button>
      </div>

</nav>
</>
    
  )
}
