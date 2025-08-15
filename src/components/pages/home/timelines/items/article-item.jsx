import {Journal} from "../../../../common/icons/index.js";
import {Link} from "react-router-dom"

function ArticleItem({to, articleName}) {
    return (
        <li className={"timeline-2__article"}>

            <Journal className="timeline-2__icon"/>

            <span className="timeline-2-item__content">
                <span>Wrote:</span>
                <Link
                    to={to}
                    className="underline-on-hover"
                >
                    {articleName}
                </Link>
            </span>
        </li>
    )
}

export default ArticleItem;