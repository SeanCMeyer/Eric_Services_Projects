import React, { Component } from 'react'
import ProjectView from './display_components/ProjectView.js';
import sampleData from './sample/sampleData.json';

class App extends Component {
  constructor(props) { 
    super(props); 
    this.state = {
      projectList: sampleData,
      currentProject: sampleData[0] 
    };
  }
  render() {
    console.log(this.state.currentProject);
    return (
      <div>
        <h1>Welcome to Jumpstart38</h1>
        <ProjectView currentProject={this.state.currentProject}/>
      </div>
    )
  }
}

export default App; 
