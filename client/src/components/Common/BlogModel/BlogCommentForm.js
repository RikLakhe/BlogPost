import React, {Fragment} from "react";
import {Button, Form, Input} from "antd";

import {useAuth0} from "../../Context/Auth0Context/react-auth0-spa";
import {withRouter} from "react-router-dom";

const FormItem = Form.Item;
const {TextArea} = Input;

const BlogCommentForm = props => {
    const {user,loginWithRedirect} = useAuth0();
    const {
        getFieldDecorator,
        validateFields,
    } = props.form;

    const handleSubmit = (e) => {
        e.preventDefault();
        validateFields((err, value) => {
            if (!err && user) {
                let formData = {...value};
                formData.by = user.name;
                formData.by_id = user.user_id;
                props.addBlogComment(formData,props.singleBlog._id)
            }
        })
    };

    return (
        <Form
            onSubmit={handleSubmit}
            className="add-blog-form"
        >
            <FormItem>
                {getFieldDecorator('body', {
                    initialValue: undefined,
                    rules: [{required: true, message: 'Please enter your comment about this story :)'}],
                })(
                    <TextArea
                        type="text"
                        size="large"
                        placeholder="Comment"
                        disabled={!user}
                    />
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

export default Form.create()(withRouter(BlogCommentForm));