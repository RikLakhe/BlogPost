import React, {Fragment, useContext, useEffect} from 'react'
import {Form, Input, Button} from "antd";
import moment from 'moment'

import {useAuth0} from "../Context/Auth0Context/react-auth0-spa";
import {CommonBoxedMain} from "../../styles/style";
import {withRouter} from "react-router-dom";

const FormItem = Form.Item;

const Profile = props =>{
    const { user } = useAuth0();
console.log(user)
    const {
        getFieldDecorator,
        validateFields,
    } = props.form;

    const handleSubmit = (e) => {
        e.preventDefault();
        validateFields((err, value) => {
            if (!err) {
                console.log('here',value)
            }
        })
    };

    return (
        <Form
            onSubmit={handleSubmit}
            className="add-blog-form"
            hideRequiredMark={true}
        >
            <img src={user.picture} alt="Profile" style={{paddingBottom:'20px'}}/>
            <br />
            Client ID : <strong>{ user && user.clientID}</strong><br/>
            Created On : <strong>{ user && user.created_at && moment(user.created_at).format('YYYY-MM-DD')}</strong>
            <hr />
            <FormItem label={"Email"}>
                {getFieldDecorator('email', {
                    initialValue: user && user.email,
                    rules: [{required: true, message: 'Please enter email'}],
                })(
                    <Input
                        type="email"
                        size="large"
                        placeholder="Email"
                    />
                )}
            </FormItem>
            <FormItem  label={"Name"}>
                {getFieldDecorator('name', {
                    initialValue: user && user.name,
                    rules: [{required: true, message: 'Please enter name'}],
                })(
                    <Input
                        type="text"
                        size="large"
                        placeholder="Name"
                    />
                )}
            </FormItem>
            <FormItem  label={"Nickname"}>
                {getFieldDecorator('nickname', {
                    initialValue: user && user.nickname,
                    rules: [{required: true, message: 'Please enter nickname'}],
                })(
                    <Input
                        type="text"
                        size="large"
                        placeholder="Nickname"
                    />
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
}

const ProfileForm = Form.create()(withRouter(Profile));

const WrappedProfile = props => {
    const { loading, user } = useAuth0();

    if (loading || !user) {
        return <div>Loading...</div>;
    }

    return (
        <CommonBoxedMain>
            <h1>Profile</h1>
            <ProfileForm {...props} />
        </CommonBoxedMain>
    );
};

export default WrappedProfile;