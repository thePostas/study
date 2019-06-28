import React from 'react';
import TaskCreateButton from "../components/TaskCreateButton";
import { connect } from "react-redux";

const mapStateToProps = function(state) {
    return {
        value: state.input
    };
};

const mapDispatchToProps = function(dispatch) {
    return {
        onClick: function(event) {
            event.preventDefault();
            if (this.props.value) {
                dispatch({
                    type: "CREATE_TASK",
                });
            }

        }
    };
};

export const CreateButton = connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskCreateButton);