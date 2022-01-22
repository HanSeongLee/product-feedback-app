import styles from './style.module.scss';
import Head from "../../components/Head";
import GoBackButton from "../../components/GoBackButton";
import NewFeedbackContainer from "../../containers/NewFeedbackContainer";

const NewFeedback = () => {
    return (
        <>
            <Head title={'New'} />

            <main className={styles.container}>
                <GoBackButton />

                <NewFeedbackContainer />
            </main>
        </>
    );
};

export default NewFeedback;
