import React from "react";
import styles from './style.module.scss';
import Button from "../Button";

const categories = [
    'All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'
];

const roadmaps = [
    {
        name: 'Planned',
        color: '#F49F85',
        count: 2,
    },
    {
        name: 'In-Progress',
        color: '#AD1FEA',
        count: 3,
    },
    {
        name: 'Live',
        color: '#62BCFA',
        count: 1,
    },
];

const Menu = () => {
    return (
        <div className={styles.menu}>
            <div className={styles.menuContainer}>
                <ul className={styles.categoryList}>
                    {categories?.map((category, index) => (
                        <li className={styles.categoryItem}
                            key={index}
                        >
                            {category}
                        </li>
                    ))}
                </ul>
                <div className={styles.roadmap}>
                    <div className={styles.header}>
                        <h2 className={styles.title}>
                            Roadmap
                        </h2>
                        <div className={styles.viewButton}>
                            <Button variants={'link'}>
                                View
                            </Button>
                        </div>
                    </div>
                    <ul className={styles.roadmapList}>
                        {roadmaps?.map(({name, color, count}, index) => (
                            <li className={styles.roadmapItem}
                                key={index}
                            >
                                <span className={styles.circle}
                                      style={{
                                          '--color': color,
                                      }}
                                ></span>
                                <span className={styles.name}>
                                    {name}
                                </span>
                                <span className={styles.count}>
                                    {count}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Menu;
