import React, {Fragment, useState, useEffect} from 'react'
import Loader from "../Layout/Loading/Loader";

import BlogListItem from './BlogListItem'
import BlogModel from '../Common/BlogModel'
import {CommonBoxedMain} from "../../styles/style";

const Home = props => {
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
        cleanBlogRequest();
        cleanSingleBlogRequest();
        fetchBlog();
        return(()=>{
            cleanBlogRequest();
            cleanSingleBlogRequest();
        })
    }, []);

    return (
        <Fragment>
            <CommonBoxedMain>
                <h1>Stories you might like ... </h1>
                {
                    blogLoading ? <Loader center={true}/> :
                        blog && blog instanceof Array ? blog.map((blogItem, blogIndex) => {
                            return (
                                <BlogListItem
                                    key={blogIndex}
                                    data={blogItem}
                                    index={blogIndex + 1}
                                    handleReadButton={handleReadButton}
                                />)
                        }) : null
                }
            </CommonBoxedMain>
            <BlogModel {...modelProps}/>
        </Fragment>

    )
};

export default Home;