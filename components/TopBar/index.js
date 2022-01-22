import React from "react";
import styles from './style.module.scss';
import Select from "../Select";
import Button from "../Button";

const sortByOptions = [
    {
        label: 'Most Upvotes',
        value: 0,
    },
    {
        label: 'Least Upvotes',
        value: 1,
    },
    {
        label: 'Most Comments',
        value: 2,
    },
    {
        label: 'Least Comments',
        value: 3,
    },
]

const TopBar = () => {
    return (
        <div className={styles.topBar}>
            <Select label={'Sort by'}
                    options={sortByOptions}
                    defaultValue={sortByOptions[0]}
            />
            <Button variants={'primary'}>
                + Add Feedback
            </Button>
        </div>
    );
};

export default TopBar;
