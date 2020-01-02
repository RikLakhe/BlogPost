import React, {useContext} from 'react'
import styled from "styled-components";
import {Form, Button, Icon, Input, Select} from 'antd';
import {withRouter} from "react-router-dom";

import {AuthContext} from "../Context/AppContext/AuthContext";

const FormItem = Form.Item;
const { Option } = Select;

const SignUp = props => {
    const {authenticated, loading, login} = useContext(AuthContext);
    const {
        getFieldDecorator,
        getFieldError,
        getFieldValue,
        validateFields
    } = props.form;

    const formItemLayout = {
        labelCol: { xs: { span: 6 }, md: { span: 8 }, sm: { span: 24 } },
        wrapperCol: { xs: { span: 18 }, md: { span: 16 }, sm: { span: 24 } },
        labelAlign: 'left',
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        validateFields((err,value)=>{
            props.addUserContainer(value)
        })
    };

    return (
            <Form
                onSubmit={handleSubmit}
                className={'create-form'}
                layout={'vertical'}
            >
                <FormItem
                    {...formItemLayout}
                    // hasFeedback={loading}
                    // validateStatus={getFieldError('userName') ? 'error' : 'validating'}
                    label={`First Name:`}
                >
                    {getFieldDecorator('firstName', {
                        rules: [{required: true, message: 'Please input your First Name'}],
                    })(
                        <Input
                            type="text"
                            placeholder="First Name"
                        />
                    )}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    // hasFeedback={loading}
                    // validateStatus={getFieldError('userName') ? 'error' : 'validating'}
                    label={`Last Name:`}
                >
                    {getFieldDecorator('lastName', {
                        rules: [{required: true, message: 'Please input your Last Name'}],
                    })(
                        <Input
                            type="text"
                            placeholder="Last Name"
                        />
                    )}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    // hasFeedback={loading}
                    // validateStatus={getFieldError('userName') ? 'error' : 'validating'}
                    label={`Sex:`}
                >
                    {getFieldDecorator('sex', {
                        rules: [{required: true, message: 'Please select your Sex'}],
                    })(
                        <Select placeholder="Sex">
                            <Option key={'Male'} value={"M"}>Male</Option>
                            <Option key={'Female'} value={"F"}>Female</Option>
                            <Option key={'Other'} value={"O"}>Other</Option>
                        </Select>
                    )}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    // hasFeedback={loading}
                    // validateStatus={getFieldError('userName') ? 'error' : 'validating'}
                    label={`Email:`}
                >
                    {getFieldDecorator('email', {
                        rules: [{required: true, message: 'Please enter your Email'}],
                    })(
                        <Input
                            type="email"
                            placeholder="Email"
                        />
                    )}
                </FormItem>

                <hr/>

                <FormItem
                    {...formItemLayout}
                    // hasFeedback={loading}
                    // validateStatus={getFieldError('userName') ? 'error' : 'validating'}
                    label={`User Name:`}
                >
                    {getFieldDecorator('userName', {
                        rules: [{required: true, message: 'Please enter your User Name'}],
                    })(
                        <Input
                            type="text"
                            placeholder="User Name"
                        />
                    )}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    // hasFeedback={loading}
                    // validateStatus={getFieldError('userName') ? 'error' : 'validating'}
                    label={`Password:`}
                >
                    {getFieldDecorator('password', {
                        rules: [{required: true, message: 'Please enter your Password'}],
                    })(
                        <Input
                            type="password"
                            placeholder="Password"
                        />
                    )}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    // hasFeedback={loading}
                    // validateStatus={getFieldError('userName') ? 'error' : 'validating'}
                    label={`Confirm Password:`}
                >
                    {getFieldDecorator('confirmPassword', {
                        rules: [
                            {required: true, message: 'Please enter your Confirm Password'},
                            {
                                validator:  (rule, value, callback)=>{
                                    if(value===''||undefined||null){
                                        callback()
                                    }else{
                                        if(value !== getFieldValue('password')){
                                            callback('Password does not match.')
                                        }else{
                                            callback()
                                        }
                                    }
                                }
                            }
                        ],
                    })(
                        <Input
                            type="password"
                            placeholder="Confirm Password"
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
    )
};

const SignUpForm = Form.create()(withRouter(SignUp));

const WrappedSignUpForm = props =>{
    const SignMain = styled.div`
        width: 400px;
        margin: auto;
        padding : 20px;
        margin-top: 10vh;
        overflow: scroll;
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
            <SignUpForm {...props}/>
        </SignMain>
    )
}

export default WrappedSignUpForm;