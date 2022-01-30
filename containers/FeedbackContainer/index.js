import React from "react";
import FeedbackCard from "../../components/FeedbackCard";
import Link from 'next/link';
import FeedbackEmpty from "../../components/FeedbackEmpty";

const FeedbackContainer = ({ feedbacks }) => {
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
