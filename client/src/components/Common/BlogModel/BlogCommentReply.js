import React from 'react'

const BlogCommentReply = props =>{
    const {reply} = props;

    return(
        <li>"{reply.body}" : {reply.by}</li>
    );
};

export default BlogCommentReply;