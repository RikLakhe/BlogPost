import React, {Fragment, useState, useEffect} from 'react'
import {Button} from "antd";

import Loader from "../Layout/Loading/Loader";
import BlogListItem from '../Common/BlogList'
import BlogModel from '../Common/BlogModel'
import {CommonBoxedMain} from "../../styles/style";

const Home = props => {
    const [count, setCount] = useState(1);

    const {
        blog,
        blogError,
        blogLoading,
        fetchBlogByIdentifier,
        singleBlog,
        singleBlogLoading,
        singleBlogError,
        cleanBlogRequest,
        cleanSingleBlogRequest,
        fetchBlog
    } = props;
    const [isModelVisible, setModelVisible] = useState(false);

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
    }

    useEffect(() => {
        setCount(1)
        cleanBlogRequest();
        cleanSingleBlogRequest();
        fetchBlog();
        return (() => {
            cleanBlogRequest();
            cleanSingleBlogRequest();
            setCount(1)
        })
    }, []);

    return (
        <Fragment>
            <CommonBoxedMain>
                <h1>Stories you might like ... </h1>
                {
                    blog && blog instanceof Array ? blog.map((blogItem, blogIndex) => {
                        return (
                            <BlogListItem
                                {...props}
                                key={blogIndex}
                                data={blogItem}
                                index={blogIndex + 1}
                                handleReadButton={handleReadButton}
                            />)
                    }) : <Loader center={true}/>
                }
                <Button
                    style={{width: "100%"}}
                    onClick={() => {
                        setCount(count + 1);
                        let formData = {time: count};
                        fetchBlog(formData);
                    }}
                    loading={blogLoading}
                >Load More</Button>
            </CommonBoxedMain>
            <BlogModel {...props} {...modelProps}/>

        </Fragment>

    )
};

export default Home;