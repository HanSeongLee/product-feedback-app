import React, {useCallback, useState} from "react";
import styles from './style.module.scss';
import Menu from "../Menu";

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const onMenuOpen = useCallback(() => {
        setOpenMenu(!openMenu);
    }, [openMenu]);

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
                    onClick={onMenuOpen}
            >
                <img src={`/icons/mobile/${openMenu ? 'icon-close' : 'icon-hamburger'}.svg`}
                     alt={'menu'}
                />
            </button>
            {openMenu && <Menu open={openMenu} />}
        </header>
    );
};

export default Header;
