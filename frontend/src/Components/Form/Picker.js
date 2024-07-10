import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Form from "react-bootstrap/Form";
import { useDropzone } from 'react-dropzone';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';


const DatePick = ({addClass}) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker className={`${addClass !== undefined ? addClass : ""}`} selected={startDate} onChange={(date) => setStartDate(date)} />
  );
};


const MonthPick = () => {
  const [startMonth, setStartMonth] = useState(new Date());
  return (
    <DatePicker
      selected={startMonth}
      onChange={(date) => setStartMonth(date)}
      dateFormat="MM/yyyy"
      showMonthYearPicker
    />
  );
};


const TimePick = () => {
  const [startTime, setStartTime] = useState(new Date());
  return (
    <DatePicker
      selected={startTime}
      onChange={(date) => setStartTime(date)}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={15}
      timeCaption="Time"
      dateFormat="h:mm aa"
    />
  );
};


const ColorPick = () => {
  return (
    <Form.Control
      type="color"
      id="exampleColorInput"
      defaultValue="#563d7c"
      title="Choose your color"
    />
  )
};


const DateRange = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  return (
    <DatePicker
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      onChange={(update) => {
        setDateRange(update);
      }}
      withPortal
    />
  );
};

function DropZoneComp(props) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="dropzone-section">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        Drag 'n' drop some files here, or click to select files
      </div>
      <aside>
        <ul>{files}</ul>
      </aside>
    </section>
  );
}

const Editor = () => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ size: [] }],
      [{ font: [] }],
      [{ align: ["right", "center", "justify"] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ color: ["red", "#785412"] }],
      [{ background: ["red", "#785412"] }]
    ]
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "color",
    "image",
    "background",
    "align",
    "size",
    "font"
  ];

  const [code, setCode] = useState("What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?");
  const handleProcedureContentChange = (content) => {
    setCode(content);
  };

  return (
    <div>
      <ReactQuill
        modules={modules}
        formats={formats}
        value={code}
        onChange={handleProcedureContentChange}
      />
    </div>
  )
}


export { DatePick, MonthPick, TimePick, ColorPick, DateRange, DropZoneComp, Editor };