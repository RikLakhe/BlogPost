import React from "react";

import AddForm from '../../components/Blog/AddForm';

const EditContainer = props => {

    const testFunction = () =>{
        console.log('gggg');
    }

    return (
        <AddForm
            testFunction={testFunction}
            {...props}
        />
    )
};

export default EditContainer;