import React from "react";

import AddForm from '../../components/Blog/AddForm';

const AddContainer = props => {

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

export default AddContainer;