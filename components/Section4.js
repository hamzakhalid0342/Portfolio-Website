import React from 'react'

export default function Section4() {
  return (
    <div className='section4-container' style={{height: '700px', backgroundColor:'#2D2E32'}}>
        <div className="btn-view-all-block">
            <button className="btn-view-all">View All</button>
        </div>
        <div className="achievement-block my-5" style={{display: 'flex' , justifyContent: 'center', gap: '5px', }}>
            <div className="clients" style={{height: '353px', width: '400px', backgroundColor: '#25262A', display:'grid' , placeItems: 'center', borderRadius: '45px  0px 0px 45px'}}>
                <h2 style={{color: '#64F4AB' , fontSize: '87px'}}>56</h2>
                <p style={{color: '#E8E8E8' , fontSize: '24px'}}>Happy Clients</p>
            </div>
            <div className="Completed-Projects"style={{height: '353px', width: '400px', backgroundColor: '#25262A', display:'grid' , placeItems: 'center'}}>
            <h2 style={{color: '#64F4AB' , fontSize: '87px'}}>87</h2>
                <p style={{color: '#E8E8E8' , fontSize: '24px'}}>Projects Done</p>
            </div>
            <div className="Awards" style={{height: '353px', width: '400px', backgroundColor: '#25262A', display:'grid' , placeItems: 'center'}}>
            <h2 style={{color: '#64F4AB' , fontSize: '87px'}}>16</h2>
            <p style={{color: '#E8E8E8' , fontSize: '24px'}}>Awards Winning</p>
            </div>
            <div className="Experience" style={{height: '353px', width: '400px', backgroundColor: '#25262A', display:'grid' , placeItems: 'center' , borderRadius: ' 0px 45px 45px  0px '}}>
            <h2 style={{color: '#64F4AB' , fontSize: '87px'}}>7</h2>
                <p style={{color: '#E8E8E8' , fontSize: '24px'}}>Years Experience</p>
            </div>
        </div>

    </div>
  )
}
