import React, {useCallback} from "react";
import styles from './style.module.scss';
import Button from "../Button";
import ArrowLeftIcon from '/public/icons/icon-arrow-left.svg';
import {useRouter} from "next/router";

const GoBackButton = () => {
    const router = useRouter();

    const onClick = useCallback(() => {
        router.back();
    }, [router]);

    return (
        <div className={styles.goBackButton}>
            <Button variants={'link'}
                    icon={<ArrowLeftIcon />}
                    onClick={onClick}
            >
                Go Back
            </Button>
        </div>
    );
};

export default GoBackButton;
