import {Project} from "../../../../common/icons/index.js";
import {Link} from "react-router-dom"

function ProjectItem({to, projectName}) {
   return (
       <li className={"timeline-2__project"}>

           <Project className="timeline-2__icon"/>

           <span className="timeline-2-item__content">
               <span>Added a new project:</span>
               <Link
                   to={to}
                   className="underline-on-hover"
               >
                   {projectName}
               </Link>
           </span>
       </li>
   )
}

export default ProjectItem;