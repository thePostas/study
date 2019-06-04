import React from 'react';
import { connect } from "react-redux";
import List from "../components/List";

const mapStateToProps = function(state) {
    return {
        tasks: state.tasks
    };
};

export const TaskListContainer = connect(
    mapStateToProps
)(List);