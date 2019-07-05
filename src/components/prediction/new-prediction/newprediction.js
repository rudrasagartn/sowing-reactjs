import React from 'react'
import StatesDropdown from './states'
import CityDropdown from './cities'
import GrainDropdown from './grains'
import SoilDropdown from './soil'
import LoadMap from './map'
import SowingDate from './sowingdate'

class NewPrediction extends React.Component {

    render() {
        return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <div className="row">
                                <div className="col-xs-12 col-md-8">&nbsp;</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className="control-label col-sm-offset-2 col-sm-2" htmlFor="states">States</label>
                        </td>
                        <td>
                            <StatesDropdown />
                        </td>
                        <td>
                            <label className="control-label col-sm-offset-2 col-sm-2" htmlFor="cities">Cities</label>
                        </td>
                        <td>
                            <CityDropdown />
                        </td>
                        <td>
                            <label className="control-label col-sm-offset-2 col-sm-2" htmlFor="cities">Grains</label>
                        </td>
                        <td>
                            <GrainDropdown />
                        </td>
                        
                    </tr>
                    <tr>
                        <td></td>
                    </tr>
                </tbody>
            </table>

            <div className="row">
                <div className="col-xs-12 col-md-8">&nbsp; </div>

            </div>
            <div className="row">
            <div className="col-xs-12 col-md-1">Soil Type</div>
                <div className="col-xs-10 col-md-2"><SoilDropdown/> </div>
                <div className="col-xs-10 col-md-1">Sowingdate</div>
                <div className="col-xs-10 col-md-2"><SowingDate/> </div>
                <div className="col-xs-6 col-md-4"><LoadMap /></div>
            </div>
        </div>
        )
    }
}
export default NewPrediction;