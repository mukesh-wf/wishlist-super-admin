import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import RecordNotFound from '../../../Hook/RecordNotFound';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { utils } from '../../Store/Utils';
import User from '../../Data/User/User.json';
// import '../Userlisting.scss';
import Paginate from '../../../Hook/Paginate';


const GridListing = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let plan = useSelector(state => state.utils.plan);
  let status = useSelector(state => state.utils.status);
  let role = useSelector(state => state.utils.role);
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
      pathname: "/user/gridlisting/" + props.currentPage,
      search: "?role=" + role + "&plan=" + plan + "&status=" + status + ""
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.currentPage])
  
  let userDelete = User.user;

  const DeleteHanlder = (id) => {
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
        dispatch(utils.deleteHanlder({
          userDeleted: userDelete, id: id
        }))
      }
    })
  }

  return (
    <div className='userlist-box UserListing-role'>
      {list.length !== 0
        ?
        <Row>
          {props.currentTask.map((user, i) => {
            return (
              <Col key={i}>
                <Card>
                  <Card.Img variant="top" src={user.img} />
                  <Card.Body>
                    <h3>{user.name}</h3>
                    <h4>{user.role}</h4>

                    <Card.Text className='textAlign'>
                      {user.status === 'active' ? <Button variant="success">{user.status}</Button> : <Button variant="danger">{user.status}</Button>}
                    </Card.Text>

                    <Row className="userlisting-btn">
                      <Button onClick={() => { DeleteHanlder(user.id) }}>
                        <i className="fa-solid fa-trash"></i>
                      </Button>
                      <NavLink to={"/user/edit/" + user.id}>
                        <i className="fa-solid fa-pen-to-square"></i>
                      </NavLink>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}

          <div className='class-pagination'>
            <Paginate
              tasksPerPage={props.tasksPerPage}
              totalTasks={list.length}
              data={list}
              newCurrentPage={props.currentPage}
            />
          </div>
        </Row>
        :
        <RecordNotFound />
      }
    </div>
  )
}

export default GridListing;