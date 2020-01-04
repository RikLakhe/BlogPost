import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Home from '../../components/Home';
import * as blogService from '../../services/blogServices';
import * as blogAction from '../../actions/blogAction';

const HomeContainer = props => {
    /**
     * Fetch Blog list
     *
     * @param {object} formData
     */
    const fetchBlog = (formData) =>{
        props.actions.fetchBlog(formData)
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
        <Home
            fetchBlog={fetchBlog}
            cleanBlogRequest={cleanBlogRequest}
            fetchBlogByIdentifier={fetchBlogByIdentifier}
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
