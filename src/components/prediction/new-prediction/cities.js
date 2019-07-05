import React from 'react'
import { connect } from 'react-redux';


class CityDropdown extends React.Component {
    componentDidUpdate(prevProps) {
        if (prevProps.stateSelected !== this.props.stateSelected) {
            fetch("http://localhost:8080/getCities/" + this.props.stateSelected).
                then(res => res.json()).
                then((result) => {
                    //alert(result)
                    this.props.loadcities(result);
                })
        }
    }

    render() {
        return (
            <div>
               {/* in cities: {this.props.stateSelected}*/ }
                <select id="cities" className="form-control" onChange={(e) => {
                    this.props.cityselected(e.target.value)
                }}>
                    <option>NONE</option>
                    {
                        this.props.cityList.map((item, index) =>
                            <option key={index} value={item}>{item}</option>
                        )
                    }
                </select>

                {/*City Selected:{this.props.citySelected}*/}
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        cityList: state.city.cityList,
        stateSelected: state.states.stateSelected,
        citySelected: state.city.citySelected
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadcities: result =>
            dispatch({
                type: 'LOAD_CITIES',
                payload: result
            }),
        cityselected: (item) =>
            dispatch({
                type: 'SELECTED_CITY',
                payload: item
            })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CityDropdown);

