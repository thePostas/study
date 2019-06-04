import { connect } from "react-redux";
import { Counter } from "../components/counter";

const mapStateToProps = function(state) {
    return {
        value: state.firstCounter
    };
};

const mapDispatchToProps = function(dispatch) {
    return {
        onClick: () => {
            dispatch({ type: "FIRST_INCREMENT" });
        }
    };
};

export const FirstCounter = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
