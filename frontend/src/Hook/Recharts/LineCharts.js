import React, { useState, useEffect } from 'react';
import {
    ResponsiveContainer,
    Tooltip,
    LineChart,
    Line,
    XAxis,
    YAxis,
} from "recharts";

const DoubleLine = ({ data, DataKeyX, Strock1, Strock2, line1, line2, aspEcom, siteAsp992, siteAsp1200, siteAsp1400, asp992, asp1400 }) => {
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
    let ang;
    let x;
    let y;
    let minT;
    let asp;
    let fs;

    if (windowWidth <= 560 && windowWidth >= 400) {
        ang = -60;
        x = -10;
        y = 10;
        minT = -200;
        asp = 1.5;
        fs = 13;
    } else if (windowWidth <= 400) {
        ang = -60;
        x = -10;
        y = 10;
        minT = -300;
        asp = 1.2;
        fs = 12;
    } else if (windowWidth >= 560 && windowWidth < 992) {
        ang = 0;
        x = 0;
        y = 0;
        minT = 0;
        asp = 2.5;
        fs = 15;
    } else if (windowWidth >= 992 && windowWidth < 1200) {
        ang = 0;
        x = 0;
        y = 0;
        minT = 0;
        asp = asp992 ? asp992 : siteAsp992 ? siteAsp992 : 2.5;
        fs = 15;
    } else if (windowWidth >= 1200 && windowWidth < 1400) {
        ang = 0;
        x = 0;
        y = 0;
        minT = 0;
        asp = asp992 ? asp992 : siteAsp1200 ? siteAsp1200 : 2.5;
        fs = 15;
    } else {
        ang = 0;
        x = 0;
        y = 0;
        minT = 0;
        asp = asp1400 ? asp1400 : siteAsp1400 ? siteAsp1400 : aspEcom ? aspEcom : 1.05;
        fs = 15;
    }
    const DataFormater = (number) => {
        if (number > 1000) {
            return (number / 1000).toString() + 'K';
        } else {
            return number.toString();
        }
    }

    return (
        <ResponsiveContainer width="100%" aspect={asp}>
            <LineChart
                data={data}
            >
                <XAxis dataKey={DataKeyX} axisLine={false} angle={ang} dx={x} dy={y} minTickGap={minT} tickLine={false} tick={{ fontSize: fs }} />
                <YAxis domain={[0, 100000]} axisLine={false} tickFormatter={DataFormater} tickCount={5} interval={0} tickLine={false} tick={{ fontSize: fs }} />
                <Tooltip viewBox={{ x: 0, y: 0, width: 100, height: 100 }} />
                {/* <Legend iconType='circle' iconSize={is} verticalAlign='top'/> */}
                <Line
                    type="monotone"
                    dataKey={line1}
                    stroke={Strock1 ? Strock1 : "red"}
                    strokeWidth={3.5}
                    dot={false}
                />
                <Line
                    type="monotone"
                    dataKey={line2}
                    stroke={Strock2 ? Strock2 : "green"}
                    strokeDasharray="3 4 5 2"
                    dot={false}
                    strokeWidth={3.5}
                />
            </LineChart>
        </ResponsiveContainer>
    )
}

const SingleLine = ({ data, DataKeyY, line, Stroke, strokeWidth, Fill, Dot }) => {
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

    let minT;
    let asp;
    let fs;
    let tc;

    if (windowWidth <= 576) {
        minT = -200;
        asp = 1.7;
        fs = 12;
        tc = 3
    } else {
        minT = 0;
        asp = 2;
        fs = 15;
        tc = 3
    }

    const DataFormater = (number) => {
        if (number > 1000) {
            return (number / 1000).toString() + 'K';
        } else {
            return number.toString();
        }
    }

    return (
        <ResponsiveContainer width="100%" aspect={asp}>
            <LineChart
                data={data}
            >
                <XAxis dataKey={DataKeyY ? DataKeyY : ""} axisLine={false} minTickGap={minT} tickLine={false} tick={{ fontSize: fs }} />
                <YAxis domain={[0, 100000]} axisLine={false} tickFormatter={DataFormater} tickCount={tc} tickLine={false} tick={{ fontSize: fs }} />
                <Tooltip />
                <Line
                    type="monotone"
                    dot={Dot === false ? Dot : true}
                    dataKey={line}
                    stroke={Stroke ? Stroke : "#0000ff"}
                    strokeWidth={strokeWidth ? strokeWidth : 2}
                    fill={Fill ? Fill : ""}
                />
            </LineChart>
        </ResponsiveContainer>
    )
}


const WithoutXaxis = ({ data, line, Stroke, Width, Height, strokeWidth, Fill, Dot }) => {
    return (
        <ResponsiveContainer width="100%" aspect={2.5}>
            <LineChart
                data={data}
                margin={{
                    top: 5,
                    bottom: 5,
                }}
            >
                <Tooltip />
                <Line
                    type="monotone"
                    dot={Dot === false ? Dot : true}
                    dataKey={line}
                    stroke={Stroke ? Stroke : "#0000ff"}
                    strokeWidth={strokeWidth ? strokeWidth : 2}
                    fill={Fill ? Fill : ""}
                />
            </LineChart>
        </ResponsiveContainer>
    )
}

const SmallLine = ({ data, line }) => {
    return (
        <LineChart width={250} height={70} data={data}>
            <Line type="monotone" dot={false} dataKey="Tweet Imp" stroke="#8884d8" strokeWidth={2} activeDot={{ fill: 'green', r: 10 }} />
            <XAxis tick={false} />
            <Tooltip />
        </LineChart>
    )
}

const ChartjsDoubleLine = ({ data, DataKeyX, Strock1, Strock2, line1, line2, Dot, asp576, Ang, X, Y, Mint, asp992, asp1200, asp1400 }) => {
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
    let ang;
    let x;
    let y;
    let minT;
    let asp;
    let fs;

    if (windowWidth <= 560 && windowWidth >= 400) {
        ang = -60;
        x = -10;
        y = 10;
        minT = -200;
        asp = 1.5;
        fs = 13;
    } else if (windowWidth <= 400) {
        ang = -60;
        x = -10;
        y = 10;
        minT = -300;
        asp = 1.2;
        fs = 12;
    } else if (windowWidth >= 560 && windowWidth < 992) {
        ang = 0;
        x = 0;
        y = 0;
        minT = 0;
        asp = asp576 ? asp576 : 2.5;
        fs = 15;
    } else if (windowWidth >= 992 && windowWidth < 1200) {
        ang = Ang ? Ang : 0;
        x = X ? X : 0;
        y = Y ? Y : 0;
        minT = Mint ? Mint : 0;
        asp = asp992 ? asp992 : 2.5;
        fs = 15;
    } else if (windowWidth >= 1200 && windowWidth < 1400) {
        ang = Ang ? Ang : 0;
        x = X ? X : 0;
        y = Y ? Y : 0;
        minT = Mint ? Mint : 0;
        asp = asp1200 ? asp1200 : 2.5;
        fs = 15;
    } else {
        ang = Ang ? Ang : 0;
        x = X ? X : 0;
        y = Y ? Y : 0;
        minT = Mint ? Mint : 0;
        asp = asp1400 ? asp1400 : 1.05;
        fs = 15;
    }

    return (
        <ResponsiveContainer width="100%" aspect={asp}>
            <LineChart
                data={data}
            >
                <XAxis dataKey={DataKeyX} axisLine={false} angle={ang} dx={x} dy={y} minTickGap={minT} tickLine={false} tick={{ fontSize: fs }} />
                <YAxis axisLine={false} tickCount={4} interval={0} tickLine={false} tick={{ fontSize: fs }} />
                <Tooltip />
                <Line
                    type="monotone"
                    dataKey={line1}
                    stroke={Strock1 ? Strock1 : "red"}
                    strokeWidth={2}
                    dot={Dot ? true : false}
                />
                <Line
                    type="monotone"
                    dataKey={line2}
                    stroke={Strock2 ? Strock2 : "green"}
                    dot={Dot ? true : false}
                    strokeWidth={2}
                />
            </LineChart>
        </ResponsiveContainer>
    )
}
export { SingleLine, DoubleLine, WithoutXaxis, SmallLine, ChartjsDoubleLine };