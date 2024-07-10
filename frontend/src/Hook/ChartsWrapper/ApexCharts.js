import React from 'react';
import Chart from 'react-apexcharts';

const Charts = ({ option, type, series }) => {
    return (
        <React.Fragment>
            <Chart
                options={option}
                series={series}
                type={type}
                height="100%"
                width="100%"
            />
        </React.Fragment>
    )
}

export default Charts;