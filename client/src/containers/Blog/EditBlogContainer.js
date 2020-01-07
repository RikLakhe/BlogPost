import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import EditForm from '../../components/Blog/EditForm';
import * as blogService from "../../services/blogServices";
import * as blogAction from "../../actions/blogAction";

const EditContainer = props => {
    /**
     * Update Blog
     *
     * @param {object} formData
     * @param {string} id
     *
     * @return response
     */
    const updateBlog = (formData,id) =>{
        return props.actions.updateBlog(formData,id)
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
        <EditForm
            updateBlog={updateBlog}
            fetchBlogByIdentifier={fetchBlogByIdentifier}
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

export default connect(mapStateToProps, mapDispatchToProps)(EditContainer);