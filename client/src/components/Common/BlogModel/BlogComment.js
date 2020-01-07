import React, {Fragment} from "react";
import {useAuth0} from "../../Context/Auth0Context/react-auth0-spa";

const BlogComment = props => {
    const {user} = useAuth0();
    const {
        comment
    } = props;

    return (
        <li>{comment && comment.by}: {comment && comment.body}</li>
    )
};

export default BlogComment;