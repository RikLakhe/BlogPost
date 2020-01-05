import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Profile from '../../components/Profile';

const ProfileContainer = props => {


    return (
        <Profile

            {...props}
        />
    )
};

/**
 * Map the state to props.
 */
const mapStateToProps = state => ({
});

/**
 * Map the actions to props.
 */
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(
        Object.assign(
            {},
        ),
        dispatch
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
