import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FindForm from '../../components/Blog/FindForm';
import * as blogService from '../../services/blogServices';
import * as blogAction from '../../actions/blogAction';

const FindContainer = props => {
    /**
     * Find Blog By Criteria
     *
     * @param {object} formData
     */
    const fetchBlogByCriteria = (formData) =>{
        props.actions.fetchBlogByCriteria(formData)
    };

    /**
     * Fetch Single Blog
     *
     * @param {string} id
     */
    const fetchBlogByIdentifier = (id) =>{
        props.actions.fetchBlogByIdentifier(id)
    };

    /**
     * Add Comment in Blog
     *
     * @param {object} formData
     * @param {string} blogId
     */
    const addBlogComment = (formData,blogId) =>{
        return props.actions.addBlogComment(formData,blogId)
    };

    /**
     * Add Comment in Blog
     *
     * @param {object} formData
     * @param {string} blogId
     * @param {string} commentId
     */
    const addBlogCommentReply = (formData,blogId,commentId) =>{
        return props.actions.addBlogCommentReply(formData,blogId,commentId)
    };

    /**
     * Clean Blog list
     */
    const cleanBlogRequest = () =>{
        props.actions.cleanBlogRequest()
    };

    /**
     * Clean Single Blog
     */
    const cleanSingleBlogRequest = () =>{
        props.actions.cleanSingleBlogRequest()
    };

    return (
        <FindForm
            fetchBlogByCriteria={fetchBlogByCriteria}
            fetchBlogByIdentifier={fetchBlogByIdentifier}
            addBlogComment={addBlogComment}
            addBlogCommentReply={addBlogCommentReply}
            cleanBlogRequest={cleanBlogRequest}
            cleanSingleBlogRequest={cleanSingleBlogRequest}
            {...props}
        />
    )
};

/**
 * Map the state to props.
 */
const mapStateToProps = state => ({
    blog: state.blog.payload,
    blogLoading : state.blog.loading,
    blogError : state.blog.errors,
    singleBlog: state.singleBlog.payload,
    singleBlogLoading : state.singleBlog.loading,
    singleBlogError : state.singleBlog.errors,
});

/**
 * Map the actions to props.
 */
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(
        Object.assign(
            {},
            blogService,
            blogAction,
        ),
        dispatch
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(FindContainer);