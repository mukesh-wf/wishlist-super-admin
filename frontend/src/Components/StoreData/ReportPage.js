

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import Tablelist from '../../Hook/list';
import { Eye } from 'react-bootstrap-icons';

const ReportPage = () => {
  const { control, handleSubmit, setValue, watch } = useForm();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search.trim());
  const initialQuery = searchParams.get('searchquery') || "";
  const initialPlan = searchParams.get('plan') || "all";
  const initialStatus = searchParams.get('status') || "all";
  const initialMonthweek = searchParams.get('monthweek') || "all";
  const navigate = useNavigate();

  useEffect(() => {
    setSearchQuery(initialQuery);
    setValue("plan", initialPlan);
    setValue("status", initialStatus);
    setValue("monthweek", initialMonthweek);
    fetchData(initialQuery, initialPlan, initialStatus, initialMonthweek);
  }, [initialQuery, initialPlan, initialStatus, initialMonthweek, setValue]);

  const fetchData = async (query, plan, status, monthweek) => {
    const params = { searchquery: query, plan, status, monthweek };
    try {
      const res = await axios.get(`http://localhost:7000/store/getData`, {
        params,
        withCredentials: true,
        headers: {
          "Content-Type": 'application/json'
        }
      });
      setFilteredData(modifyData(res.data));
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const modifyData = data => data.map(key => ({
    store_owner: key.store_owner,
    shop_name: key.shop_name,
    shop_email: key.shop_email,
    date: formatDate(key.date),
    country: key.country,
    active_plan_name: key.active_plan_name,
    status: key.status
  }));

  const formatDate = date => {
    let datemodified = new Date(date);
    let day = datemodified.getDate();
    let month = datemodified.getMonth() + 1;
    let year = datemodified.getFullYear().toString().slice(-2);
    return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
  };

  const onSubmit = data => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const selectedPlan = data.plan.toLowerCase();
    const selectedStatus = data.status.toLowerCase();
    const selectedMothWeek = data.monthweek.toLowerCase();

    const newSearchParams = new URLSearchParams();

    if (lowerCaseQuery) newSearchParams.set('searchquery', lowerCaseQuery);
    if (selectedPlan !== "all") newSearchParams.set('plan', selectedPlan);
    if (selectedStatus !== "all") newSearchParams.set('status', selectedStatus);
    if (selectedMothWeek !== "all") newSearchParams.set('monthweek', selectedMothWeek);

    navigate(`?${newSearchParams.toString()}`);

    fetchData(lowerCaseQuery, selectedPlan, selectedStatus, selectedMothWeek);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleClick = (name) => {
    navigate({
      pathname: `/storedata/reportpage/storedetail`,
      search: `?name=${name}`
    });
  };

  const tabledata = {
    thead: [
      { key: "store_owner", title: "Shop Owner", type: "text" },
      { key: "shop_name", title: "Shop Name", type: "text" },
      { key: "shop_email", title: "Shop Email", type: "text" },
      { key: "date", title: "Date", type: "text" },
      { key: "country", title: "Country", type: "text" },
      { key: "active_plan_name", title: "Plan", type: "text" },
      { key: "status", title: "Status", type: "text" },
      { icon: [{ element: Eye, action: handleClick }], type: "action", title: 'Action' }
    ],
    tbody: filteredData
  };

  return (
    <>
      <p className='mt-3 fs-4 text'>List all Stores</p>
      <Container className='formlayout'>
        <div className='userlist-box userListing-box ordr'>
          <Row>
            <Col lg={12} className="fom">
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row className="align-items-end">
                  <Col sm={4} className='mb-4'>
                    <Form.Control
                      type="text"
                      placeholder="Search here"
                      value={searchQuery}
                      onChange={handleSearchChange}
                    />
                  </Col>
                  <Col sm={2} className='mb-4'>
                    <Controller
                      name="plan"
                      control={control}
                      defaultValue={initialPlan}
                      render={({ field }) =>
                        <Form.Select aria-label="Default select example" {...field}>
                          <option value="all">Plan (all)</option>
                          <option value="free">Free</option>
                          <option value="basic">Basic</option>
                          <option value="premium">Premium</option>
                        </Form.Select>
                      }
                    />
                  </Col>
                  <Col sm={2} className='mb-4'>
                    <Controller
                      name="status"
                      control={control}
                      defaultValue={initialStatus}
                      render={({ field }) =>
                        <Form.Select aria-label="Default select example" {...field}>
                          <option value="all">Status (all)</option>
                          <option value="active">Active</option>
                          <option value="inactive">Inactive</option>
                        </Form.Select>
                      }
                    />
                  </Col>
                  <Col sm={2} className='mb-4'>
                    <Controller
                      name="monthweek"
                      control={control}
                      defaultValue={initialMonthweek}
                      render={({ field }) =>
                        <Form.Select aria-label="Default select example" {...field}>
                          <option value="all">All</option>
                          <option value="week">Week</option>
                          <option value="month">Month</option>
                        </Form.Select>
                      }
                    />
                  </Col>
                  <Col sm={2} className='mb-4'>
                    <Button type="submit" variant="primary" className="mt-2">
                      Filter
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col className='grid-box'>
              <Tablelist tabledata={tabledata} />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default ReportPage;
