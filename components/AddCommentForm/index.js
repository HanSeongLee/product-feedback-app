import React from "react";
import styles from './style.module.scss';
import Form from "../Form";
import {useForm} from "react-hook-form";
import Button from "../Button";
import TextArea from "../TextArea";

const AddCommentForm = ({ onSubmit }) => {
    const {register, handleSubmit} = useForm();

    return (
        <Form title={'Add Comment'}
              onSubmit={handleSubmit(onSubmit)}
        >
            <TextArea placeholder={'Type your comment here'}
                      {...register('comment', {required: true})} />
            <div className={styles.footer}>
                <span className={styles.charactersLeft}>
                    250 Characters left
                </span>
                <Button variants={'primary'}
                        type={'submit'}
                >
                    Post Comment
                </Button>
            </div>
        </Form>
    );
};

export default AddCommentForm;
