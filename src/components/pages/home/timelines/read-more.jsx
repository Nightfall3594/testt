import {Link} from "react-router-dom";
import * as Icons from "../../../common/icons/index.js";

export default function ReadMore({to}) {
    return (
        <Link to={to} className="timeline-1__see-more">
            <Icons.ArrowCircle />
            <span> Read more</span>
        </Link>
    )
}
