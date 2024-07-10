import React, { useState, useEffect } from 'react';
import {
    YAxis,
    Tooltip,
    Legend,
    BarChart,
    Bar,
    XAxis,
    ResponsiveContainer,
    ComposedChart
} from "recharts";

const SingleBar = ({ data, DataKeyX, Bar1, Bar2, Fill1, Fill2 }) => {
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

    const DataFormater = (number) => {
        if (number > 1000) {
            return (number / 1000).toString() + 'K';
        } else {
            return number.toString();
        }
    }
    let ang;
    let x;
    let y;
    let minT;
    let bs;
    let asp;

    if (windowWidth <= 1100) {
        ang = -60;
        x = -10;
        y = 10;
        minT = -200;
        bs = 6;
        asp = 1.3;
    } else {
        ang = 0;
        x = 0;
        y = 0;
        minT = 0;
        bs = 10;
        asp = 1.7;
    }
    return (
        <ResponsiveContainer
            width="100%"
            aspect={asp}
        >
            <BarChart
                data={data}
                barSize={bs}
            >
                <XAxis dataKey={DataKeyX} axisLine={false} angle={ang} dx={x} dy={y} minTickGap={minT} tickLine={false} />
                <YAxis axisLine={false} tickFormatter={DataFormater} tickLine={false} />
                <Tooltip />
                <Bar dataKey={Bar1} fill={Fill1} />
                <Bar dataKey={Bar2} fill={Fill2} />
            </BarChart>
        </ResponsiveContainer>
    )
}

const DoubleBar = ({ data, DataKeyX, Bar1, Bar2, Fill1, Fill2, leag, aspSoc1200, socialAsp1400, asp1600, socialAsp1600, Ang, socAng1400,
    X,
    Y,
    socX1400, socY1400,
    Mint, asp576, asp768, asp992 }) => {
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

    const DataFormater = (number) => {
        if (number > 1000) {
            return (number / 1000).toString() + 'K';
        } else {
            return number.toString();
        }
    }
    let ang;
    let x;
    let y;
    let minT;
    let bs;
    let asp;
    let fs;

    if (windowWidth < 576 && windowWidth >= 400) {
        ang = -60;
        x = -10;
        y = 10;
        minT = -200;
        bs = 6;
        asp = 1.6;
        fs = 13;
    } else if (windowWidth <= 400) {
        ang = -60;
        x = -10;
        y = 10;
        minT = -200;
        bs = 6;
        asp = 1;
        fs = 12;
    } else if (windowWidth >= 576 && windowWidth < 768) {
        ang = 0;
        x = 0;
        y = 0;
        minT = 0;
        bs = 10;
        asp = asp576 ? asp576 : 1.7;
        fs = 15;
    } else if (windowWidth >= 768 && windowWidth < 992) {
        ang = 0;
        x = 0;
        y = 0;
        minT = 0;
        bs = 10;
        asp = asp768 ? asp768 : 1.7;
        fs = 15;
    } else if (windowWidth >= 992 && windowWidth < 1200) {
        ang = Ang ? Ang : 0;
        x = X ? X : 0;
        y = Y ? Y : 0;
        minT = Mint ? Mint : 0;
        bs = 10;
        asp = asp992 ? asp992 : 1.7;
        fs = 15;
    } else if (windowWidth >= 1200 && windowWidth < 1400) {
        ang = Ang ? Ang : 0;
        x = X ? X : 0;
        y = Y ? Y : 0;
        minT = Mint ? Mint : 0;
        bs = 10;
        asp = aspSoc1200 ? aspSoc1200 : 1.7;
        fs = 15;
    } else if (windowWidth >= 1400 && windowWidth < 1600) {
        ang = Ang ? Ang : socAng1400 ? socAng1400 : 0;
        x = X ? X : socX1400 ? socX1400 :0;
        y = Y ? Y : socY1400 ? socY1400 :0;
        minT = Mint ? Mint : 0;
        bs = 10;
        asp = socialAsp1400 ? socialAsp1400 : 1.7;
        fs = 15;
    }else {
        ang = -40;
        x = -10;
        y = 6;
        minT = 0;
        bs = 10;
        asp = socialAsp1600 ? socialAsp1600 : asp1600 ? asp1600 : 1.5;
        fs = 15;
    }
    return (
        <ResponsiveContainer
            width="100%"
            aspect={asp}
        >
            <BarChart
                data={data}
                barSize={bs}
                margin={{
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                }}
            >
                {leag ? "" : <Legend verticalAlign="top" align='right' wrapperStyle={{ lineHeight: '40px' }} iconType='square' />}
                <XAxis dataKey={DataKeyX} axisLine={false} angle={ang} dx={x} dy={y} minTickGap={minT} tickLine={false} tick={{ fontSize: fs }} />
                <YAxis axisLine={false} tickFormatter={DataFormater} tickLine={false} tick={{ fontSize: fs }} />
                <Tooltip />
                <Bar dataKey={Bar1} fill={Fill1} />
                <Bar dataKey={Bar2} fill={Fill2} />
            </BarChart>
        </ResponsiveContainer>
    )
}

const StackedBar = ({ data, DataKeyX, Bar1, Bar2, Fill1, Fill2, leag, StackId, Ang, X, Y, Mint, asp576, asp768, asp992,asp1600, socialAsp1400 }) => {
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

    const DataFormater = (number) => {
        if (number > 1000) {
            return (number / 1000).toString() + 'K';
        } else {
            return number.toString();
        }
    }
    let ang;
    let x;
    let y;
    let minT;
    let bs;
    let asp;
    let fs;

    if (windowWidth < 576 && windowWidth >= 400) {
        ang = -60;
        x = -10;
        y = 10;
        minT = -200;
        bs = 6;
        asp = 1.6;
        fs = 13;
    } else if (windowWidth <= 400) {
        ang = -60;
        x = -10;
        y = 10;
        minT = -200;
        bs = 6;
        asp = 1;
        fs = 12;
    } else if (windowWidth >= 576 && windowWidth < 768) {
        ang = 0;
        x = 0;
        y = 0;
        minT = 0;
        bs = 10;
        asp = asp576 ? asp576 : 1.7;
        fs = 15;
    } else if (windowWidth >= 768 && windowWidth < 992) {
        ang = 0;
        x = 0;
        y = 0;
        minT = 0;
        bs = 10;
        asp = asp768 ? asp768 : 1.7;
        fs = 15;
    } else if (windowWidth >= 992 && windowWidth < 1200) {
        ang = Ang ? Ang : 0;
        x = X ? X : 0;
        y = Y ? Y : 0;
        minT = Mint ? Mint : 0;
        bs = 10;
        asp = asp992 ? asp992 : 1.7;
        fs = 15;
    }  else if (windowWidth >= 1400 && windowWidth < 1600) {
        ang = Ang ? Ang : 0;
        x = X ? X : 0;
        y = Y ? Y : 0;
        minT = Mint ? Mint : 0;
        bs = 10;
        asp = asp1600 ? asp1600 : 1.7;
        fs = 15;
    }else {
        ang = -40;
        x = -10;
        y = 6;
        minT = 0;
        bs = 10;
        asp = socialAsp1400 ? socialAsp1400 : 1.5;
        fs = 15;
    }
    return (
        <ResponsiveContainer
            width="100%"
            aspect={asp}
        >
            <BarChart
                data={data}
                barSize={bs}
                margin={{
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                }}
            >
                {leag ? "" : <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} iconType='square' />}
                <XAxis dataKey={DataKeyX} axisLine={false} angle={ang} dx={x} dy={y} minTickGap={minT} tickLine={false} tick={{ fontSize: fs }} />
                <YAxis axisLine={false} tickFormatter={DataFormater} tickLine={false} tick={{ fontSize: fs }} />
                <Tooltip />
                <Bar dataKey={Bar1} stackId={StackId ? StackId : ""} fill={Fill1} />
                <Bar dataKey={Bar2} stackId={StackId ? StackId : ""} fill={Fill2} />
            </BarChart>
        </ResponsiveContainer>
    )
}

const QuadBar = ({ data, DataKeyX, Bar1, Bar2, Bar3, Bar4, Fill1, Fill2, Fill3, Fill4 }) => {
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
    let bs;
    let asp;
    let fs;
    let leg = true;
    if (windowWidth <= 364) {
        ang = -60;
        x = -10;
        y = 10;
        minT = -200;
        bs = 4;
        asp = 0.5;
        fs = 13;
        leg = false;
    } else if (windowWidth <= 576 && windowWidth > 364) {
        ang = -60;
        x = -10;
        y = 10;
        minT = -200;
        bs = 6;
        asp = 0.8;
        fs = 12;
        leg = false;
    } else if (windowWidth > 576 && windowWidth <= 768) {
        ang = 0;
        x = 0;
        y = 0;
        minT = 0;
        bs = 12;
        asp = 1.7;
        fs = 15;
        leg = false;
    } else if (windowWidth > 768 && windowWidth <= 992) {
        ang = 0;
        x = 0;
        y = 0;
        minT = 0;
        bs = 12;
        asp = 1.5;
        fs = 15;
    } else {
        ang = 0;
        x = 0;
        y = 0;
        minT = 0;
        bs = 12;
        asp = 1.7;
        fs = 15;
        leg = true;
    }
    return (
        <ResponsiveContainer width="100%" aspect={asp}>
            <BarChart
                data={data}
                barSize={bs}
            >
                <XAxis dataKey={DataKeyX} axisLine={false} angle={ang} dx={x} dy={y} minTickGap={minT} tickLine={false} tick={{ fontSize: fs }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: fs }} />
                <Tooltip />
                {!leg ? '' : <Legend align='center' />}
                <Bar dataKey={Bar1} fill={Fill1} />
                <Bar dataKey={Bar2} fill={Fill2} />
                <Bar dataKey={Bar3} fill={Fill3} />
                <Bar dataKey={Bar4} fill={Fill4} />
            </BarChart>
        </ResponsiveContainer>
    )
}

const HorizentalBar = ({ data, DataKeyY, DataKey1, DataKey2 }) => {
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

    if (windowWidth <= 560 && windowWidth >= 400) {
        minT = -200;
        asp = 1.6;
        fs = 13;
    } else if (windowWidth <= 400) {
        minT = -200;
        asp = 1;
        fs = 12;
    } else {
        minT = 0;
        asp = 1.7;
        fs = 15;
    }
    return (
        <ResponsiveContainer width="100%" aspect={asp}>
            <ComposedChart
                layout="vertical"
                data={data}
                barSize={1}
            >
                <XAxis type="number" style={{ fontSize: fs }} />
                <YAxis dataKey={DataKeyY} axisLine={false} type="category" scale="band" minTickGap={minT} style={{ fontSize: fs }} />
                <Tooltip cursor={false} />
                <Bar dataKey={DataKey1} barSize={20} fill="#FF0000" />
                <Bar dataKey={DataKey2} barSize={20} fill="#82ca9d" />
            </ComposedChart>
        </ResponsiveContainer>
    )
}

export { SingleBar, DoubleBar, QuadBar, StackedBar, HorizentalBar }