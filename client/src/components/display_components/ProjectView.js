import React from "react";
import "./ProjectView.css";
const ProjectView = props => {
  return (
    <div className="ProjectView">
      <div className="CreatorInfoDisplay">
        <img
          src={props.currentProject.creator_img}
          alt="https://cdn2-www.dogtime.com/assets/uploads/gallery/samoyed-dogs-and-puppies/samoyed-dogs-puppies-1.jpg"
        />
        <div>
          <span>By {props.currentProject.creator}</span>
        </div>
      </div>

      <div className="ProjectHeader">
        <h1>{props.currentProject.name}</h1>
        <h3>{props.currentProject.blurb}</h3>
      </div>

      <div className="ProjectImage">
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
};

export default ProjectView;
