import React from "react";
import { RangeSlider } from "rsuite";
import "rsuite/dist/rsuite.min.css";

const Index = ({ value, changePrice }) => {
  return (
    <RangeSlider
      min={0}
      max={1500}
      value={value}
      defaultValue={[0, 1500]}
      onChange={changePrice}
    />
  );
};

export default Index;
