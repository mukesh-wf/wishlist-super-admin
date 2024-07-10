import React, { useEffect, useState } from 'react';
import { Row, Container, Table } from 'react-bootstrap';
import Form from "react-bootstrap/Form";
import contacts from '../Data/Contacts/Contacts.json';
import { useForm, } from 'react-hook-form';
import { StarFill, Trash, Pen, Plus } from 'react-bootstrap-icons';
import Paginate from '../../Hook/Paginate';
import FormModal from './Common/FormModal';
import './Contacts.css';
import { useSelector } from "react-redux";
import _ from 'underscore';
import RecordNotFound from '../../Hook/RecordNotFound';
import MetaTags from '../HeadTag/MetaTags';

const ContactList = ({ showData, msgText }) => {
  const getContacts = localStorage.getItem("Contacts") === null ? [] : JSON.parse(localStorage.getItem("Contacts"));

  const [show, setShow] = useState(false);
  const [task, setTask] = useState(contacts);
  const [test, setTest] = useState(false);
  const [edit, setEdit] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [page, setPage] = useState(false);
  const [msg, setMsg] = useState('');
  const taskPerPage = 4;
  const displayTasks = useSelector(state => state.utils.displayTask, _.isEqual);
  let defaultPic = "https://demo.dashboardmarket.com/strikingdash-vue/img/1.459b89d8.png";

  const search = () => {
    if (searchInput) {
      const searchList = task.filter((item) => {
        return item.name.toLowerCase().search(searchInput.toLowerCase().trim()) !== -1
      })
      setTask(searchList)
      setPage(true)
    }
  }

  useEffect(() => {
    if (getContacts.length === 0) {
      setTask(contacts)
    } else {
      setTask(getContacts)
    }
    if (showData || msgText) {
      setShow(showData)
      setMsg(msgText)
    }
    search();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [test, searchInput])

  const { reset, control,
    handleSubmit,
    formState: { errors }, } = useForm();

  const handleShow = () => {
    setMsg("Add New")
    setShow(true)
  }

  const handleClose = () => {
    setShow(false)
  }

  const onSubmit = (data) => {
    const NewContacts = localStorage.getItem("Contacts") === null ? [] : JSON.parse(localStorage.getItem("Contacts"));
    if (NewContacts.length === 0) {
      const state = { id: JSON.stringify(contacts.length + 1), img: defaultPic, ...data, }
      setTask([...contacts, { id: contacts.length + 1, img: defaultPic, ...data }])
      localStorage.setItem("Contacts", JSON.stringify([...contacts, state]))
    }
    else if (edit) {
      NewContacts.filter((item) => {
        if (parseInt(item.id) === data.id) {
          console.log("yes")
          return (
            item.name = data.name,
            item.email = data.email,
            item.phone = data.phone,
            item.position = data.position,
            item.company = data.company
          )
        }
        return null
      })

      setTask(NewContacts)
      console.log("new", task)
      localStorage.setItem("Contacts", JSON.stringify(NewContacts))
      setTest(true)
    }
    else {
      const state = { id: JSON.stringify(NewContacts.length + 1), img: defaultPic, ...data }
      setTask([...NewContacts, { id: contacts.length + 1, img: defaultPic, ...data }])
      localStorage.setItem("Contacts", JSON.stringify([...NewContacts, state]))
    }
    reset({
      name: "",
      email: "",
      phone: "",
      position: "",
      company: ""
    })
    setTest(true)
    handleClose()
  }

  const removeTask = (ele) => {
    const newContact = task.filter((val, index) => {
      return val.id !== ele
    })
    setTask(newContact)
    localStorage.setItem("Contacts", JSON.stringify(newContact))
    setTest(true)
    setPage(true)
  }

  const editTask = (ele) => {
    setShow(true)
    setMsg('Save')
    let editData = task.find((item) => {
      return item.id === ele
    })
    reset(editData)
    setTest(true)
    setEdit(true)
  }

  const handleColor = (event) => {
    if (event.currentTarget.style.color === "") {
      event.currentTarget.style.color = "red";
    } else if (event.currentTarget.style.color === "black") {
      event.currentTarget.style.color = "red";
    } else {
      event.currentTarget.style.color = 'black';
    }
  }

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

      {task.length === 0
        ?
        <RecordNotFound />
        :
        <Container className='contactlist-page'>
            <Row className='grid-box'>
              <div className='table-responsive'>
              <Table >
                <thead>
                  <tr>
                    <th>Users</th>
                    <th>Email</th>
                    <th>Company</th>
                    <th>Position</th>
                    <th>Phone </th>
                    <th>Actions</th>
                  </tr>
                </thead>

                {displayTasks.map((val, index) => {
                  return (
                    <tbody key={index}>
                      <tr>
                        <td><img src={val.img} style={{ width: "35px" }} alt="aaaa" /> {val.name}</td>
                        <td>{val.email}</td>
                        <td>{val.company}</td>
                        <td>{val.position}</td>
                        <td>{val.phone}</td>
                        <td width={'100px'} className='btn-field'>
                          <span className="click mx-2" onClick={handleColor}><StarFill /></span>
                          <button onClick={() => editTask(val.id)}><Pen /></button>
                          <button onClick={() => removeTask(val.id)} className='edit-btn'><Trash /></button>
                        </td>
                      </tr>
                    </tbody>
                  )
                })}
              </Table>

              <div className='class-pagination'>
                <Paginate
                  tasksPerPage={taskPerPage}
                  totalTasks={task.length}
                  data={task}
                  page={page}
                />
              </div>
              </div>
            </Row>
        </Container>
      }
    </>
  )

}

export default ContactList;