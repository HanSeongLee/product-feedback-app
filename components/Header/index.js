import React from "react";
import styles from './style.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <div>
                <h1 className={styles.title}>
                    Frontend Mentor
                </h1>
                <p className={styles.description}>
                    Feedback Board
                </p>
            </div>

            <button className={styles.menuButton}
            >
                <img src={'/icons/mobile/icon-hamburger.svg'}
                     alt={'menu'}
                />
            </button>
        </header>
    );
};

export default Header;
