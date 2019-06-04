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
        onChange: () => {
            console.log('typing');
            dispatch({
                type: "HANDLE_INPUT",
                payload: {
                    inputValue: this.inputValue
                }
            });
        }
    };
};

export const InputContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(inputField);