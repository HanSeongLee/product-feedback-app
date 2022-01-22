import styles from './style.module.scss';
import Head from "../../../components/Head";
import GoBackButton from "../../../components/GoBackButton";
import NewFeedbackContainer from "../../../containers/NewFeedbackContainer";
import {findAll} from "../../../lib/api/categories";

const NewFeedback = ({ categories }) => {
    return (
        <>
            <Head title={'New'} />

            <main className={styles.container}>
                <GoBackButton />

                <NewFeedbackContainer categories={categories} />
            </main>
        </>
    );
};

export const getServerSideProps = async (context) => {
    const categories = await findAll();

    return {
        props: {
            categories,
        }
    };
};

export default NewFeedback;
