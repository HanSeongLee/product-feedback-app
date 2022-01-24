import React from 'react';
import styles from './style.module.scss';
import Feedback from "../Feedback";

const RoadmapCard = ({ ...props }) => {
    return (
        <div className={styles.card}>
            <div className={styles.statusBar}>
                <span className={styles.circle}></span>
                <span className={styles.statusName}>In Progress</span>
            </div>
            <Feedback {...props} />
        </div>
    );
};

export default RoadmapCard;
