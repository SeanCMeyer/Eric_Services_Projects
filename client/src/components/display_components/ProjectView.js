import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const ProjectView = props => {
  const styles = {
    ProjectViewStyle: {
      paddingTop: "10px",
      paddingRight: "20px",
      paddingBottom: "10px",
      paddingLeft: "20px"
    },
    CreatorStyle: {
      paddingTop: "2px",
      paddingBottom: "2px",
      paddingLeft: "10px",
      color: "slategray"
    },
    HeaderStyle: {
      padding: "15px"
    },

    ProjectImageStyle: {
      padding: "10px"
    }
  };
  return (
    <div className="ProjectView" style={styles.ProjectViewStyle}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        spacing={5}
      >
        <Grid item>
          <div className="ProjectCreatorImage" style={styles.CreatorStyle}>
            <img
              src={props.currentProject.creator_img}
              alt="https://cdn2-www.dogtime.com/assets/uploads/gallery/samoyed-dogs-and-puppies/samoyed-dogs-puppies-1.jpg"
            />
            <div className="ProjectCreatorName" style={styles.CreatorStyle}>
              <Typography>By {props.currentProject.creator}</Typography>
            </div>
          </div>
        </Grid>

        <div className="ProjectHeader" style={styles.HeaderStyle}>
          <Typography component="h6" variant="h6" gutterBottom>
            {props.currentProject.name}
          </Typography>
          <Typography component="subtitle1" variant="subtitle1" gutterBottom>
            {props.currentProject.blurb}
          </Typography>
        </div>
      </Grid>

      <div className="ProjectImage" style={styles.ProjectImageStyle}>
        <div className="full-project-image">
          <img src={props.currentProject.full_img} />
        </div>
        <Grid container>
          <Grid
            item
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            <div className="full-project-caption">
              <Typography component="body1" variant="body1">
                {props.currentProject.category}
              </Typography>
              <Typography component="body1" variant="body1">
                {props.currentProject.location}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ProjectView;
