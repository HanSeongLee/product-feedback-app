import React, {forwardRef} from "react";
import styles from './style.module.scss';

const Input = forwardRef(({ ...props }, ref) => {
    return (
        <input className={styles.input}
               {...props}
               ref={ref}
        />
    );
});

export default Input;
