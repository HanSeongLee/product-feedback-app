import React, {useCallback} from "react";
import NewFeedbackForm from "../../components/NewFeedbackForm";
import {useRouter} from "next/router";

const NewFeedbackContainer = ({ categories }) => {
    const router = useRouter();

    const onSubmit = useCallback((data) => {
        // TODO: Add onSubmit code
        console.log(data);
    }, []);

    const onCancel = useCallback(() => {
        router.back();
    }, [router]);

    return (
        <NewFeedbackForm categories={categories?.map(({id, name}) => {
            return {
                label: name,
                value: id,
            };
        })}
                         onSubmit={onSubmit}
                         onCancel={onCancel}
        />
    );
};

export default NewFeedbackContainer;
