import React from 'react'

export default function Card(props) {
  return (
    
    <div className='card-block'>
        <div className="icon-container" style={{display: 'grid', justifyContent:'center', paddingTop: '50px'}}>
        <div className="icon-block" style={{display: 'grid', placeItems:'center'}}>
        <img src={props.imageUrl} alt="Card" className='card-img' style={{height: '40px' }}/>
        </div>
        </div>
        <h2 className='card-title' style={{display: 'grid', placeItems:'center' , fontWeight: 'bold'}}>{props.title}</h2>
        <p className='card-description' style={{width: '300px' , textAlign: 'center' , fontSize: '20px'}}>{props.description}</p>
    </div>
   
  )
}
