import styles from './style.module.scss';
import Head from "../../../../components/Head";
import GoBackButton from "../../../../components/GoBackButton";
import React from "react";
import FeedbackEditContainer from "../../../../containers/FeedbackEditContainer";
import {findAll} from "../../../../lib/api/categories";

const FeedbackEditPage = ({ feedback, categories }) => {
    return (
        <>
            <Head title={'Edit'} />

            <main className={styles.container}>
                <GoBackButton/>

                <FeedbackEditContainer {...feedback}
                                       categories={categories}
                />
            </main>
        </>
    );
};

export const getServerSideProps = async (context) => {
    const {feedbackId: id} = context.query;
    const categories = await findAll();

    const feedback = {
        id: 1,
        title: 'Add tags for solutions',
        description: 'Easier to search for solutions based on a specific stack.',
        category: {
            id: 1,
            name: 'Enhancement',
        },
        status: {
            id: 1,
            name: 'Planned'
        },
    };

    return {
        props: {
            feedback,
            categories,
        },
    };
};

export default FeedbackEditPage;
