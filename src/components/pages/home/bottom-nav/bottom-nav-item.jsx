import {Link} from 'react-router-dom';

function BottomNavItem({to="#", text, Icon}) {
    return (
        <li>
            <Link to={to}>
                {Icon && <Icon/>}
                <span>{text}</span>
            </Link>
        </li>
    )
}

export default BottomNavItem;