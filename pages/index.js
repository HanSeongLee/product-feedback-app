import styles from './style.module.scss';
import Header from "../components/Header";
import TopBar from "../components/TopBar";
import FeedbackContainer from "../containers/FeedbackContainer";
import Head from "../components/Head";

export default function Home() {
    return (
        <>
            <Head/>
            <main>
                <Header/>
                <TopBar/>
                <div className={styles.content}>
                    <FeedbackContainer/>
                </div>
            </main>
        </>
    );
}
