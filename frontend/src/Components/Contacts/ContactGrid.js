import React, { useEffect, useState } from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import contacts from "../Data/Contacts/Contacts.json";
import { Telephone, Envelope, GeoAlt, Plus } from "react-bootstrap-icons";
import { useForm } from "react-hook-form";
import FormModal from "./Common/FormModal";
import "./Contacts.css";
import RecordNotFound from "../../Hook/RecordNotFound";
import MetaTags from "../HeadTag/MetaTags";

const ContactGrid = () => {
  const getContacts = localStorage.getItem("Contacts") === null ? [] : JSON.parse(localStorage.getItem("Contacts"));
  const [show, setShow] = useState(false);
  const [task, setTask] = useState([]);
  const [test, setTest] = useState(false);
  const [edit, setEdit] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [msg, setMsg] = useState("");
  let defaultPic =
    "https://demo.dashboardmarket.com/strikingdash-vue/img/1.459b89d8.png";

  const search = () => {
    if (searchInput) {
      const searchList = task.filter((item) => {
        return (
          item.name.toLowerCase().search(searchInput.toLowerCase().trim()) !==
          -1
        );
      });
      setTask(searchList);
    }
  };

  useEffect(() => {
    if (getContacts.length === 0) {
      setTask(contacts);
    } else {
      setTask(getContacts);
    }
    search();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [test, searchInput]);

  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleShow = () => {
    setShow(true);
    setMsg('Add New')
  };

  const handleClose = () => {
    setShow(false);
  };

  const onSubmit = (data) => {
    const NewContacts = localStorage.getItem("Contacts") === null ? [] : JSON.parse(localStorage.getItem("Contacts"));
    if ( NewContacts.length !== 0) {
      const state = {
        id: JSON.stringify(contacts.length + 1),
        img: defaultPic,
        ...data,
      };
      setTask([
        ...contacts,
        { id: contacts.length + 1, img: defaultPic, ...data },
      ]);
      localStorage.setItem("Contacts", JSON.stringify([...contacts, state]));
    } else if (edit === true) {
      NewContacts.filter((item) => {
        if (parseInt(item.id) === data.id) {
          return (
            (item.name = data.name),
            (item.email = data.email),
            (item.phone = data.phone),
            (item.position = data.position),
            (item.company = data.company)
          );
        }
        return null;
      });
      setTask(NewContacts);
      localStorage.setItem("Contacts", JSON.stringify(NewContacts));
      setTest(true);
    } else {
      const state = {
        id: JSON.stringify(NewContacts.length + 1),
        img: defaultPic,
        ...data,
      };
      setTask([
        ...NewContacts,
        { id: contacts.length + 1, img: defaultPic, ...data },
      ]);
      localStorage.setItem("Contacts", JSON.stringify([...NewContacts, state]));
    }
    reset({
      name: "",
      email: "",
      phone: "",
      position: "",
      company: "",
    });
    setTest(true);
    handleClose();
  };

  const removeTask = (ele) => {
    const newContact = task.filter((val, index) => {
      return val.id !== ele;
    });
    setTask(newContact);
    localStorage.setItem("Contacts", JSON.stringify(newContact));
    setTest(true);
  };

  const editTask = (ele) => {
    setMsg('Save')
    setShow(true);
    let editData = task.find((item) => {
      return item.id === ele;
    });
    reset(editData);
    setTest(true);
    setEdit(true);
  };

  return (
    <>
      <MetaTags title="Contacts" />
      <div className="page-header contact">
        <div className="heading-form">
          <h2>Contacts</h2>
          <Form>
            <Form.Control
              type="search"
              placeholder="Search User"
              aria-label="Search User"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </Form>
        </div>
        <div className="addnew-user">
          <button className="form-btn" onClick={handleShow} type="submit"><Plus className="plus" />Add New</button>
          <FormModal
            show={show}
            handleClose={handleClose}
            onSubmit={handleSubmit(onSubmit)}
            errors={errors}
            control={control}
            msg={msg}
          />
        </div>
      </div>

      <div >
        {task.length === 0 ? (
          <RecordNotFound />
        ) : (
          <Container>
            <Row className="userlist-box UserListing-role">
              {task.map((val, index) => {
                return (
                  <React.Fragment key={index}>
                    <Col lg={3} md={6}>
                      <Card className="mb-4">
                        <Card.Img src={val.img} />
                        <Card.Body>
                          <h3>{val.name}</h3>
                          <h4>{val.position}</h4>
                          <div className="contactuser-detail">
                            <Card.Subtitle className="text-muted text-start">
                              <h5>
                                <Telephone /> {val.phone}
                              </h5>
                            </Card.Subtitle>
                            <Card.Subtitle className="text-muted text-start">
                              <h5>
                                <Envelope /> {val.email}
                              </h5>
                            </Card.Subtitle>
                            <Card.Subtitle className="text-muted text-start">
                              <h5>
                                <GeoAlt /> {val.company}
                              </h5>
                            </Card.Subtitle>
                          </div>
                          <Row className="userlisting-btn">
                            <Button onClick={() => editTask(val.id)}>
                              <i className="fa-solid fa-pen-to-square"></i>
                            </Button>
                            <Button onClick={() => removeTask(val.id)}>
                              <i className="fa-solid fa-trash"></i>
                            </Button>
                          </Row>
                        </Card.Body>
                      </Card>
                    </Col>
                  </React.Fragment>
                );
              })}
            </Row>
          </Container>
        )}
      </div>
    </>
  );
};

export default ContactGrid;
