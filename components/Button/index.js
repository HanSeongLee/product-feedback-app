import React from "react";
import styles from './style.module.scss';
import cn from "classnames";

const Button = ({ children, variants, icon, ...props }) => {
    return (
        <button className={cn(styles.button, {
            [styles.primary]: variants === 'primary',
            [styles.secondary]: variants === 'secondary',
            [styles.info]: variants === 'info',
            [styles.danger]: variants === 'danger',
            [styles.link]: variants === 'link',
        })}
                {...props}
        >
            {icon && (
                <span className={styles.icon}>{icon}</span>
            )}
            <span className={styles.children}>
                {children}
            </span>
        </button>
    );
};

export default Button;
