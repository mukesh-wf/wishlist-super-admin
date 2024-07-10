import React from "react";
import "../../Components/ChartPage/Chartpage.css";
import { Table } from "react-bootstrap";

const Tablelist = (props) => {
    // const formatDate = (dateString) => {
    //     const dateObj = new Date(dateString);
    //     return dateObj.toISOString().split('T')[0];
    // };
   
 
    

    return (
        <>
            <Table className="h-100 w-100">
                <thead className="">
                    <tr>
                        {props.tabledata.thead.map((cell, index) => (
                            <th key={index} className="border border-light">
                                {cell.title}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {props.tabledata.tbody.length > 0 ? (
                        props.tabledata.tbody.map((row, rowindex) => (
                            <tr key={rowindex}>
                                {props.tabledata.thead.map((cell, cellindex) => (
                                    <td key={cellindex}>
                                        {cell.type === "text" && row[cell.key] === "" ? "--" : row[cell.key]}
                                        {cell.type === "index" && rowindex + 1}
                                        {cell.type === "action" && (
                                            <div className="d-flex align-items-center justify-content-center gap-2">
                                                {cell.icon.map((Icon, iconindex) => (
                                                    <Icon.element
                                                        onClick={() => Icon.action(row.shop_name)}
                                                        key={iconindex}
                                                        size={"22px"}
                                                        cursor={"pointer"}
                                                        color={Icon.color}
                                                    />
                                                ))}
                                            </div>
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={props.tabledata.thead.length} className="text-center">
                                NO DATA TO SHOW!
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </>
    );
};

export default Tablelist;

