import React from "react";
import Comment from "../../components/Comment";

const FeedbackCommentContainer = ({ comments }) => {
    return (
        <>
            {comments?.map((comment) => (
                <Comment {...comment}
                         key={comment.id}
                />
            ))}
        </>
    );
};

export default FeedbackCommentContainer;
