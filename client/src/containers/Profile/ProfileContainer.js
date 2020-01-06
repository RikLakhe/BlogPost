import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Profile from '../../components/Profile';
import * as userServices from '../../services/userServices';

const ProfileContainer = props => {
    /**
     * Update User
     *
     * @param {object} formData
     * @param {string} id
     *
     * @return response
     */
    const updateUser = (formData,id) =>{
        return props.actions.updateUser(formData,id)
    };

    return (
        <Profile
            updateUser={updateUser}
            {...props}
        />
    )
};

/**
 * Map the state to props.
 */
const mapStateToProps = state => ({
    user: state.user.payload,
    userLoading : state.user.loading,
    userError: state.user.errors
});

/**
 * Map the actions to props.
 */
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(
        Object.assign(
            {},
            userServices,
        ),
        dispatch
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
