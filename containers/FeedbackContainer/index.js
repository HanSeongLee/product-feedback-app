import React from "react";
import FeedbackCard from "../../components/FeedbackCard";
import Link from 'next/link';
import FeedbackEmpty from "../../components/FeedbackEmpty";

const feedbacks = [
    {
        id: 1,
        title: 'Add tags for solutions',
        description: 'Easier to search for solutions based on a specific stack.',
        categories: ['Enhancement'],
        upvoteCount: 112,
        commentCount: 2,
    },
];

const FeedbackContainer = () => {
    return (
        <>
            {feedbacks?.length > 0 ?
                (
                    <>
                        {feedbacks?.map(({id, ...props}) => (
                            <Link href={`/feedbacks/${id}`}>
                                <a key={id}>
                                    <FeedbackCard {...props} />
                                </a>
                            </Link>
                        ))}
                    </>
                ) : (
                    <FeedbackEmpty/>
                )}
        </>
    );
};

export default FeedbackContainer;
