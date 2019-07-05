import React from 'react'
import DatePicker from 'react-datepicker'
import {connect} from 'react-redux'
import "react-datepicker/dist/react-datepicker.css";

class SowingDate extends React.Component {

    // handleChange(date) {
    //     this.setState({
    //         dateSelected: date
    //     });
    // }

    render() {
        return (
            <DatePicker selected={this.props.dateSelected} onSelect={this.props.dateUpdate} dateFormat="dd/MMMM/yyyy" />
        )
    }
}

function mapStateToProps(state) {
    return {
          dateSelected: state.sowingdate.dateSelected
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dateUpdate: (item) =>
            dispatch({
                type: "DATE_SELECTED",
                payload: item
            })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SowingDate);