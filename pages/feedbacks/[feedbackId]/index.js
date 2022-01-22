import Head from "../../../components/Head";
import GoBackButton from "../../../components/GoBackButton";
import styles from "./style.module.scss";
import React from "react";
import FeedbackCommentContainer from "../../../containers/FeedbackCommentContainer";
import FeedbackDetailContainer from "../../../containers/FeedbackDetailContainer";
import Button from "../../../components/Button";
import AddCommentContainer from "../../../containers/AddCommentContainer";
import Link from 'next/link';

const FeedbackDetailPage = ({ id, feedback }) => {
    return (
        <>
            <Head title={feedback?.title}/>

            <main className={styles.container}>
                <div className={styles.menu}>
                    <GoBackButton/>

                    <Link href={`/feedbacks/${id}/edit`}>
                        <a>
                            <Button variants={'info'}>
                                Edit Feedback
                            </Button>
                        </a>
                    </Link>
                </div>

                <FeedbackDetailContainer {...feedback} />

                <section className={styles.commentContainer}>
                    <h2 className={styles.title}>
                        {feedback?.commentCount} Comments
                    </h2>
                    <FeedbackCommentContainer comments={feedback?.comments}/>
                </section>
                <AddCommentContainer id={id}/>
            </main>
        </>
    );
};

export const getServerSideProps = (context) => {
    const {feedbackId: id} = context.query;

    const feedback = {
        id: 1,
        title: 'Add tags for solutions',
        description: 'Easier to search for solutions based on a specific stack.',
        categories: ['Enhancement'],
        upvoteCount: 112,
        commentCount: 4,
        comments: [
            {
                "id": 3,
                "content": "Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.",
                "user": {
                    "image": "/img/user-images/image-elijah.jpg",
                    "name": "Elijah Moss",
                    "username": "hexagon.bestagon"
                },
            },
            {
                "id": 4,
                "content": "Second this! I do a lot of late night coding and reading. Adding a dark theme can be great for preventing eye strain and the headaches that result. It’s also quite a trend with modern apps and  apparently saves battery life.",
                "user": {
                    "image": "/img/user-images/image-james.jpg",
                    "name": "James Skinner",
                    "username": "hummingbird1"
                },
                "replies": [
                    {
                        "id": 5,
                        "content": "While waiting for dark mode, there are browser extensions that will also do the job. Search for 'dark theme' followed by your browser. There might be a need to turn off the extension for sites with naturally black backgrounds though.",
                        "replyingTo": "hummingbird1",
                        "user": {
                            "image": "/img/user-images/image-anne.jpg",
                            "name": "Anne Valentine",
                            "username": "annev1990"
                        }
                    },
                    {
                        "id": 6,
                        "content": "Good point! Using any kind of style extension is great and can be highly customizable, like the ability to change contrast and brightness. I'd prefer not to use one of such extensions, however, for security and privacy reasons.",
                        "replyingTo": "annev1990",
                        "user": {
                            "image": "/img/user-images/image-ryan.jpg",
                            "name": "Ryan Welles",
                            "username": "voyager.344"
                        }
                    }
                ]
            },
        ],
    };

    return {
        props: {
            id,
            feedback,
        }
    };
};

export default FeedbackDetailPage;
