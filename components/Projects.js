import React from "react";

export default function Projects(props) {
  return (
    <>
    <div className="project-block">
        <div className="project-text my-5" style={{order: props.orderBox1 }}>
            <p className="introducing-text">{props.projectNumber}</p>
            <h2
              className="Hello-text"
              style={{ width: "500px", fontSize: "38px" }}
            >
              {props.title}
            </h2>
            <p className="Main-text">{props.description}</p>
            <div className="read-box ">
              <a href="/" style={{ color: "#FECD1A" , textDecoration:'none' }}>  
              <img src="./arrow.svg.svg" alt="arrow" />
              <a className="read-more mx-4" href="/" style={{ color: "#FECD1A" , textDecoration:'none' }}>
                Read More
              </a>
              </a>
            
            </div>
            </div>
        <div className="project-card mx-5" >
              <img
              className="project-image"
                src={props.imgUrl}
                alt=""
                style={{
                  height: "532px",
                  width: "650px",
                  borderRadius: "45px",
                  order: props.orderBox2
                }}
              />
              <div
                className="porject-rectangle" 
                style={{ height: "532px", width: "650px", backgroundColor: 'white ', opacity: '20%', borderRadius: '40px' , transform: 'rotate(-10deg)'} }
              ></div>
            </div>
          
        </div>
    </>
  );
}
