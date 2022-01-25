import React from "react";
import styles from './style.module.scss';

const RoadmapColumn = ({ title, description, children }) => {
    return (
        <section className={styles.column}>
            <h2 className={styles.title}>
                {title}
            </h2>
            <p className={styles.description}>
                {description}
            </p>

            {children}
        </section>
    );
};

export default RoadmapColumn;
