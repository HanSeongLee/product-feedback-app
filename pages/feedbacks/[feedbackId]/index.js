import Head from "../../../components/Head";
import GoBackButton from "../../../components/GoBackButton";
import styles from "./style.module.scss";
import React from "react";
import FeedbackCommentContainer from "../../../containers/FeedbackCommentContainer";
import FeedbackDetailContainer from "../../../containers/FeedbackDetailContainer";
import Button from "../../../components/Button";
import AddCommentContainer from "../../../containers/AddCommentContainer";
import Link from 'next/link';
import * as ProductRequests from "../../../lib/api/product-requests";

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

export const getServerSideProps = async (context) => {
    const {feedbackId: id} = context.query;
    const feedback = await ProductRequests.findOne(Number(id), {
        include: {
            comments: {
                where: {
                    replyingTo: null,
                },
                include: {
                    replies: {
                        include: {
                            user: true,
                        }
                    },
                    user: true,
                }
            },
            _count: {
                select: {
                    comments: true,
                }
            },
        }
    });

    return {
        props: {
            id,
            feedback,
        }
    };
};

export default FeedbackDetailPage;
