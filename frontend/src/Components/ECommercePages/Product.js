import React, { useEffect, useRef, useState } from 'react';
import { Row, Col, Container, Form } from 'react-bootstrap';
import { Grid3x3Gap, Filter, ListTask } from 'react-bootstrap-icons';
import { useSelector } from 'react-redux';
import 'rsuite/dist/rsuite.min.css';
import { useDispatch } from 'react-redux';
import { utils } from '../Store/Utils';
import Filters from './ProductPages/FilterPannel/Filters';
import GridView from './ProductPages/Listview/GridView';
import ListView from './ProductPages/Listview/ListView';
import {
  categoryList,
  brandList,
  starList,
  productDatas,
} from "./ProductDataFile/ProductsDatas";
import Topbar from '../../Hook/Topbar';
import MetaTags from '../HeadTag/MetaTags';

const Product = () => {
  const listViews = useSelector((state) => state.utils.listViews);
  const [listView, setListView] = useState(listViews ? listViews : "list");
  const [productData, setProductData] = useState("topRated");
  const dispatch = useDispatch();
  const [category, setCategory] = useState(categoryList);
  const [brand, setBrand] = useState(brandList);
  const [star, setStar] = useState(starList);
  const [selectedPrice, setSelectedPrice] = useState([0, 1500]);
  const [searchInput, setSearchInput] = useState('');
  const [list, setList] = useState(productDatas);
  const [resultsFound, setResultsFound] = useState(true);
  const priceValue = useRef([0, 1500]);
  const heading = "Products";

  const gridHandler = () => {
    setListView("grid")
  }

  const listHandler = () => {
    setListView("list")
  }

  const handleSelectRating = (id) => {
    const starStateList = star;
    const changeCheckedStar = starStateList.map((item) => (
      item.id === id ? { ...item, checked: !item.checked } : item
    ))
    setStar(changeCheckedStar);
  };

  const handleChangeCateChecked = (id) => {
    const categoryStateList = category;
    const changeCheckedCategory = categoryStateList.map((item) => (
      item.id === id ? { ...item, checked: !item.checked } : item
    ))
    setCategory(changeCheckedCategory);
  };

  const handleChangeBrandChecked = (id) => {
    const brandStateList = brand;
    const changeCheckedBrand = brandStateList.map((item) => (
      item.id === id ? { ...item, checked: !item.checked } : item
    ))
    setBrand(changeCheckedBrand);
  };

  const handleChangePrice = (value) => {
    setSelectedPrice(value);
    priceValue.current = value
  };

  const applyFilters = () => {
    let updatedList = productDatas;

    // RATING FILTER
    const starChecked = star.filter((item) => item.checked).map((item) => parseInt(item.value));
    if (starChecked.length) {
      updatedList = updatedList.filter((item) =>
        starChecked.includes(item.star)
      );
    }

    // CATEGORY FILTER
    const cateChecked = category.filter((item) => item.checked).map((item) => item.label.toLowerCase());
    if (cateChecked.length) {
      updatedList = updatedList.filter((item) =>
        cateChecked.includes(item.category)
      );
    }

    // BRAND FILTER
    const brandChecked = brand.filter((item) => item.checked).map((item) => item.label.toLowerCase());
    if (brandChecked.length) {
      updatedList = updatedList.filter((item) =>
        brandChecked.includes(item.brand)
      );
    }

    // SEARCH FILTER
    if (searchInput) {
      updatedList = updatedList.filter(
        (item) =>
          item.name.toLowerCase().search(searchInput.toLowerCase().trim()) !==
          -1
      );
    }

    // PRICE FILTER
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];
    updatedList = updatedList.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );

    setList(updatedList);
    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  }


  const handleClearFilter = () => {
    setList(productDatas)
    setCategory(categoryList)
    setBrand(brandList)
    setStar(starList)
    setProductData('topRated')
    setSelectedPrice([0, 1500])
  }

  useEffect(() => {
    applyFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [star, category, brand, searchInput, selectedPrice]);


  const topHandler = () => {
    setProductData("topRated")
    dispatch(utils.handleClick("topRated"))
    if (list.length) {
      const result = list.sort((a, b) => b.star - a.star);
      setList(result)
    } else {
      const top = productDatas.sort((a, b) => b.star - a.star);
      setList(top)
    }
  }

  const papularHandler = () => {
    setProductData("popular")
    dispatch(utils.handleClick("popular"))
    if (list.length) {
      const result = list.sort((a, b) => b.starDes - a.starDes);
      setList(result)
    } else {
      const pop = productDatas.sort((a, b) => b.starDes - a.starDes);
      setList(pop)
    }
  }

  const newestHandler = () => {
    setProductData("newest")
    dispatch(utils.handleClick("newest"))
    if (list.length) {
      const result = list.sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated))
      setList(result)
    } else {
      const newd = productDatas.sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated))
      setList(newd)
    }
  }

  const priceHandler = () => {
    setProductData("price")
    dispatch(utils.handleClick("price"))
    if (list.length) {
      const result = list.sort((a, b) => b.price - a.price);
      setList(result)
    } else {
      const pri = productDatas.sort((a, b) => b.price - a.price);
      setList(pri)
    }
  }






  return (
    <>
      <MetaTags title={heading} />
      <Topbar heading={heading} />

      <Container>
        <Row className='grid-box-row'>
          <Col md={5} lg={3} >
            <div className='grid-box fills'>
              <div className='fil'>
              <h5 className='mb-3'><Filter /> Filters</h5>
              <button onClick={handleClearFilter}>Clear Filters</button></div>
 
              <Filters
                className="mt-2"
                categories={category}
                changeCheckedfunc={handleChangeCateChecked}
                brands={brand}
                changeCheckedfunc1={handleChangeBrandChecked}
                stars={star}
                selectRating={handleSelectRating}
                selectedPrice={selectedPrice}
                changePrice={handleChangePrice}
                showPriceValue={priceValue.current}
              />
            </div>
          </Col>

          <Col md={7} lg={9}>
            <Row>
              <Col md={12} xxl={7} lg={5}>
                <Form className='product-input-field'>
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                  />
                </Form>
              </Col>

              <Col md={12} xxl={5} lg={7}>
                <div className='grid-box-heading status'>
                  <h5>Status:</h5>
                  <div className="boxsize boxsize-transparent">
                    <button className={productData === 'topRated' ? "active" : undefined} onClick={topHandler}>Top Rated</button>
                    <button className={productData === 'popular' ? "active" : undefined} onClick={papularHandler}>Popular</button>
                    <button className={productData === 'newest' ? "active" : undefined} onClick={newestHandler}>Newest</button>
                    <button className={productData === 'price' ? "active" : undefined} onClick={priceHandler}>Price</button>
                    <button onClick={gridHandler}><Grid3x3Gap /></button>
                    <button onClick={listHandler}><ListTask /></button>
                  </div>
                </div>
              </Col>
            </Row>


            {listView === "grid" && (
              <GridView
                grid={list}
                DataFound={resultsFound}
              />
            )}

            {listView === "list" && (
              <ListView
                list={list}
                DataFound={resultsFound}
              />
            )}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Product;