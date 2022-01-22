import React, {useCallback} from "react";
import NewFeedbackForm from "../../components/NewFeedbackForm";
import {useRouter} from "next/router";

const NewFeedbackContainer = () => {
    const router = useRouter();

    const onSubmit = useCallback((data) => {
        // TODO: Add onSubmit code
        console.log(data);
    }, []);

    const onCancel = useCallback(() => {
        router.back();
    }, [router]);

    return (
        <NewFeedbackForm onSubmit={onSubmit}
                         onCancel={onCancel}
        />
    );
};

export default NewFeedbackContainer;
