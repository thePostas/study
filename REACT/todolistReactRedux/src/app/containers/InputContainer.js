import React from 'react';
import inputField from '../components/InputField';
import { connect } from "react-redux";

const mapStateToProps = function(state) {
    return {
        value: state.input
    };
};

const mapDispatchToProps = function(dispatch) {
    return {
        onChange: (event) => {
            dispatch({
                type: "HANDLE_INPUT",
                payload: {
                    inputValue: event.target.value
                }
            });
        }
    };
};

export const InputContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(inputField);