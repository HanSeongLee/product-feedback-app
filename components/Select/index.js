import React, {useCallback, useEffect, useState} from "react";
import styles from './style.module.scss';
import cn from 'classnames';
import ArrowDownIcon from '/public/icons/icon-arrow-down.svg';
import ClickAwayListener from "../ClickAwayListener";

const Select = ({ label, options, defaultValue, onChange, variants='normal' }) => {
    const [selectedOption, setSelectedOption] = useState(defaultValue);
    const [open, setOpen] = useState(false);

    const onSelectOpen = useCallback(() => {
        setOpen(!open);
    }, [open]);

    const onSelectOption = useCallback((option) => {
        setSelectedOption(option);

        if (onChange) {
            onChange(option);
        }
    }, [onChange]);

    useEffect(() => {
        if (onChange && defaultValue) {
            onChange(defaultValue);
        }
    }, []);

    return (
        <div className={cn(styles.selectContainer, {
            [styles.open]: open,
            [styles.small]: variants === 'small',
            [styles.normal]: variants === 'normal',
        })}
             onClick={onSelectOpen}
        >
            {label && (
                <label className={styles.label}>
                    {label} :&nbsp;
                </label>
            )}
            <div className={styles.selectWrapper}>
                <span>
                    {selectedOption?.label} <ArrowDownIcon className={styles.arrowDownIcon}/>
                </span>
            </div>
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
            {open && <ClickAwayListener />}
        </div>
    );
};

export default Select;
