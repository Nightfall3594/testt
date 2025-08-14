import {Heart} from "../../../../common/icons/index.js";
import {Link} from "react-router-dom"

function LikeItem({to, articleName}){
    return (
        <li className={"timeline-2__item timeline-2__like "}>
            <Heart className="timeline-2__icon"/>
            <span className="timeline-2-item__content">
                Liked the article <Link to={to}>{articleName}</Link>
            </span>
        </li>
    )
}

export default LikeItem;