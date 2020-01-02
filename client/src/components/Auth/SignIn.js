import React, {useContext} from 'react'
import styled from "styled-components";
import {Form, Button, Icon, Input} from 'antd';
import { withRouter, Link } from 'react-router-dom';

import {AuthContext} from "../Context/AppContext/AuthContext";

const FormItem = Form.Item;

const SignIn = props => {
    const {authenticated, loading, signIn} = useContext(AuthContext);
    const {
        getFieldDecorator,
        getFieldError,
        validateFields,
    } = props.form;

    const handleSubmit = (e) => {
        validateFields((err,value)=>{
            signIn(value)
        })
    };

    return (
            <Form
                onSubmit={handleSubmit}
                className="login-form"
            >
                <FormItem
                    // hasFeedback={loading}
                    // validateStatus={getFieldError('userName') ? 'error' : 'validating'}
                >
                    {getFieldDecorator('userName', {
                        initialValue: undefined,
                        rules: [{required: true, message: 'Please input your Username'}],
                    })(
                        <Input
                            type="text"
                            size="large"
                            prefix={<Icon type="user" style={{fontSize: 13}}/>}
                            placeholder="Username"
                        />
                    )}
                </FormItem>
                <FormItem
                    // hasFeedback={loading}
                    // validateStatus={getFieldError('password') ? 'error' : 'validating'}
                >
                    {getFieldDecorator('password', {
                        initialValue: undefined,
                        rules: [
                            {required: true, message: 'Please input your Password'},
                            {}
                            ],

                    })(
                        <Input
                            type="password"
                            size="large"
                            prefix={<Icon type="key" style={{fontSize: 13}}/>}
                            placeholder="Password"
                        />
                    )}
                </FormItem>
                <Button
                    size="large"
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                >
                    Sign In
                </Button>
            </Form>
    )
};

const SignInForm = Form.create()(withRouter(SignIn));

const WrappedSignInForm = props =>{
    const SignMain = styled.div`
        width: 400px;
        margin: auto;
        padding : 20px;
        margin-top: 10vh;
                    border: 1px solid grey;
                    border-radius: 10px;
                    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        
        div{
            height :100%
        }
        
        button{
            width:100%
        }
    `;

    return (
        <SignMain>
            <SignInForm {...props}/>
        </SignMain>
    )
}

export default WrappedSignInForm;