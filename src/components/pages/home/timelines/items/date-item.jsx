import {Link} from "react-router-dom";

function DateItem({children, time, to}){
    return (
        <li>
            <Link to={to}>
                <span className="underline-on-hover">{children}</span>
                <span className="timeline__date">{time}</span>
            </Link>
        </li>
    )
}

export default DateItem