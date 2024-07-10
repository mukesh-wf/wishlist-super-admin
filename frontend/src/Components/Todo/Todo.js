import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Container, InputGroup, Form, Row, Col, Table } from 'react-bootstrap';
import { TrashFill, StarFill, GripHorizontal } from 'react-bootstrap-icons'
import { DragDropContext, Draggable } from "react-beautiful-dnd";
import { StrictModeDroppable as Droppable } from "./StictModeDroppable";
import './Todo.css'
import '../User/Userlisting.scss'
import todolist from '../Data/Todo/Todo.json'
import Topbar from '../../Hook/Topbar';
import MetaTags from '../HeadTag/MetaTags';

const Todo = () => {
  const [show, setShow] = useState(false);
  const [test, setTest] = useState(false)
  const [todo, setTodo] = useState("");
  const [task, setTask] = useState([])
  const heading = "To Do"

  let getItem = JSON.parse(localStorage.getItem("List")) === null ? [] : JSON.parse(localStorage.getItem("List"));

  useEffect(() => {
    if (getItem.length === 0) {
      setTask(todolist)
    } else {
      setTask(getItem)
    }
    // eslint-disable-next-line
  }, [test])

  const handleShow = () => {
    setShow(true)
  }

  const handleClose = () => {
    setShow(false)
  }

  const submithandle = () => {
    const NewList = JSON.parse(localStorage.getItem("List"))  === null ? [] : JSON.parse(localStorage.getItem("List"))
    if (NewList.length === 0) {
      const state = { id: JSON.stringify(todolist.length + 1), name: todo, isDragging: false }
      setTask([...todolist, state])
      localStorage.setItem("List", JSON.stringify([...todolist, state]))
    } else {
      const state = { id: JSON.stringify(NewList.length + 1), name: todo, isDragging: false }
      setTask([...NewList, state])
      localStorage.setItem("List", JSON.stringify([...NewList, state]))
    }
    setTodo("")
    setTest(true)
  }


  const removeTask = (ele) => {
    const newTodo = task.filter((val, index) => {
      return index !== ele;
    })
    setTask(newTodo)
    localStorage.setItem("List", JSON.stringify(newTodo))
    setTest(true)
  }

  const handleColor = (event) => {
    if (event.currentTarget.style.color === "") {
      event.currentTarget.style.color = "red";
    } else if (event.currentTarget.style.color === "rgb(173, 180, 210)") {
      event.currentTarget.style.color = "red";
    } else {
      event.currentTarget.style.color = 'rgb(173, 180, 210)';
    }
  }

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(task);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTask(items);
  }

  let deletedTask = [];
  const deleteChange = (ele) => {
    const newTodo = task.filter((val, index) => {
      return index === ele;
    });
    deletedTask.push(...newTodo);
  };

  const handlealldelete = () => {
    const newDeletedTask = new Set(deletedTask);
    const newDisplayTask = task.filter((name) => {
      return !newDeletedTask.has(name);
    });
    setTask(newDisplayTask)
    localStorage.setItem("List", JSON.stringify(newDisplayTask));
    setTest(true);
  };


  return (
    <>
      <MetaTags title={heading} />
      <Topbar heading={heading} />

      <Container className='contactlist-page'>
        <Row>
          <Col>
            <div className='grid-box table-responsive todo-page'>
              <h5>Task List</h5>
              <Table>
                <tbody>
                  <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId="ROOT">
                      {(provided, _) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                          {task.map(({ id, name }, index) => {
                            return (
                              <Draggable
                                key={id}
                                draggableId={"ROOT-" + id}
                                index={index}
                              >
                                {(provided) => (
                                  <tr
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                  >
                                    <td>
                                      <Form.Check
                                        inline
                                        name="group1"
                                        type="checkbox"
                                        onChange={() => deleteChange(index)}
                                      />
                                      {name}
                                    </td>
                                    <td>
                                      <p>
                                        <span {...provided.dragHandleProps} className='mx-2 grab'><GripHorizontal /></span>
                                        <span
                                          className="clickMeTodo mx-2"
                                          onClick={handleColor}
                                        >
                                          <StarFill />
                                        </span>
                                        <span
                                          className="mx-2 click"
                                          onClick={() => removeTask(index)}
                                        >
                                          <TrashFill />
                                        </span>
                                      </p>
                                    </td>
                                  </tr>
                                )}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  </DragDropContext>
                </tbody>
              </Table>
              <div className='todo-page-btn'>
                <button className='form-btn' onClick={handleShow} type="submit">Add New</button>
                <button className='form-cancel' type="submit" onClick={() => handlealldelete()}>Delete Selected</button>
              </div>
            </div>
          </Col>
        </Row>


        <Modal show={show} onHide={handleClose} className='mt-5 p-5'>
          <Modal.Header closeButton>
            <h5 className='modal-heading'>Add New Todo</h5>
          </Modal.Header>
          <Modal.Body>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Enter new item"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
              />
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <button className='form-btn' onClick={() => { handleClose(); submithandle() }} type="submit">Add New</button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  )
}

export default Todo;