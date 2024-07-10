import React from "react";
import Form from "react-bootstrap/Form";

const index = ({ category, changeChecked }) => {
  const { checked, label, id } = category;

  return (
    <>
      <Form>
        <Form.Check
          className="d-flex justify-content-between"
        >
          <Form.Check.Label htmlFor={id}>{label}</Form.Check.Label>
          <Form.Check.Input
            type="checkbox"
            id={id}
            isValid
            checked={checked}
            onChange={() => changeChecked(id)}
          />
        </Form.Check>
      </Form>
    </>
  );
};

export default index;
