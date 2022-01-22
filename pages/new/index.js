import styles from './style.module.scss';
import Head from "../../components/Head";
import GoBackButton from "../../components/GoBackButton";

const NewFeedback = () => {
    return (
        <>
            <Head title={'New'} />

            <main className={styles.container}>
                <GoBackButton />
            </main>
        </>
    );
};

export default NewFeedback;
