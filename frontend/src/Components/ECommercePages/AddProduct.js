import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Form from "react-bootstrap/Form";
import { useForm, Controller } from 'react-hook-form';
import * as errorConstant from '../../Constant/ErrorPage';
import Swal from 'sweetalert2';
import { Percent, CurrencyRupee, Upload, Trash2Fill } from 'react-bootstrap-icons';
import Topbar from '../../Hook/Topbar';
import MetaTags from '../HeadTag/MetaTags';

const AddProduct = ({ headings, title, addReset, imageUrl }) => {
  const heading = "Add Product";
  const [blobUrl, setBlobUrl] = useState();
  const { reset, control,
    handleSubmit,
    formState: { errors }, } = useForm();

  useEffect(() => {
    if (imageUrl) {
      fetch(imageUrl)
        .then(response => response.blob())
        .then(blob => {
          setBlobUrl(URL.createObjectURL(blob));
        })
    }

    if (addReset) {
      reset(addReset)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onSubmit = () => {
    reset({
      name: "",
      subText: "",
      category: "",
      price: "",
      discount: "",
      status: "",
      textArea: " ",
      meta: "",
      metaKeyword: ""
    })
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: title ? title : 'Product Added Successfully',
      showConfirmButton: false,
      timer: 1500
    })
  }
  const [imagesArray, setImagesArray] = useState([]);

  const handleUpload = (e) => {
    e.preventDefault();
    let file = e.target.files[0];

    const allowedTypes = ['image/jpeg', 'image/png', 'image/svg'];
    if (!allowedTypes.includes(file.type)) {

    }
    if (file && allowedTypes.includes(file.type) && file.type !== "") {

    } else {

    }
    if (imagesArray.length !== 0 && allowedTypes.includes(file.type)) {
      setImagesArray([...imagesArray, { file: file }])
    }
    else {
      if (!allowedTypes.includes(file.type)) {

      }
      else {
        setImagesArray([{ file: file }])
      }
    }
  }

  const handleDel = (index) => {
    const aa = [...imagesArray]
    aa.splice(index, 1)
    setImagesArray(aa)
  }

  return (
    <>
      <MetaTags title={headings ? headings : heading} />
      <Topbar heading={headings ? headings : heading} />

      <Container>
        <Row className='addproduct-page-main'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Col xs={12} md={7} className='mx-auto'>
              <div className='grid-box addProduct-page'>
                <div className='grid-box-heading'>
                  <h5>About Product</h5>
                </div>
                <Form.Group className="mb-3">
                  <Form.Label>Product Name</Form.Label>
                  <Controller
                    name="name"
                    control={control}
                    defaultValue={""}
                    rules={{ required: true }}
                    render={({ field }) => <Form.Control type="text" placeholder="Enter Name" {...field} />}
                  />
                  {errors.name && <span className='error'>{errorConstant.VALIDATE}</span>}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Sub Text</Form.Label>
                  <Controller
                    name="subText"
                    control={control}
                    defaultValue={""}
                    rules={{ required: true }}
                    render={({ field }) => <Form.Control type="text" placeholder="Enter Sub Text" {...field} />}
                  />
                  {errors.subText && <span className='error'>{errorConstant.VALIDATE}</span>}
                </Form.Group>

                <Form.Group className='mb-3'>
                  <Form.Label>Category</Form.Label>
                  <Controller
                    name="category"
                    control={control}
                    defaultValue={""}
                    rules={{ required: true }}
                    render={({ field }) =>
                      <Form.Select aria-label="Default select example" {...field}>
                        <option>select</option>
                        <option value={"Clothing"} >Clothing</option>
                        <option value={"Electronics"} >Electronics</option>
                        <option value={"Footwear"} >Footwear</option>
                      </Form.Select>
                    }
                  />
                  {errors.category && <span className='error'>{errorConstant.VALIDATE}</span>}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Price</Form.Label>
                  <span className='form-with-icon'>
                    <span><CurrencyRupee /></span>
                    <Controller
                      name="price"
                      control={control}
                      defaultValue={""}
                      rules={{ required: true }}
                      render={({ field }) => <Form.Control type="number" placeholder="0" {...field} />}
                    />
                  </span>
                  {errors.price && <span className='error'>{errorConstant.VALIDATE}</span>}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Discount</Form.Label>
                  <span className='form-with-icon'>
                    <span><Percent /></span>
                    <Controller
                      name="discount"
                      control={control}
                      defaultValue={""}
                      rules={{ required: true }}
                      render={({ field }) => <Form.Control type="number" placeholder="0" {...field} />}
                    />
                  </span>
                  {errors.discount && <span className='error'>{errorConstant.VALIDATE}</span>}
                </Form.Group>

                <Form.Group className='mb-3'>
                  <Form.Label>Status</Form.Label>
                  <Controller
                    name="status"
                    control={control}
                    defaultValue={""}
                    rules={{ required: true }}
                    render={({ field }) =>
                      <div {...field}>
                        <Form.Check
                          inline
                          name='status'
                          type="radio"
                          value="Draft"
                          label="Draft"
                        />

                        <Form.Check
                          inline
                          name='status'
                          type="radio"
                          value="Published"
                          label="Published"

                        />
                      </div>
                    }

                  />
                  {errors.status && <span className='error'>{errorConstant.VALIDATE}</span>}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Product Description</Form.Label>
                  <Controller
                    name="textArea"
                    control={control}
                    defaultValue={""}
                    as="textarea"
                    rows={3}
                    rules={{ required: true }}
                    render={({ field }) => <Form.Control type="textarea" {...field} />}
                  />
                  {errors.textArea && <span className='error'>{errorConstant.VALIDATE}</span>}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Meta Title</Form.Label>
                  <Controller
                    name="meta"
                    control={control}
                    defaultValue={""}
                    rules={{ required: true }}
                    render={({ field }) => <Form.Control type="text" {...field} />}
                  />
                  {errors.meta && <span className='error'>{errorConstant.VALIDATE}</span>}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Meta Keyword</Form.Label>
                  <Controller
                    name="metaKeyword"
                    control={control}
                    defaultValue={""}
                    rules={{ required: true }}
                    render={({ field }) => <Form.Control type="text" {...field} />}
                  />
                  {errors.metaKeyword && <span className='error'>{errorConstant.VALIDATE}</span>}
                </Form.Group>
              </div>
            </Col>

            <Col xs={12} md={7} className='mx-auto'>
              <div className='grid-box'>
                <Form.Group className="mb-3">
                  <Form.Label>Product Image</Form.Label>
                  <span className='imageMain'>
                    <span className='imageInner'>
                      <span className='imageIcon'><Upload /></span>
                      <span className='imageHeading'>Drag and Drop and Image</span>
                      <span className='imageSubheading'>or <span>Browse</span> to choose a file</span>
                    </span>
                    <Controller
                      name="productImage"
                      control={control}
                      defaultValue={""}
                      rules={{ required: true }}
                      render={({ field }) => <Form.Control className='imageInput' type="file" {...field} accept="image/*" onChange={(e) => handleUpload(e)} />}
                    />
                  </span>
                  {errors.metaKeyword && <span className='error'>{errorConstant.VALIDATE}</span>}
                </Form.Group>

                <div>
                  {blobUrl &&
                    <div className='imagePre'>
                      <span>
                        <img src={blobUrl ? blobUrl : ""} alt={'Dinner Plate'} style={{ height: 70, width: 70 }} />
                        <span className='imageName'>{"dinnerplate.png"}</span>
                      </span>
                      <span onClick={() => setBlobUrl()}><Trash2Fill /></span>
                    </div>
                  }

                  {imagesArray.length !== 0 && imagesArray.map((item, index) => {
                    return (
                      <div key={index} className='imagePre'>
                        <span>
                          <img src={item.file ? URL.createObjectURL(item.file) : ""} alt={item.file.name} style={{ height: 70, width: 70 }} />
                          <span className='imageName'>{item.file.name}</span>
                        </span>
                        <span onClick={() => handleDel(index)}><Trash2Fill /></span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </Col>

            <Col xs={12} md={6} className='mx-auto mb-5'>
              <div className='productadd'>
                <button className='form-cancel' type="submit">Cancel</button>
                <button className="form-btn" type="submit">Save Product</button>
              </div>
            </Col>
          </form>
        </Row>
      </Container>
    </>
  )
}

export default AddProduct;

