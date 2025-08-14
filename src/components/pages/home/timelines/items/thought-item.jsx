import {Thought} from "../../../../common/icons/index.js";

function ThoughtItem({children}) {
    return (
        <li className={"timeline-2__item timeline-2__thoughts"}>
            <Thought className="timeline-2__icon"/>

            <img src="/images/pfp.jpg" alt="Nightfall3594"/>

            <span className="timeline-2-item__content">
                {children}
            </span>
        </li>
    )
}

export default ThoughtItem;