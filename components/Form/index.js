import React from "react";
import styles from './style.module.scss';

const Form = ({ icon, title, children }) => {
    return (
        <form className={styles.form}
              style={{
                  '--icon': `url("${icon}")`,
              }}
        >
            <h1 className={styles.title}>
                {title}
            </h1>
            {children}
        </form>
    );
};

export default Form;
