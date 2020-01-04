import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Home from '../../components/Home';
import * as blogService from '../../services/BlogServices';

const HomeContainer = props => {

    /**
     * Fetch single rejected customer by id.
     *
     * @param {object} formData
     */
    const fetchBlog = (formData) =>{
        props.actions.fetchBlog(formData)
    }

    return (
        <Home
            fetchBlog={fetchBlog}
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
            blogService
        ),
        dispatch
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
