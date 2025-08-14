import {Project} from "../../../../common/icons/index.js";
import {Link} from "react-router-dom"

function ProjectItem({to, projectName}) {
   return (
       <li className={"timeline-2__item timeline-2__project"}>

           <Project className="timeline-2__icon"/>

           <span className="timeline-2-item__content">
               Added a new project: <Link to={to}>{projectName}</Link>
           </span>
       </li>
   )
}

export default ProjectItem;