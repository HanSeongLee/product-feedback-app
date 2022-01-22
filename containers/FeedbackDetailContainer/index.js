import React, {useCallback} from "react";
import FeedbackCard from "../../components/FeedbackCard";

const FeedbackDetailContainer = (props) => {
    const onUpvote = useCallback((id) => {
        // TODO: Add upvote code
        console.log(`onUpdate(${id})`);
    }, []);

    return (
        <FeedbackCard {...props}
                      onUpvote={onUpvote}
        />
    );
};

export default FeedbackDetailContainer;
