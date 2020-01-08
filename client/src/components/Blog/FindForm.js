import React, {useEffect, useState} from "react";
import {Form, Input, Radio} from 'antd'
import {withRouter} from "react-router-dom";

import {CommonBoxedMain} from '../../styles/style'
import BlogListItem from "../Common/BlogList";
import Loader from "../Layout/Loading/Loader";
import BlogModel from "../Common/BlogModel";

const FormItem = Form.Item;

const FindForm = props => {
    const {
        fetchBlogByCriteria,
    } = props;

    const {
        getFieldDecorator,
        validateFields,
        getFieldValue,
    } = props.form;

    const handleSubmit = (e) => {
        e.preventDefault();
        validateFields((err, value) => {
            if (!err) {
                fetchBlogByCriteria(value)
            }
        })

    };

    return (
        <Form
            onSubmit={handleSubmit}
            className="add-blog-form"
        >
            <FormItem>
                {getFieldDecorator('dataType', {
                    getValueFromEvent: event => event.target.value,
                    initialValue: "title",
                    rules: [{required: true, message: 'Please enter title of your story'}],
                })(
                    <Radio.Group size="large">
                        <Radio.Button value="title">Title</Radio.Button>
                        <Radio.Button value="author">Author</Radio.Button>
                        <Radio.Button value="body">Body</Radio.Button>
                    </Radio.Group>
                )}
            </FormItem>
            <FormItem>
                {getFieldDecorator('searchItem', {
                    initialValue: undefined,
                    rules: [{required: true, message: 'This field is required'}],
                })(
                    <Input
                        type="text"
                        size="large"
                        placeholder={getFieldValue(`dataType`) ? getFieldValue(`dataType`).toUpperCase():'SEARCH ITEM'}
                        onBlur={(e)=>{
                            handleSubmit(e);
                        }}
                    />
                )}
            </FormItem>
        </Form>
    )
};

const FindBlogForm = Form.create()(withRouter(FindForm));

const WrappedAddNewBlog = props => {
    const [isModelVisible, setModelVisible] = useState(false);
    const {
        blog,
        fetchBlogByIdentifier,
        cleanBlogRequest,
        cleanSingleBlogRequest,
        singleBlog,
        singleBlogLoading,
        singleBlogError,
    } = props;

    const handleReadButton = (id) => {
        fetchBlogByIdentifier(id);
        setModelVisible(true)
    };

    const modelHide = () => {
        cleanSingleBlogRequest();
        setModelVisible(false)
    };

    const modelProps = {
        isModelVisible: isModelVisible,
        modelHide: modelHide,
        singleBlog: singleBlog,
        singleBlogLoading: singleBlogLoading,
        singleBlogError: singleBlogError,
    };

    useEffect(() => {
        cleanBlogRequest();
        cleanSingleBlogRequest();

        return (() => {
            cleanBlogRequest();
            cleanSingleBlogRequest();
        })
    }, []);

    return (
        <CommonBoxedMain>
            <h1>Find story...</h1>
            <FindBlogForm {...props} />
                <h1>Stories we found ... {blog ? blog.length : undefined}</h1>
                {
                    blog && blog instanceof Array ? blog.map((blogItem, blogIndex) => {
                        return (
                            <BlogListItem
                                key={blogIndex}
                                data={blogItem}
                                index={blogIndex + 1}
                                handleReadButton={handleReadButton}
                            />)
                    }) : <Loader center={true}/>
                }
            <BlogModel refetch={undefined} {...props} {...modelProps}/>
        </CommonBoxedMain>
    )
};

export default WrappedAddNewBlog;