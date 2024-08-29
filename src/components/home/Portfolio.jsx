import Project from './Project';
import projectData from '../../utils/projectdata.json'
import Grid from "@mui/material/Grid"




function Portfolio() {
  
  return (
    <Grid container={true} justifyContent="center" spacing={2}>
      {projectData.map(project => (
        <Grid item={true} key={project.name} lg={3}>
          <Project project={project}/>
        </Grid>
      ))}
            
            
        </Grid>
  );
}
export default Portfolio;
