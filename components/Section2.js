import React from "react";
import Card from "./Card";

export default function Section2() {
  return (
    <>
      <div className="section2-wrapper" style={{height: '1100px', backgroundColor:'#2D2E32'}}>
        <div className="cards-container" style={{width: '1100px' , display: 'flex'}}>
        <div className="cards-container-col1" style={{display: 'inline', padding: '40px 0px 40px 40px', gap: '40px'}} >
          <Card title="product design" description="The technological revolution is changing aspect " imageUrl="./Product-design.svg"/>
          <Card title="UI Design" description="The technological revolution is changing aspect" imageUrl="./Ui-design.svg"/>
        </div>
        <div className="cards-container-col2" style={{display: 'inline', padding: '80px 0px 40px 40px', gap: '40px'}}>
        <Card title="Logo Design" description="The technological revolution is changing aspect" imageUrl="./Logo-design.svg"/>
        
        <Card title="Icon Design" description="The technological revolution is changing aspect" imageUrl="./Icon-design.svg"/>
          </div>
        </div>
        <div className="skills-block">
        <p className='introducing-text'>-My Skills</p>
        <h2 className='Hello-text' style={{width: '500px', fontSize: '38px'}}>Why Hire Me For Next Project?</h2>
        <p className='Main-text'>The technological revolution is changing aspect of our lives, 
        and the fabric of society itself. it's also changing the way we learn and what we learn. 
        Factual knowledge is less prized when everything you ever need to know can be found on your phone. 
        There's no imperative to be an expert at doing everything when you can.</p>
        <button className=' btn-contact-me' >Download CV</button>
        </div>
        </div>
    </>
  );
}
