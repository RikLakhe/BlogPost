import React, {Fragment, useState} from "react";
import {Button} from "antd";

import BlogCommentReply from "./BlogCommentReply";
import BlogCommentReplyForm from "./BlogCommentReplyForm";
import {useAuth0} from "../../Context/Auth0Context/react-auth0-spa";

const BlogComment = props => {
    const {user} = useAuth0();
    const [isFormVisible,setIsFormVisible] = useState(false);
    const {
        comment
    } = props;

    return (
        <p className={'blog-body'}>
            {comment && comment.by}{'  '}<Button type={'default'} shape={'round'} size={'small'} icon={"message"} onClick={()=>setIsFormVisible(!isFormVisible)}>Reply</Button><br/>
            {comment && comment.body}
            <ul>{
                comment && comment.reply && comment.reply.length>0 ?
                    comment.reply.map((replyItem,replyIndex)=>{
                        return <BlogCommentReply reply={replyItem} key={replyIndex} />
                    }) : null
            }</ul>
            {
                isFormVisible && <BlogCommentReplyForm {...props} commentId={comment.comment_id}/>

            }
        </p>
    )
};

export default BlogComment;