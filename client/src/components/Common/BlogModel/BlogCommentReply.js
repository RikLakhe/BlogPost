import React from 'react'

const BlogCommentReply = props =>{
    const {reply} = props;

    return(
        <li>{reply.by} : "{reply.body}"</li>
    );
};

export default BlogCommentReply;