import React from 'react';
import * as d3 from 'react-d3-components';

const ScatterPlot = d3.ScatterPlot;

const data = [
    {
    label: 'somethingA',
    values: [{x: 0, y: 2}, {x: 1.3, y: 5}, {x: 3, y: 6}, {x: 3.5, y: 6.5}, {x: 4, y: 6}, {x: 4.5, y: 6}, {x: 5, y: 7}, {x: 5.5, y: 8}]
    },
    {
    label: 'somethingB',
    values: [{x: 0, y: 3}, {x: 1.3, y: 4}, {x: 3, y: 7}, {x: 3.5, y: 8}, {x: 4, y: 7}, {x: 4.5, y: 7}, {x: 5, y: 7.8}, {x: 5.5, y: 9}]
    }
];

class ScatterChart extends React.Component {
   
   render() {
      return (
          <div>
              <div className="chartname">Scatter Chart</div>
                    <ScatterPlot
                        data={data}
                        width={400}
                        height={400}
                        margin={{top: 10, bottom: 50, left: 50, right: 10}}
                />
          </div>
        
    );
   }
}
export default ScatterChart;