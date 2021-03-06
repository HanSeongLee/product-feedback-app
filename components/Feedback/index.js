import React from "react";
import styles from './style.module.scss';
import ArrowUpIcon from "../../public/icons/icon-arrow-up.svg";
import CommentIcon from "../../public/icons/icon-comments.svg";

const Feedback = ({ id, title, description, categories,
                      upvotes: upvoteCount, _count: { comments: commentCount }, onUpvote }) => {
    return (
        <div className={styles.feedback}>
            <div className={styles.body}>
                <h3 className={styles.title}>
                    {title}
                </h3>
                <p className={styles.description}>
                    {description}
                </p>
                <div className={styles.categoryContainer}>
                    {categories?.map((category, index) => (
                        <span className={styles.categoryItem}
                              key={index}
                        >
                            {category}
                        </span>
                    ))}
                </div>
            </div>
            <div className={styles.footer}>
                <button className={styles.upvoteButton}
                        onClick={_ => onUpvote(id)}
                >
                    <ArrowUpIcon className={styles.arrowUpIcon} /> {upvoteCount}
                </button>
                <span className={styles.commentCount}>
                    <CommentIcon className={styles.commentIcon}/> {commentCount}
                </span>
            </div>
        </div>
    );
};

export default Feedback;
