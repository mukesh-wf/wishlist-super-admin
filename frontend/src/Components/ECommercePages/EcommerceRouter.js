import React from 'react';
import { Routes, Route } from 'react-router';
import Product from './Product';
import ProductDetail from './ProductDetail';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import Orders from './Orders';
import Sellers from './Sellers';
import Invoice from './Invoice';
import Cart from './Cart';
import PageNotFound from '../404Error/PageNotFound';

const EcommerceRouter = () => {
  return (
    <Routes>
      <Route exact path="/productDetail/:id" element={<ProductDetail />} />
      <Route exact path="/addProduct" element={<AddProduct />} />
      <Route exact path="/updateProduct" element={<UpdateProduct />} />
      <Route exact path="/orders/" element={<Orders />} />
      <Route exact path="/Sellers" element={<Sellers />} />
      <Route exact path="/Invoice" element={<Invoice />} />
      <Route exact path="/cart" element={<Cart />} />
      <Route exact path="/listview" element={<Product />} />
      <Route exact path="/gridview" element={<Product />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default EcommerceRouter;