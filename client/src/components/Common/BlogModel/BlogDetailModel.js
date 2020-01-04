import React, {Fragment} from "react";
import { Modal, Button } from 'antd';
import moment from 'moment'
import Loader from "../../Layout/Loading/Loader";

const BlogDetailModel = props => {
    const {
        isModelVisible,
        modelHide,
        singleBlog,
        singleBlogLoading,
        singleBlogError,
    } = props;

    return (
        <Modal
            title={singleBlog && singleBlog.title? singleBlog.title.toUpperCase() : "Story"}
            visible={isModelVisible}
            footer={null}
            onCancel={modelHide}
        >
            {
                singleBlogLoading ?
                    <Loader center={true}/> :
                    singleBlog ?
                        <Fragment>
                            <h3 >By : {singleBlog.author}</h3>
                            <h5 >Date : {moment(singleBlog.date).format('YYYY-MM-DD')}</h5>
                            <br/>
                                <p>{singleBlog.body}</p>
                        </Fragment> : null
            }
        </Modal>
    )
};

export default BlogDetailModel;