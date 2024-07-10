import React from "react";
import Form from "react-bootstrap/Form";

const index1 = ({ brand, changeChecked1 }) => {
  const { checked, label, id } = brand;

  return (
    <>
      <Form>
        <Form.Check
          className="d-flex justify-content-between"
        >
          <Form.Check.Label htmlFor={label}>{label}</Form.Check.Label>
          <Form.Check.Input
            type="checkbox"
            id={label}
            isValid
            checked={checked}
            onChange={() => changeChecked1(id)}
          />
        </Form.Check>
      </Form>
    </>
  );
};

export default index1;
