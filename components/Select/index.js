import React, {useCallback, useState} from "react";
import styles from './style.module.scss';
import cn from 'classnames';
import ArrowDownIcon from '/public/icons/icon-arrow-down.svg';

const Select = ({ label, options, defaultValue }) => {
    const [selectedOption, setSelectedOption] = useState(defaultValue);
    const [open, setOpen] = useState(false);

    const onSelectOpen = useCallback(() => {
        setOpen(!open);
    }, [open]);

    const onSelectOption = useCallback((option) => {
        setSelectedOption(option);
    }, []);

    return (
        <div className={cn(styles.selectContainer, {
            [styles.open]: open,
        })}
        >
            <label className={styles.label}>
                {label} :&nbsp;
            </label>
            <div className={styles.selectWrapper}
                 onClick={onSelectOpen}
            >
                <span>
                    {selectedOption?.label} <ArrowDownIcon className={styles.arrowDownIcon}/>
                </span>
                <ul className={styles.select}>
                    {options?.map((option, index) => (
                        <li className={cn(styles.option, {
                            [styles.selected]: selectedOption.value === option.value,
                        })}
                            key={index}
                            onClick={_ => onSelectOption(option)}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Select;
