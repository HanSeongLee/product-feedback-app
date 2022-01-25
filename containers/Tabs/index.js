import React, {useCallback, useState} from "react";
import styles from './style.module.scss';
import cn from "classnames";

const Tabs = ({ tabs, defaultSelected=0 }) => {
    const [selected, setSelected] = useState(defaultSelected);

    const onTabClick = useCallback((index) => {
        setSelected(index);
    }, []);

    return (
        <>
            <ul className={styles.menu}>
                {tabs?.map(({title, color}, index) => (
                    <li className={cn(styles.menuItem, {
                        [styles.active]: selected === index,
                    })}
                        style={{
                            '--color': color,
                        }}
                        onClick={_ => onTabClick(index)}
                        key={index}
                    >
                        {title}
                    </li>
                ))}
            </ul>
            <ul className={styles.paneContainer}>
                {tabs?.map(({pane}, index) => (
                    <li className={cn(styles.pane, {
                        [styles.active]: selected === index
                    })}
                        key={index}
                    >
                        {pane}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Tabs;
