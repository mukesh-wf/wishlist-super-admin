import React, { useState, useRef, useEffect } from 'react';
import { Facebook, Share, Plus, BoxArrowDown, CalendarDay, Linkedin, Instagram, Twitter, Wifi, Printer, Book, FileExcel, File, FileText } from 'react-bootstrap-icons'
import { NavLink } from 'react-router-dom';
import './CustomHook.css';
import Calendar from 'react-calendar';

const Topbar = ({ heading }) => {
    const [exportvalue, setExportvalue] = useState(false)
    const [share, setShare] = useState(false)
    const [cal, setCal] = useState(false);
    const clickOutside = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (clickOutside && clickOutside.current && !clickOutside.current.contains(event.target)) {
                setCal(false);
                setExportvalue(false)
                setShare(false)
            }
        };
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [clickOutside]);


    return (
        <>
            <div className='page-header'>
                <h2>{heading}</h2>
                <div className="HeaderBoxes">
                    <button onClick={() => setCal(true)}><CalendarDay />Calender </button>
                    {cal &&
                        <div className='calDiv' ref={clickOutside}>
                            <Calendar />
                        </div>
                    }

                    <button onClick={() => setExportvalue(true)} ><BoxArrowDown className="boxArrow" />Export</button>
                    {exportvalue &&
                        <ul className='author-setting' ref={clickOutside}>
                            <li><NavLink to={"#"}><Printer />Printer</NavLink></li>
                            <li><NavLink to={"#"}><Book />PDF</NavLink></li>
                            <li><NavLink to={"#"}><FileExcel />Excel (XLSX)</NavLink></li>
                            <li><NavLink to={"#"}><FileText />Google Sheet</NavLink></li>
                            <li><NavLink to={"#"}><File />CSV</NavLink></li>
                        </ul>
                    }

                    <button onClick={() => setShare(true)} ><Share className="share" />Share</button>
                    {share &&
                        <div className='headerBox-Share' ref={clickOutside}>
                            <ul className='author-setting'>
                                <li><NavLink to={"#"}><Facebook />Facebook</NavLink></li>
                                <li><NavLink to={"#"}><Linkedin />Linkedin</NavLink></li>
                                <li><NavLink to={"#"}><Twitter />Twitter</NavLink></li>
                                <li><NavLink to={"#"}><Instagram />Instagram</NavLink></li>
                                <li><NavLink to={"#"}><Wifi />Feed</NavLink></li>
                            </ul>
                        </div>
                    }
                    <button><Plus className="plus" />Add New</button>
                </div>
            </div >
        </>
    )
}

export default Topbar