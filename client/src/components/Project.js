import React, { Component } from "react";
import ProjectView from "./display_components/ProjectView.js";
import sampleData from "./sample/sampleData.json";
import axios from "axios";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectList: [],
      currentProject: sampleData[1]
    };
  }

  componentDidMount() {
    // this.props.id is not passed down and undefined causes 500 internal error
    axios
      .get(
        "http://" + window.location.hostname + ":3000/projects/" + this.props.id
      )
      .then(project => {
        this.setState({
          currentProject: project.data
        });
      })
      .catch(error => {
        console.log("Error retrieving projects");
      });
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      axios
        .get(
          "http://" +
            window.location.hostname +
            ":3000/projects/" +
            this.props.id
        )
        .then(project => {
          this.setState({
            currentProject: project.data
          });
        })
        .catch(error => {
          console.log("Error retrieving projects");
        });
    }
  }

  render() {
    // console.log("AFTER RENDER", this.state.projectList[1]);
    return (
      <div>
        <h1>Project View Services</h1>
        <h2>Testing connection in progress</h2>
        <ProjectView currentProject={this.state.currentProject} />
      </div>
    );
  }
}

export default Project;
