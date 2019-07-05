import React from 'react'
import { connect } from 'react-redux';
class GrainDropdown extends React.Component {

    componentDidMount() {
        fetch("http://localhost:8080/getGrains").then(res => res.json()).then((result) => {
            {/*alert(result);*/}
            this.props.loadGrains(result)
        })
    }

    render() {
        return (
            <select id="grains" className="form-control">
                <option>None</option>
                {
                    this.props.grainList.map((item, index) =>
                        <option key={index} value={item}>{item}</option>
                    )
                }
            </select>

        )
    }


}

function mapStateToProps(state) {
    return {
        grainList: state.grain.grainList,
        grainSelected: state.grain.grainSelected
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadGrains: (result) =>
            dispatch({
                type: "LOAD_GRAINS",
                payload: result
            }),

        grainSelected: (item) =>
            dispatch({
                type: "GRAIN_SELECTED",
                payload: item
            })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GrainDropdown);