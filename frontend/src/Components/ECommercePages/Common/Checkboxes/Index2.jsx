import React from "react";
import Form from "react-bootstrap/Form";
import { Rate } from "rsuite";
import "../../Ecom.css";

const index1 = ({ star, changeChecked2 }) => {
  const { checked, label, id, starRating, value } = star;

  return (
    <>
      <Form>
        <Form.Check className="d-flex justify-content-between">
          <Form.Check.Label htmlFor={starRating}>
            {label}
            <Rate max={value} readOnly size="xs" />
          </Form.Check.Label>
          <Form.Check.Input
            type="checkbox"
            id={starRating}
            isValid
            checked={checked}
            onChange={() => changeChecked2(id)}
          />
        </Form.Check>
      </Form>
    </>
  );
};

export default index1;
