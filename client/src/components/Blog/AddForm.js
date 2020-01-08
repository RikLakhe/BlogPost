import React, {useEffect} from "react";
import {Form, Input, Button, Modal} from 'antd'
import {withRouter} from "react-router-dom";

import {CommonBoxedMain} from '../../styles/style'
import {useAuth0} from "../Context/Auth0Context/react-auth0-spa";

const FormItem = Form.Item;
const {TextArea} = Input;

const AddForm = props => {
    const {user,loginWithRedirect} = useAuth0();

    const {
        blogError,
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
                formData.author = user.name;
                formData.author_id = user.user_id;
                addBlog(formData).then(res=>props.history.push("/"))
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
            <Modal
                title={"For BlogPost Members only!"}
                visible={!user}
                footer={null}
                closable={false}
                onCancel={()=> props.history.push('/')}
            >
                <p>Be a Member today! We all want to know your story...</p>
                <Button type={"primary"} onClick={() => loginWithRedirect({})} block>Sign In</Button>
            </Modal>
            <FormItem>
                {getFieldDecorator('title', {
                    initialValue: undefined,
                    rules: [{required: true, message: 'Please enter title of your story'}],
                })(
                    <Input
                        type="text"
                        size="large"
                        placeholder="Title"
                        disabled={!user}
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
                        disabled={!user}
                        className='form-control'
                        autoComplete='off'
                    />,
                )}
            </FormItem>
            <Button
                size="large"
                type="primary"
                disabled={!user}
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