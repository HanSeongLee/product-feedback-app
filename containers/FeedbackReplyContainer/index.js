import React from "react";
import Comment from "../../components/Comment";

const FeedbackReplyContainer = ({ replies }) => {
    return (
        <>
            {replies?.map((reply) => (
                <Comment {...reply}
                         key={reply.id}
                />
            ))}
        </>
    );
};

export default FeedbackReplyContainer;

