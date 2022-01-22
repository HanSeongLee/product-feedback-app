import React from "react";
import styles from './style.module.scss';
import cn from "classnames";

const Button = ({ children, variants, props }) => {
    return (
        <button className={cn(styles.button, {
            [styles.primary]: variants === 'primary',
        })}
                {...props}
        >
            {children}
        </button>
    );
};

export default Button;
