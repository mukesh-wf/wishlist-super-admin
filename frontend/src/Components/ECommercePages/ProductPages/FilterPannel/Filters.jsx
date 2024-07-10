import React from "react";
import Checkboxes1 from "../../Common/Checkboxes/Index";
import Checkboxes2 from "../../Common/Checkboxes/Index1";
import Checkboxes3 from "../../Common/Checkboxes/Index2";
import Slider from "../../Common/Slider/Index";
import { Row, Col } from "react-bootstrap";

const Filter = ({
  categories,
  changeCheckedfunc,
  brands,
  changeCheckedfunc1,
  stars,
  selectRating,
  selectedPrice,
  changePrice,
  showPriceValue,
}) => {
  return (
    <Row>
      <Col>
        {/* SLIDER */}
        <div className="filters">
          <h5 className="filter-heading">Price Range</h5>
          <Slider value={selectedPrice} changePrice={changePrice} className='slider'/>
          <p>
            ${showPriceValue[0]} - ${showPriceValue[1]}
          </p>
        </div>

        {/* CATEGORY */}
        <div className="filters">
          <h5 className="filter-heading">Category</h5>
          {categories.map((item) => {
            return (
              <Checkboxes1
                key={item.id}
                category={item}
                changeChecked={changeCheckedfunc}
              />
            );
          })}
        </div>

        {/* BRAND */}
        <div className="filters">
          <h5 className="filter-heading">Brand</h5>
          {brands.map((item) => {
            return (
              <Checkboxes2
                key={item.id}
                brand={item}
                changeChecked1={changeCheckedfunc1}
              />
            );
          })}
        </div>

        {/* RATING */}
        <div className="filters">
          <h5 className="filter-heading">Star Rating</h5>
          {stars.map((item) => {
            return (
              <Checkboxes3
                key={item.id}
                star={item}
                changeChecked2={selectRating}
              />
            );
          })}
        </div>
      </Col>
    </Row>
  );
};

export default Filter;
