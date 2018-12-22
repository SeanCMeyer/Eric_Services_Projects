import React from 'react'



const ProjectView = (props) =>  {
  // const styleView = {
  //   border: '1.5px solid blue',
  //   borderRadius: '4px',
  //   margin: '5px', 
  // }

  const headerStyle = {
    border: '1.5px solid purple',
    borderRadius: '4px',
    margin: '5px',
    display: 'inline-block'
  }

  const imageBlockStyle = {
    border: '1px solid green', 
    borderRadius: '4px',
    margin: '5px', 
  }

  const creatorBlockStyle = { 
    border: '0.5px solid black', 
    borderRadius: '4px', 
    margin: '5px', 
    display: 'inline-block'
  }

  return (
    <div className="ProjectView">
      <div className="CreatorInfoDisplay" style={creatorBlockStyle}>
          <img src={props.currentProject.creator_img} alt="https://cdn2-www.dogtime.com/assets/uploads/gallery/samoyed-dogs-and-puppies/samoyed-dogs-puppies-1.jpg"/>
          <div>
            <span>By {props.currentProject.creator}</span>
          </div>
      </div>
      
      <div className="ProjectHeader" style={headerStyle}>
        <h1>{props.currentProject.name}</h1>
        <h3>{props.currentProject.blurb}</h3>
      </div>

      

      <div className="ProjectImages" style={imageBlockStyle}>
        <div className="full-project-image">
          <img src={props.currentProject.full_img} />
        </div>

        <div className="full-project-caption"> 
          <span>{props.currentProject.category}</span>
          <span>{props.currentProject.location}</span>
        </div>
      </div>
      
      
    </div>
    );
}

export default ProjectView; 

