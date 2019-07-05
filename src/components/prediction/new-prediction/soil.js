import React from 'react'
import { connect } from 'react-redux';

class SoilDropdown extends React.Component {

    componentDidMount() {
        fetch("http://localhost:8080/getSoilType").then(res => res.json()).then((result) => {
            {/*alert(result);*/ }
            this.props.loadSoil(result)
        })
    }

    render() {
        return (
            <select id="soil" className="form-control">
                <option>None</option>
                {
                    this.props.soilList.map((item, index) =>
                        <option key={index} value={item}>{item}</option>
                    )
                }
            </select>
        )
    }
}
function mapStateToProps(state) {
    return {
        soilList: state.soil.soilList,
        soilSelected: state.soil.soilSelected
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadSoil: (result) =>
            dispatch({
                type: "LOAD_SOIL",
                payload: result
            }),

        soilSelected: (item) =>
            dispatch({
                type: "SOIL_SELECTED",
                payload: item
            })
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(SoilDropdown);