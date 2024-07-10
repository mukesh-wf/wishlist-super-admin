import React from 'react';
import { Chart } from "react-google-charts";

const GoogleCharts = ({ data, option, type }) => {
    return (
        <React.Fragment>
            <Chart
                chartType={type}
                width="100%"
                height="100%"
                data={data}
                options={option}
            />
        </React.Fragment>
    )
}

export default GoogleCharts