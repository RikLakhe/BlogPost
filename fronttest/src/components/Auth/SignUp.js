import React, {useContext} from 'react'
import styled from "styled-components";
import {Form, Button, Icon, Input} from 'antd';

import {AuthContext} from "../Context/AppContext/AuthContext";

const FormItem = Form.Item;

const SignUp = props => {
    const {authenticated, loading, login} = useContext(AuthContext);
    const {
        getFieldDecorator,
        getFieldError,
        validateFields
    } = props.form;

    const SignMain = styled.div`
        width: 400px;
        margin: auto;
        padding : 20px;
        margin-top: 10vh;
        overflow: hidden;
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

    const handleSubmit = (e) => {
        validateFields((err,value)=>{
            console.log('here',value)
        })
    };

    return (
        <SignMain>
            <Form
                onSubmit={handleSubmit}
                className="login-form"
            >
                <FormItem
                    hasFeedback={loading}
                    validateStatus={getFieldError('userName') ? 'error' : 'validating'}
                >
                    {getFieldDecorator('userName', {
                        rules: [{required: true, message: 'Please input your Username'}],
                    })(
                        <Input
                            size="large"
                            prefix={<Icon type="user" style={{fontSize: 13}}/>}
                            placeholder="Username"
                        />
                    )}
                </FormItem>
                <FormItem
                    hasFeedback={loading}
                    validateStatus={getFieldError('password') ? 'error' : 'validating'}
                >
                    {getFieldDecorator('password', {
                        rules: [{required: true, message: 'Please input your Password'}],
                    })(
                        <Input
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
                    Sign Up
                </Button>
            </Form>
        </SignMain>
    )
};

const WrappedSignInForm = Form.create()(SignUp);

export default WrappedSignInForm;