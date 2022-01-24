import React from "react";
import styles from './style.module.scss';
import Feedback from "../Feedback";

const FeedbackCard = (props) => {
    return (
        <article className={styles.card}>
            <Feedback {...props} />
        </article>
    );
};

export default FeedbackCard;
