import {connect} from 'react-redux';
import React from 'react';
import {Link} from 'react-router-dom';
import {signup} from '../../actions/session_actions';
import SignUpForm from './signup_form';
  
const mapStateToProps = (state, {errors}) => {
    return {
        //errors: errors.session,
        formType: 'Next'
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        processForm: (user) => dispatch(signup(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);