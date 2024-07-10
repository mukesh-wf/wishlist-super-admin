import React, { useState, useEffect } from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

const AreaCharts = ({ Data, Datakey1, Datakey2 }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    });

    let asp;

    if (windowWidth <= 364) {
        asp = 1;
    } else if (windowWidth > 364 && windowWidth <= 576) {
        asp = 2;
    } else if (windowWidth > 576 && windowWidth <= 768) {
        asp = 2.3;
    } else if (windowWidth > 768 && windowWidth <= 992) {
        asp = 1.3;
    } else if (windowWidth > 992 && windowWidth <= 1200) {
        asp = 1.5;
    } else {
        asp = 1.5;
    }
    return (
        <ResponsiveContainer width="100%" aspect={asp}>
            <AreaChart
                data={Data}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip cursor={false} />
                <Area type="monotone" dataKey={Datakey1} stackId="1" stroke="#FF0000" fill="#ff3333" />
                <Area type="monotone" dataKey={Datakey2} stackId="1" stroke="#82ca9d" fill="#a6d9b9" />
            </AreaChart>
        </ResponsiveContainer>
    )
}

export default AreaCharts;