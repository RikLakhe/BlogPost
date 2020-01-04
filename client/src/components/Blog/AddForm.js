import React, {Fragment, useEffect} from "react";
import {Form, Input, Button, Icon} from 'antd'
import {withRouter} from "react-router-dom";

import {CommonBoxedMain} from '../../styles/style'

const FormItem = Form.Item;
const {TextArea} = Input;

const AddForm = props => {
    const {
        blog,
        blogError,
        blogLoading,
        addBlog,
        cleanBlogRequest,
        cleanSingleBlogRequest,
    } = props;

    const {
        getFieldDecorator,
        validateFields,
    } = props.form;

    const handleSubmit = (e) => {
        e.preventDefault();
        validateFields((err, value) => {
            if (!err) {
                let formData = {...value};
                formData.author = "rikesh authhh";
                addBlog(formData);
            }
        })
    };

    useEffect(() => {
        cleanBlogRequest();
        cleanSingleBlogRequest();

        return (() => {
            cleanBlogRequest();
            cleanSingleBlogRequest();
        })
    }, [])

    return (
        <Form
            onSubmit={handleSubmit}
            className="add-blog-form"
        >
            <FormItem>
                {getFieldDecorator('title', {
                    initialValue: undefined,
                    rules: [{required: true, message: 'Please enter title of your story'}],
                })(
                    <Input
                        type="text"
                        size="large"
                        placeholder="Title"
                    />
                )}
            </FormItem>
            <FormItem>
                {getFieldDecorator('body', {
                    initialValue: undefined,
                    rules: [
                        {required: true, message: 'Please enter your story', whiteSpace: true},
                    ],

                })(
                    <TextArea
                        type="text"
                        size="large"
                        placeholder={"Story"}
                        rows={7}
                        className='form-control'
                        autoComplete='off'
                    />,
                )}
            </FormItem>
            <Button
                size="large"
                type="primary"
                htmlType="submit"
            >
                Submit
            </Button>
        </Form>
    )
};

const AddNewBlogForm = Form.create()(withRouter(AddForm));

const WrappedAddNewBlog = props => {
    return (
        <CommonBoxedMain>
            <h1>Tell us your story...</h1>
            <AddNewBlogForm {...props} />
        </CommonBoxedMain>
    )
};

export default WrappedAddNewBlog;