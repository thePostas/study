import React, {Component} from 'react';
import TaskCreateButton from "../components/TaskCreateButton";
import { connect } from "react-redux";

const mapDispatchToProps = function(dispatch) {
    return {
        onClick: (event) => {
            event.preventDefault();
            dispatch({
                type: "CREATE_TASK",
            });
        }
    };
};

export const CreateButton = connect(
    null,
    mapDispatchToProps
)(TaskCreateButton);