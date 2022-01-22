import React from "react";
import styles from './style.module.scss';
import Form from "../Form";
import Button from "../Button";
import InputField from "../InputField";
import Input from "../Input";
import TextArea from "../TextArea";
import Select from "../Select";
import {Controller, useForm} from 'react-hook-form';

const categories = [
    {
        label: 'Feature',
        value: 'feature',
    },
    {
        label: 'UI',
        value: 'ui',
    },
    {
        label: 'UX',
        value: 'ux',
    },
    {
        label: 'Enhancement',
        value: 'enhancement',
    },
    {
        label: 'Bug',
        value: 'bug',
    },
];

const NewFeedbackForm = ({ onSubmit, onCancel }) => {
    const {register, control, handleSubmit} = useForm();

    return (
        <Form icon={'/icons/icon-new-feedback.svg'}
              title={'Create New Feedback'}
              onSubmit={handleSubmit(onSubmit)}
        >
            <InputField label={'Feedback Title'}
                        description={'Add a short, descriptive headline'}
            >
                <Input {...register('title', { required: true })} />
            </InputField>

            <InputField label={'Category'}
                        description={'Choose a category for your feedback'}
            >
                <Controller name={'category'}
                            control={control}
                            render={({ field }) => (
                                <Select options={categories}
                                        defaultValue={categories[0]}
                                        {...field}
                                />
                            )}
                />
            </InputField>

            <InputField label={'Feedback Detail'}
                        description={'Include any specific comments on what should be improved, added, etc.'}
            >
                <TextArea {...register('detail', { required: true })} />
            </InputField>

            <div className={styles.buttonContainer}>
                <Button variants={'primary'}
                        type={'submit'}
                >
                    Add Feedback
                </Button>
                <Button variants={'secondary'}
                        onClick={onCancel}
                >
                    Cancel
                </Button>
            </div>
        </Form>
    );
};

export default NewFeedbackForm;
