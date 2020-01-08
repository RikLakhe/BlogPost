import React from "react";
import {Button, Form, Input} from "antd";

import {useAuth0} from "../../Context/Auth0Context/react-auth0-spa";
import {withRouter} from "react-router-dom";

const FormItem = Form.Item;
const {TextArea} = Input;

const BlogCommentReplyForm = props => {
    const {user} = useAuth0();

    const {
        getFieldDecorator,
        validateFields,
    } = props.form;

    const handleSubmit = (e) => {
        e.preventDefault();
        validateFields((err, value) => {
            if (!err && user && props.commentId) {
                let formData = {...value};
                formData.by = user.name;
                formData.by_id = user.user_id;
                props.addBlogCommentReply(formData,props.singleBlog._id,props.commentId);
            }
        })
    };

    return (
        <Form
            onSubmit={handleSubmit}
            className="blog-comment-reply-form"
        >
            <FormItem>
                {getFieldDecorator('body', {
                    initialValue: undefined,
                    rules: [{required: true, message: 'Please enter your reply to this comment about this story :)'}],
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

export default Form.create()(withRouter(BlogCommentReplyForm));