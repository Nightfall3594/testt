import {CloseIcon} from "../../../common/icons/index.js";
import Overlay from "../../../common/overlays/overlay.jsx";
import {AnimatePresence} from "framer-motion";

import {motion} from "framer-motion";

const commentBoxVariants = {
    hidden: {
        opacity: 0,
        transition: {
            duration: 0.2
        }
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.2
        }
    }
}

function CommentBox({isVisible, onClose}){
    return (
        <AnimatePresence>
            {isVisible &&
                <>
                    <Overlay/>
                    <motion.div
                        className="bottom-nav__leave-message "
                        variants={commentBoxVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        <div className="bottom-nav-title__container">
                            <h1 className="bottom-nav-message__title">Leave a message!</h1>
                            <button className="bottom-nav-message__close" onClick={onClose}>
                                <CloseIcon className="bottom-nav-close__icon"/>
                            </button>
                        </div>

                        <hr/>

                        <p className="bottom-nav-message__pretext">Let me know your thoughts!</p>
                        <form action="#" method="post">
                            <textarea name="comment" id="comment" placeholder="What do you think?"></textarea>
                            <button type="submit" className="bottom-nav-message__send">Send</button>
                        </form>

                    </motion.div>
                </>
            }
        </AnimatePresence>
    )
}

export default CommentBox;