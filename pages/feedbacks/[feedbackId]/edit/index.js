import styles from './style.module.scss';
import Head from "../../../../components/Head";
import GoBackButton from "../../../../components/GoBackButton";
import React from "react";
import FeedbackEditContainer from "../../../../containers/FeedbackEditContainer";
import * as CategoryAPI from "../../../../lib/api/categories";
import * as StatusAPI from "../../../../lib/api/status";

const FeedbackEditPage = ({ feedback, categories, status }) => {
    return (
        <>
            <Head title={'Edit'} />

            <main className={styles.container}>
                <GoBackButton/>

                <FeedbackEditContainer {...feedback}
                                       categories={categories}
                                       statusList={status}
                />
            </main>
        </>
    );
};

export const getServerSideProps = async (context) => {
    const {feedbackId: id} = context.query;
    const categories = await CategoryAPI.findAll();
    const status = await StatusAPI.findAll();

    const feedback = {
        id: 1,
        title: 'Add tags for solutions',
        description: 'Easier to search for solutions based on a specific stack.',
        category: {
            id: 3,
            name: 'Enhancement',
        },
        status: {
            id: 2,
            name: 'Planned'
        },
    };

    return {
        props: {
            feedback,
            categories,
            status,
        },
    };
};

export default FeedbackEditPage;
