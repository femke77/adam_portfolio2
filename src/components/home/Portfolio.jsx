import Project from "../Project";
import projectData from '../../utils/projectdata.json'
function Portfolio() {
  
  return (
    <div>
      <div className="d-flex">
        {projectData.map((project) => (
          <Project project={project} key={"project-" + project.name} />
        ))}
      </div>
    </div>
  );
}
export default Portfolio;
