
import Projects from './Projects'

export default function Section3() {


  return (
    <div className='section3-container' style={{height: '2400px', backgroundColor:'#2D2E32',width: '100%'}}>
        <Projects projectNumber ='Project 1' title=' Branding Nice Studio' description="The technological revolution is 
    changing aspect of our lives, and the fabric of society itself. It's also changing the way we learn and what we learn. 
    Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative 
    to be an expert at doing everything when you can." imgUrl='./portfolio-1-img.jpeg' orderbox1= '2' orderbox2= '1'/> 
    <Projects projectNumber ='Project 2' title=' Mobile Card App' description="The technological revolution is changing aspect of 
    our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less 
    prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything 
    when you can." imgUrl='./portfolio-2-img.jpg' orderBox1= '1' orderBox2= '2'/> 
    <Projects projectNumber ='Project 3' title=' Restaurant Landing Page' description="The technological revolution is changing 
    aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge 
    is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing 
    everything when you can." imgUrl='./portfolio-3-img.jpg' orderbox1= '2' orderbox2= '1'/>  
    </div>
    
  )
}
