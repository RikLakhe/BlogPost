import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AddForm from '../../components/Blog/AddForm';
import * as blogService from '../../services/blogServices';
import * as blogAction from '../../actions/blogAction';

const AddContainer = props => {
    /**
     * Add Blog
     *
     * @param {object} formData
     */
    const addBlog = (formData) =>{
        props.actions.addBlog(formData)
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
        <AddForm
            addBlog={addBlog}
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

export default connect(mapStateToProps, mapDispatchToProps)(AddContainer);