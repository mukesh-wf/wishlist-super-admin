import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { Col, Row, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import RecordNotFound from '../../../Hook/RecordNotFound';
import { utils } from '../../Store/Utils';
import Paginate from '../../../Hook/Paginate';

const TableListing = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let role = useSelector(state => state.utils.role);
  let plan = useSelector(state => state.utils.plan);
  let status = useSelector(state => state.utils.status);
  let indexValues = useSelector(state => state.utils.index);
  let list = props.list;

  if (plan === "" || plan === null || plan === undefined) {
    plan = "all"
  }
  if (status === "" || status === null || status === undefined) {
    status = "all"
  }
  if (role === "" || role === null || role === undefined) {
    role = "all"
  }
  useEffect(() => {
    dispatch(utils.refresh({ postsPerPage: props.tasksPerPage }))
    navigate({
      pathname: "/user/tbllisting/" + props.currentPage,
      search: "?role=" + role + "&plan=" + plan + "&status=" + status + " ",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.currentPage])

  const deleteHanlder = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  let map = new Map();
  map.set("newIndex", { val: parseInt(indexValues) })
  map.get("newIndex").val++

  return (
    <div className='userlist-box UserListing-role tbllisting-page'>
      {list.length !== 0
        ?
        <div className='grid-box'>
          <div className='table-responsive'>
            <Table >
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Plan</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {props.currentTask.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{map.get("newIndex").val++}</td>
                      <td >{item.name} </td>
                      <td >{item.role} </td>
                      <td >{item.plan} </td>
                      <td>{item.status === 'active' ? <Button variant="success">{item.status}</Button> : <Button variant="danger">{item.status}</Button>}
                      </td>
                      <td >
                        <Row className='justify-content-center'>
                          <Col lg={2}>
                            <Button onClick={() => { deleteHanlder(item.id) }}>
                              <i className="fa-solid fa-trash"></i>
                            </Button>
                          </Col>
                          <Col lg={2}>
                            <Button>
                              <NavLink to={"/user/edit/" + item.id}>
                                <i className="fa-solid fa-pen-to-square"></i>
                              </NavLink>
                            </Button>
                          </Col>
                        </Row>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
          </Table>
          </div>
          <div className='class-pagination'>
            <Paginate
              tasksPerPage={props.tasksPerPage}
              totalTasks={list.length}
              newCurrentPage={props.currentPage}
              data={list}
            />
          </div>
        </div>
        :
        <RecordNotFound />
      }
    </div>
  )
}

export default TableListing;
