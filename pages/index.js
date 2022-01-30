import styles from './style.module.scss';
import Header from "../components/Header";
import TopBar from "../components/TopBar";
import FeedbackContainer from "../containers/FeedbackContainer";
import Head from "../components/Head";
import * as ProductRequests from "../lib/api/product-requests";

export default function Home({ productRequests }) {
    return (
        <>
            <Head/>
            <main>
                <Header/>
                <TopBar/>
                <div className={styles.content}>
                    <FeedbackContainer feedbacks={productRequests}/>
                </div>
            </main>
        </>
    );
}

export const getServerSideProps = async (context) => {
    const productRequests = await ProductRequests.findAll({
        include: {
            _count: {
                select: {
                    comments: true,
                }
            }
        },
        orderBy: [
            {
                upvotes: 'desc'
            },
            {
                id: 'asc',
            },
        ]
    });

    return {
        props: {
            productRequests,
        }
    };
};
