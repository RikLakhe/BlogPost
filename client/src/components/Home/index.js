import React, {Fragment, useEffect} from 'react'

const Home = props => {

    useEffect(()=>{
        props.fetchBlog()
    },[]);

    return(
        <Fragment>this is home</Fragment>
    )
};

export default Home;