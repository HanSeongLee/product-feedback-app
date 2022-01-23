import React from "react";
import styles from './style.module.scss';
import GoBackButton from "../GoBackButton";
import Button from "../Button";
import Link from 'next/link';

const TitledHeader = ({ title }) => {
    return (
        <header className={styles.header}>
            <div className={styles.leftSide}>
                <GoBackButton/>
                <h1 className={styles.title}>
                    {title}
                </h1>
            </div>
            <Link href={'/feedbacks/new'}>
                <a>
                    <Button variants={'primary'}>
                        + Add Feedback
                    </Button>
                </a>
            </Link>
        </header>
    );
};

export default TitledHeader;
