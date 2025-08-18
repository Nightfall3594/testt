import './bottom-nav.css'

import * as Icons from "../../../common/icons/index.js";
import {default as BottomNavItem} from "./bottom-nav-item.jsx"
import IconButton from "./icon-button.jsx";
import CommentBox from "./comment-box.jsx"
import {useState} from "react";


function BottomNav({className=""}) {

    const [isCommentBoxVisible, setCommentBoxVisible] = useState(false);

    return (
        <section className={"bottom-nav " + className}>

            <h1 className="bottom-nav__title">Why don't you take a look?</h1>

            <ul className="bottom-nav__list">
                <BottomNavItem
                    to="/journal"
                    Icon={Icons.Journal}
                    text="What I've been writing"
                />

                <BottomNavItem
                    to="/thoughts"
                    Icon={Icons.Thought}
                    text="What I've been up to"
                />

                <BottomNavItem
                    to="/projects"
                    Icon={Icons.Project}
                    text="What I'm working on"
                />

                <BottomNavItem
                    to="/other"
                    Icon={Icons.Other}
                    text="About the site"
                />
            </ul>

            <div className="bottom-nav__buttons">
                <IconButton
                    className="bottom-nav__like"
                    Icon={Icons.HeartFilled}
                    text="Like this page"
                />

                <IconButton
                    className="bottom-nav__comment"
                    Icon={Icons.MessageFilled}
                    onClick={() =>{setCommentBoxVisible(true)}}
                    text="Leave a message"
                />
            </div>

            <CommentBox isVisible={isCommentBoxVisible} onClose={() => setCommentBoxVisible(false)} />
        </section>
    )
}

export default BottomNav;
