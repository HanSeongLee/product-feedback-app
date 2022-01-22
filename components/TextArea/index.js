import React, {forwardRef} from "react";
import styles from './style.module.scss'

const TextArea = forwardRef(({ children, ...props } ,ref) => {
    return (
        <textarea className={styles.textarea}
                  {...props}
                  ref={ref}
        >
            {children}
        </textarea>
    );
});

export default TextArea;
