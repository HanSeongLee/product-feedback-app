import React from "react";
import styles from './style.module.scss';

const Form = ({ icon, title, children, ...props }) => {
    return (
        <form className={styles.form}
              style={{
                  '--icon': `url("${icon}")`,
                  'padding-top': icon ? '44px' : '24px',
              }}
              {...props}
        >
            <h1 className={styles.title}>
                {title}
            </h1>
            {children}
        </form>
    );
};

export default Form;
