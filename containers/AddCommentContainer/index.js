import React, {useCallback} from "react";
import AddCommentForm from "../../components/AddCommentForm";

const AddCommentContainer = ({ id }) => {
    const onSubmit = useCallback((data) => {
        // TODO: Add onSubmit code
        console.log(data);
    }, [id]);

    return (
        <AddCommentForm onSubmit={onSubmit}/>
    );
};

export default AddCommentContainer;
