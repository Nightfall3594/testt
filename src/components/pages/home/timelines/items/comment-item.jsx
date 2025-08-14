import {Message} from "../../../../common/icons/index.js";

function CommentItem({children}) {
    return (
        <li className={"timeline-2__comment"}>

            <Message className="timeline-2__icon"/>

            <div className="timeline-2-comment__container">

                <span className="timeline-2-comment__info">
                    Someone commented on your article!
                </span>

                <span className="timeline-2-item__content">
                    {children}
                </span>

            </div>
        </li>
    )
}

export default CommentItem;