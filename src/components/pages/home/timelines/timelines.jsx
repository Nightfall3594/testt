import './timelines.css'

import DateItem from './items/date-item.jsx'
import Timeline from "./timeline.jsx";
import * as Items from './index.js'

import {motion} from "framer-motion";
import ReadMore from "./read-more.jsx";

const timelineContainerVariants = {
    initial: {opacity: 0, y: "20%"},
    animate: {
        opacity: 1,
        y: "0%",
        transition: {
            duration: 0.75,
        }
    },
}

function Timelines() {

    return(
        <>
            <motion.section
                className="timelines"
            >
                <motion.div
                    className="timeline-1__container"
                    variants={timelineContainerVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{once: true}}
                >

                    {/* First Timeline of Timeline-1 Section */}
                    <Timeline className="timeline-1" title="Recently Updated Notes">
                        <DateItem to="#" time="2 hours ago">
                            Sample text for timeline 1
                        </DateItem>

                        <DateItem to="#" time="yesterday">
                            More sample text for timeline 1
                        </DateItem>

                        <DateItem to="#" time="6 days ago">
                            Even more sample text for timeline 1
                        </DateItem>

                        <DateItem to="#" time="3 months ago">
                            Even more sample text for <br/>timeline 1
                        </DateItem>

                        <DateItem to="#" time="2025 Jan 16">
                            Even more sample text for timeline 1
                        </DateItem>

                    </Timeline>

                    <ReadMore to={"/journal"}/>

                    <hr/>

                    {/* Second Timeline of Timeline-1 Section */}
                    <Timeline className="timeline-1" title="Recently Updated Projects">
                        <DateItem to="#" time="2 hours ago">
                            Sample text for timeline 2
                        </DateItem>
                    </Timeline>

                    <ReadMore to={"/projects"}/>

                </motion.div>

                <motion.div
                    className="timeline-2__container"
                    variants={timelineContainerVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{once: true}}
                >
                    <Timeline title="Recent Updates" className="timeline-2__timeline">

                        <Items.LikeItem to="#" articleName="Article Name here!"/>

                        <Items.ThoughtItem>
                            Have you ever wondered what happens when you sleep?
                        </Items.ThoughtItem>

                        <Items.ArticleItem to="#" articleName="Article Name here!"/>

                        <Items.ProjectItem to="#" projectName="Projects Name here!"/>

                        {/* Some Filler to test for scrollability */}
                        <Items.ProjectItem to="#" projectName="Projects Name here!"/>
                        <Items.ProjectItem to="#" projectName="Projects Name here!"/>
                        <Items.ProjectItem to="#" projectName="Projects Name here!"/>
                        <Items.ProjectItem to="#" projectName="Projects Name here!"/>
                        <Items.ProjectItem to="#" projectName="Projects Name here!"/>
                        <Items.ProjectItem to="#" projectName="Projects Name here!"/>

                        <Items.ThoughtItem>
                            Have you ever wondered what happens when you sleep?
                        </Items.ThoughtItem>

                        {/* For testing multi-line thoughts */}
                        <Items.ThoughtItem>
                            Have you ever wondered what happens when you sleep?<br/><br/><br/><br/><br/><br/><br/>
                            Sometimes, truthfully, I don't know what I'm doing.
                        </Items.ThoughtItem>

                        <Items.CommentItem>
                            This place looks pretty nice, I wonder what it is?
                        </Items.CommentItem>

                    </Timeline>
                </motion.div>
            </motion.section>
        </>
    )
}

export default Timelines