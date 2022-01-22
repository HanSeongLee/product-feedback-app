import React from "react";
import styles from './style.module.scss';
import Button from "../Button";
import FeedbackReplyContainer from "../../containers/FeedbackReplyContainer";

const Comment = ({ user: { image, name, username }, content, replies, onReply }) => {
    return (
        <article className={styles.comment}>
            <div className={styles.header}>
                <img className={styles.avatar}
                     src={image}
                     alt={name}
                />
                <div className={styles.userInfo}>
                    <div className={styles.name}>
                        {name}
                    </div>
                    <div className={styles.username}>
                        {username}
                    </div>
                </div>
                <div className={styles.replyButtonWrapper}>
                    <Button variants={'link'}
                            onClick={onReply}
                    >
                        Reply
                    </Button>
                </div>
            </div>
            <div className={styles.body}>
                {content}

                {replies && <FeedbackReplyContainer replies={replies} />}
            </div>

        </article>
    );
};

export default Comment;
