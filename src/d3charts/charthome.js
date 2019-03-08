import React, { Component } from "react";
import {connect} from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import FlippingPages from 'flipping-pages'
import 'flipping-pages/FlippingPages.css'

import LineChartComponent from './lineChart';
import ScatterChart from './scatterchart';
import BarChartComponent from './barchart';

@connect(
    state => ({
      userName: state.login.userName
    })
)

class ChartHome extends Component {

    constructor(props) {
        super(props)
        this.totalPages = 3
        this.state = {
            selected: 0,
            
        }
        this.handleSelectedChange   = this.handleSelectedChange.bind(this)
    }
 
    handleSelectedChange(selected) { 
       
        this.setState({selected})
    }
     
    Showselectedpage(pageno) {
       
        this.setState({selected: pageno})
          
    }

    render() {
        const {userName} = this.props;
        return (
            <div>
                <div className="Welcomebox">
                    Welcome: {userName}
                </div>
                <div className="flipboardmenu">
                    <span>
                        <button className={(this.state.selected==0)?"flipboardtab selectedtab":"flipboardtab"} onClick={this.Showselectedpage.bind(this,0)}>Line Chart</button>
                    </span>
                    <span>
                        <button className={(this.state.selected==1)?"flipboardtab selectedtab":"flipboardtab"} onClick={this.Showselectedpage.bind(this,1)}>Scatter Chart</button>
                    </span>
                    <span>
                        <button className={(this.state.selected==2)?"flipboardtab selectedtab":"flipboardtab"} onClick={this.Showselectedpage.bind(this,2)}>Bar Chart</button>
                    </span>
                </div>
                <div className="App">
                    <FlippingPages
                        className="App-pages"
                        direction="horizontal"
                        selected={this.state.selected}
                        onSelectedChange={this.handleSelectedChange}
                        /* touch-action attribute is required by pointer events
                        polyfill */
                        touch-action="none"
                    >
                        <LineChartComponent />
                        <ScatterChart />
                        <BarChartComponent />
                        
                    </FlippingPages>
                    
                </div>
                
            </div>
        );
    }
}

export default ChartHome;
