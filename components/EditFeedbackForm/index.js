import React from "react";
import styles from './style.module.scss';
import Form from "../Form";
import InputField from "../InputField";
import Input from "../Input";
import {Controller, useForm} from "react-hook-form";
import Select from "../Select";
import TextArea from "../TextArea";
import Button from "../Button";
import status from '../../data/status.json';

const EditFeedbackForm = ({
                              title, category, status: currentStatus, description,
                              categories, statusList, onSubmit, onCancel,
                              onDelete
                          }) => {
    const {register, control, handleSubmit} = useForm();

    return (
        <Form title={`Editing '${title}'`}
              icon={'/icons/icon-edit-feedback.svg'}
              onSubmit={handleSubmit(onSubmit)}
        >
            <InputField label={'Feedback Title'}
                        description={'Add a short, descriptive headline'}
            >
                <Input {...register('title', {required: true})}
                       defaultValue={title}
                />
            </InputField>

            <InputField label={'Category'}
                        description={'Choose a category for your feedback'}
            >
                <Controller name={'category'}
                            control={control}
                            render={({field}) => (
                                <Select options={categories}
                                        defaultValue={categories.filter((item) => item.value === category.id)[0]}
                                        {...field}
                                />
                            )}
                />
            </InputField>

            <InputField label={'Update Status'}
                        description={'Change feature status'}
            >
                <Controller name={'status'}
                            control={control}
                            render={({field}) => (
                                <Select options={statusList}
                                        defaultValue={statusList.filter((item) => item.value === currentStatus.id)[0]}
                                        {...field}
                                />
                            )}
                />
            </InputField>

            <InputField label={'Feedback Detail'}
                        description={'Include any specific comments on what should be improved, added, etc.'}
            >
                <TextArea {...register('detail', {required: true})}>
                    {description}
                </TextArea>
            </InputField>

            <div className={styles.buttonContainer}>
                <Button variants={'primary'}
                        type={'submit'}
                >
                    Save Changes
                </Button>
                <Button variants={'secondary'}
                        type={'button'}
                        onClick={onCancel}
                >
                    Cancel
                </Button>
                <Button variants={'danger'}
                        type={'button'}
                        onClick={onDelete}
                >
                    Delete
                </Button>
            </div>
        </Form>
    );
};

export default EditFeedbackForm;
