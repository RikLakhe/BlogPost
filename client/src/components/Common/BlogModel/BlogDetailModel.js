import React, {Fragment} from "react";
import {Modal, Button} from 'antd';
import moment from 'moment'

import Loader from "../../Layout/Loading/Loader";
import {useAuth0} from "../../Context/Auth0Context/react-auth0-spa";
import BlogComment from "./BlogComment";
import BlogCommentForm from "./BlogCommentForm";

import './index.css'

const BlogDetailModel = props => {
    const {user} = useAuth0();
    const {
        isModelVisible,
        modelHide,
        singleBlog,
        singleBlogLoading,
        singleBlogError,
    } = props;

    return (
        <Modal
            width={'800px'}
            visible={isModelVisible}
            footer={null}
            onCancel={modelHide}
            closable={false}
        >
            {
                singleBlogLoading ?
                    <Loader center={true}/> :
                    singleBlog ?
                        <Fragment>
                            <h2>{singleBlog && singleBlog.title ? singleBlog.title.toUpperCase() : "Story"}</h2>
                            <h3>By : {singleBlog.author}</h3>
                            <h5>Date : {moment(singleBlog.date).format('YYYY-MM-DD')}</h5>
                            {
                                singleBlog && user && singleBlog.author_id === user.user_id &&
                                <Button
                                    size={'large'}
                                    style={{position: 'absolute', top: '20px', right: "20px"}}
                                    shape="circle"
                                    icon="edit"
                                    href={`/blog/edit/${singleBlog._id}`}/>
                            }
                            <br/>
                            <p align={"justify"}>{singleBlog.body}</p>
                            <hr/>
                            {singleBlog.comments && singleBlog.comments.length > 0 ?
                                singleBlog.comments.map((commentItem, commentIndex) => {
                                    return <BlogComment {...props} comment={commentItem} key={commentIndex}/>
                                })
                                : <span className={'no-comment'}>NO COMMENTS</span>}

                            <hr/>
                            <BlogCommentForm {...props}/>
                        </Fragment> : null
            }
        </Modal>
    )
};

export default BlogDetailModel;