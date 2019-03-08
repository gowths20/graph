
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'react-d3-components';

const BarChart = d3.BarChart;

var data = [{
    label: 'somethingA',
    values: [{x: 'SomethingA', y: 10}, {x: 'SomethingB', y: 4}, {x: 'SomethingC', y: 3}]
}];

class BarChartComponent extends Component {


  render() {
    return (
      <div>
        <div className="chartname">Bar Chart</div>
        <BarChart
            data={data}
            width={400}
            height={400}
            margin={{top: 10, bottom: 50, left: 50, right: 10}}/>
      </div>
        
    );
  }
}


BarChartComponent.propTypes = {
  data: PropTypes.array.isRequired
};

export default BarChartComponent;
