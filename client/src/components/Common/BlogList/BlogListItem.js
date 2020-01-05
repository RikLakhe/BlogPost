import React, {Fragment} from 'react'
import styled from "styled-components";
import {Button} from 'antd'

import {CommonBlogHr, CommonBlogHrDivide} from "../../../styles/style";

const BlogListItem = props => {
    const {data, index, handleReadButton} = props;

    const BlogListItemStyle = styled.div`
        max-height: 100px;
        position: relative;
        overflow: hidden;
        
        .body:first-letter{
              font-size: 50px;
              line-height: 1.4em;
              font-weight: bold;
              vertical-align: middle;
              background-color: darksalmon;
              padding: 1 8px;
              float:left;
        }
        
        .read-more{
              position: absolute; 
              bottom: 0; 
              left: 0;
              width: 100%; 
              text-align: center; 
              margin: 0; 
              padding: 0; 
              /* "transparent" only works here because == rgba(0,0,0,0) */
              background-image: linear-gradient(to bottom, transparent, white);
        }
    `;

    if (data) {
        data.title.replace(/^./, data.title[0].toUpperCase());
        data.author.replace(/^./, data.author[0].toUpperCase());
        data.body.replace(/^./, data.body[0].toUpperCase());

        return (
            <Fragment>
                <h2> {index} . {data.title}</h2>
                <h6>By : {data.author}</h6>
                <CommonBlogHr/>
                <BlogListItemStyle>
                    <p className={"body"}>{data.body}</p>
                    <p className="read-more">
                        <Button
                            type={"primary"}
                            size={"small"}
                            onClick={() => {
                                handleReadButton(data._id);
                            }}>Read More</Button>
                    </p>
                </BlogListItemStyle>
                <CommonBlogHr/>
                <CommonBlogHrDivide/>
            </Fragment>)
    } else {
        return (
            <Fragment>
                Error
            </Fragment>)
    }


};

export default BlogListItem;