import React from "react";

const Loading = props => {
    if(props.error){
        return (<div>Error!</div>)
    }else if(props.pastDelay){
        // True once the component has taken longer to load then a set delay
        return (<div>...Loading...</div>)
    }else if(props.timedOut){
        // True when loader has time out
        return (<div>Taking a long time...</div>)
    }else{
        // Avoid flash of loading components, some load really quick (<200ms) creating flashes on screen
        return null
    }
};

export default Loading;