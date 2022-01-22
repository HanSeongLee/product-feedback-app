import React from "react";
import styles from './style.module.scss';

const InputField = ({ label, description, children }) => {
    return (
        <div className={styles.inputField}>
            <label className={styles.label}>
                {label}
                <p className={styles.description}>
                    {description}
                </p>
                {children}
            </label>
        </div>
    );
};

export default InputField;
