import React from "react";
import styles from './style.module.scss';
import Button from "../Button";
import Link from 'next/link';

const FeedbackEmpty = () => {
    return (
        <section className={styles.card}>
            <img className={styles.emptyImage}
                 src={'/img/illustration-empty.svg'}
                 alt={'empty'}
            />
            <h2 className={styles.title}>
                There is no feedback yet.
            </h2>
            <p className={styles.description}>
                Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our
                app.
            </p>
            <Link href={'/new'}>
                <a>
                    <Button variants={'primary'}>
                        + Add Feedback
                    </Button>
                </a>
            </Link>
        </section>
    );
};

export default FeedbackEmpty;
