import {Link} from 'react-router-dom';
import {motion} from "framer-motion";

const variants = {
    hidden: {
        opacity: 0,
        y: 30
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "easeOut"
        }
    }
}

function BottomNavItem({to="#", text, Icon}) {
    return (
        <motion.li variants={variants}>
            <Link to={to}>
                {Icon && <Icon/>}
                <span>{text}</span>
            </Link>
        </motion.li>
    )
}

export default BottomNavItem;