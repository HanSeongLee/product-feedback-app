import React, {useCallback} from 'react';
import EditFeedbackForm from "../../components/EditFeedbackForm";
import {useRouter} from "next/router";

const FeedbackEditContainer = ({categories, ...props}) => {
    const router = useRouter();

    const onSubmit = useCallback((data) => {
        // TODO: Add onSubmit code
        console.log('onSubmit', data);
    }, []);

    const onCancel = useCallback(() => {
        router.back();
    }, []);

    const onDelete = useCallback(() => {
        // TODO: Add onDelete code
        console.log('onDelete');
    }, []);

    return (
        <EditFeedbackForm {...props}
                          categories={categories?.map(({id, name}) => {
                              return {
                                  label: name,
                                  value: id,
                              };
                          })}
                          onSubmit={onSubmit}
                          onCancel={onCancel}
                          onDelete={onDelete}
        />
    );
};

export default FeedbackEditContainer;
