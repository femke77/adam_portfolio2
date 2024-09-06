import Project from './Project';
import projectData from '../../utils/projectdata.json'
import Grid from "@mui/material/Grid"




function Portfolio() {
  
  return (
    <Grid id = "portfolio" container={true} justifyContent="center" spacing={2}>
      {projectData.map(project => (
        <Grid item={true} key={project.name} xs={12} sm={6} md={6} lg={4} xl={4}>
          {/* <Grid item xs={12} sm={6} md={6} lg={6} xl={4}> */}
            <Project project={project}/>
          {/* </Grid> */}
        </Grid>
      ))}
            
            
        </Grid>
  );
}
export default Portfolio;
