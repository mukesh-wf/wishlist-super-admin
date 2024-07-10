import React, { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import User from "../Data/User/User.json";
import {
  Col,
  Row,
  Dropdown,
  Form,
  Button,
} from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import plan from "../Data/User/Filter.json";
import {
  Grid3x3GapFill,
  ListTask,
  BoxArrowUpRight,
} from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import TableListing from "./TableStyling/TableListing";
import { utils } from "../Store/Utils";
import GridListing from "./TableStyling/GridListing";
import MetaTags from "../HeadTag/MetaTags";
import "./Userlisting.scss";
import _ from 'underscore';

const UserList = () => {
  const list = User.user;
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const navigate = useNavigate();
  const params = useParams();
  let currentPageTemp = params.id;
  let tblList = params.idd;
  const listViews = useSelector((state) => state.utils.listView);
  const [listView, setListView] = useState(listViews ? listViews : "grid");
  const [statusCompleted, setStatusCompleted] = useState("all");
  const [filterCompleted, setFilterCompleted] = useState("all");
  const [roleCompleted, setRoleCompleted] = useState("all");
  const [currentPage, setCurrentPage] = useState(
    tblList ? tblList : currentPageTemp
  );
  const todosPerPage = useSelector((state) => state.utils.refresh);
  const plann = searchParams.get("plan");
  const statuss = searchParams.get("status");
  const roles = searchParams.get("role");
  let postsPerPage = 4;
  const dispatch = useDispatch();
  const displayTasks = useSelector(state => state.utils.displayTask, _.isEqual);

  useEffect(() => {
    setStatusCompleted(statuss);
    setFilterCompleted(plann);
    setRoleCompleted(roles);
    dispatch(utils.listView(""));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todosPerPage, statuss, plann, listView]);

  const addUserHandler = () => {
    navigate("/user/add");
  };

  const IconList = () => {
    setListView("view");
    dispatch(utils.listView("view"));
  };

  const GridList = () => {
    setListView("grid");
    dispatch(utils.listView("grid"));
  };

  const todosData = useMemo(() => {
    let computedTodos = list;
    for (let i = 0; i < plan.role.length; i++) {
      if (roleCompleted === plan.role[i].role) {
        computedTodos = computedTodos.filter(
          (todo) => roleCompleted && todo.role === roleCompleted
        );
      }
    }

    for (let i = 0; i < plan.plan.length; i++) {
      if (filterCompleted === plan.plan[i].plan) {
        computedTodos = computedTodos.filter(
          (todo) => filterCompleted && todo.plan === filterCompleted
        );
      }
    }

    for (let i = 0; i < plan.status.length; i++) {
      if (statusCompleted === plan.status[i].status) {
        computedTodos = computedTodos.filter(
          (todo) => statusCompleted && todo.status === statusCompleted
        );
      }
    }
    dispatch(
      utils.searchFilter({
        plan: filterCompleted,
        role: roleCompleted,
        status: statusCompleted,
      })
    )

    return computedTodos
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    currentPage,
    roleCompleted,
    filterCompleted,
    statusCompleted
  ]);

  const resetFilter = () => {
    setRoleCompleted("all");
    setStatusCompleted("all");
    setFilterCompleted("all");
    setCurrentPage(1);
  };


  return (
    <>
      <div className="page-header">
        <MetaTags title="User List" />
        <h2>UserList</h2>
        <div className="HeaderBoxes userListing">
          <Dropdown>
            <Dropdown.Toggle variant="light">
              <BoxArrowUpRight /> Export</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item value="pdf">Pdf</Dropdown.Item>
              <Dropdown.Item value="excel">Excel</Dropdown.Item>
              <Dropdown.Item value="jpeg">JPEG</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button onClick={addUserHandler}>Add User</Button>
        </div>
      </div>

      <Row className="UserListing-row">
        <Col md={3}>
          <div className="userListing-box">
            <h3>Total Users</h3>
            <h4>15</h4>
          </div>
        </Col>

        <Col md={3}>
          <div className="userListing-box">
            <h3>Pending Users </h3>
            <h4>5</h4>
          </div>
        </Col>

        <Col md={3}>
          <div className="userListing-box">
            <h3>Active User</h3>
            <h4>8</h4>
          </div>
        </Col>

        <Col md={3}>
          <div className="userListing-box">
            <h3>InActive User</h3>
            <h4>7</h4>
          </div>
        </Col>
      </Row>

      <Row className="UserListing-role">
        <Col md={3} className="dropdown">
          <Form.Label>{"Select Role Type"}</Form.Label>
          <Form.Select
            value={roleCompleted}
            onChange={(e) => {
              setRoleCompleted(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="all">Choose the option</option>
            {plan.role.map((user, index) => {
              return (
                <React.Fragment key={index}>
                  <option value={user.role}>{user.role}</option>
                </React.Fragment>
              );
            })}
          </Form.Select>
        </Col>

        <Col md={3}>
          <Form.Label>{"Select Plan Type"}</Form.Label>
          <Form.Select
            value={filterCompleted}
            onChange={(e) => {
              setFilterCompleted(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="all">Choose the option</option>
            {plan.plan.map((user, index) => {
              return (
                <React.Fragment key={index}>
                  <option value={user.plan}>{user.plan}</option>
                </React.Fragment>
              );
            })}
          </Form.Select>
        </Col>

        <Col md={3}>
          <Form.Label>{"Select Status Type"}</Form.Label>
          <Form.Select
            value={statusCompleted}
            onChange={(e) => {
              setStatusCompleted(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="all">{"Choose the option"}</option>
            {plan.status.map((user, index) => {
              return (
                <React.Fragment key={index}>
                  <option value={user.status} style={{textTransform: "capitalize"}}>{user.status}</option>
                </React.Fragment>
              );
            })}
          </Form.Select>
        </Col>
        <div className="col-md-3 resetfilter-btn">
          <Row>
            <Col md={7} className="boxsize">
              <Button type="submit" onClick={resetFilter}>
                Reset Filter
              </Button>
            </Col>
            <Col md={5} className="boxsize">
              <div className="listviewicons">
                <Grid3x3GapFill onClick={GridList} />
                <ListTask onClick={IconList} />
              </div>
            </Col>
          </Row>
        </div>
      </Row>

      {listView === "grid" && (
        <GridListing
          list={todosData}
          tasksPerPage={postsPerPage}
          currentTask={displayTasks}
          currentPage={currentPage}
        />
      )}

      {listView === "view" && (
        <TableListing
          list={todosData}
          tasksPerPage={postsPerPage}
          currentTask={displayTasks}
          currentPage={currentPage}
        />
      )}
    </>
  );
};

export default UserList;