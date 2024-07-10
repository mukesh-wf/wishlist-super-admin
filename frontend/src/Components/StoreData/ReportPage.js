
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import Tablelist from '../../Hook/list';
import { Eye } from 'react-bootstrap-icons';

const ReportPage = () => {
  const { control, handleSubmit, setValue } = useForm();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [allFilteredData, setAllFilteredData] = useState([]);
  const [isSelect, setIsSelect] = useState("");
  const [monthWeek, setMonthWeek] = useState("");

  const { search } = useLocation();
  const searchParams = new URLSearchParams(search.trim());
  const initialQuery = searchParams.get('searchquery') || "";
  const initialPlan = searchParams.get('plan') || "";
  const initialStatus = searchParams.get('status') || "";
  const initialMonthweek = searchParams.get('monthweek') || "";
  const navigate = useNavigate();

  useEffect(() => {
    setSearchQuery(initialQuery);
    setValue("plan", initialPlan);
    setValue("status", initialStatus);
    setValue("monthweek", initialMonthweek);
    fetchData(initialQuery, initialPlan, initialStatus, initialMonthweek);
  }, [initialQuery, initialPlan, initialStatus, initialMonthweek, setValue]);

  const modifyData = data => {
    return data.map(key => ({
      store_owner: key.store_owner,
      shop_name: key.shop_name,
      shop_email: key.shop_email,
      date: formatDate(key.date),
      country: key.country,
      active_plan_name: key.active_plan_name,
      status: key.status
    }));
  };

  const fetchData = async (searchquery="", plan="", status="", monthweek="") => {
    try {
      const res = await axios.get(`http://localhost:7000/store/getData`, {
        withCredentials: true,
        headers: {
          "Content-Type": 'application/json'
        }
      });

      const modifiedData = modifyData(res.data);
      setAllFilteredData(modifiedData);

      filterData(modifiedData, searchquery, plan, status, monthweek);

    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const filterData = (data, searchQuery = "", plan = "", status = "", monthweek = "") => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const lowerCasePlan = plan.toLowerCase();
    const lowerCaseStatus = status.toLowerCase();
  
    const getWeekStartAndEnd = () => {
      let currentDate = new Date();
      let currentDay = currentDate.getDay();
      let startOfWeekDate = new Date(currentDate);
      startOfWeekDate.setDate(currentDate.getDate() - currentDay);
      let endOfWeekDate = new Date(currentDate);
      endOfWeekDate.setDate(currentDate.getDate() + (6 - currentDay));
      return {
        startDate: startOfWeekDate,
        endDate: endOfWeekDate
      };
    };
  
    const getMonthStartAndEnd = () => {
      let currentDate = new Date();
      let startOfMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
      let endOfMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
      return {
        startDate: startOfMonthDate,
        endDate: endOfMonthDate
      };
    };
  
    const filtered = data.filter(item => {
      const matchesQuery =
        item.store_owner.toLowerCase().includes(lowerCaseQuery) ||
        item.shop_name.toLowerCase().includes(lowerCaseQuery) ||
        item.shop_email.toLowerCase().includes(lowerCaseQuery);
  
      const matchesPlan = lowerCasePlan === "" || item.active_plan_name.toLowerCase() === lowerCasePlan;
      const matchesStatus = lowerCaseStatus === "" || item.status.toLowerCase() === lowerCaseStatus;
  
      const itemDate = formatDate(item.date);
      console.log(" itemDate", itemDate)
      
      if (monthweek === "week") {
        const { startDate, endDate } = getWeekStartAndEnd();
        const formattedStartOfWeek = formatDate(startDate);
        const formattedEndOfWeek = formatDate(endDate); 

        return matchesQuery && matchesPlan && matchesStatus &&
          itemDate >= formattedStartOfWeek && itemDate <= formattedEndOfWeek;
  
      } else if (monthweek === "month") {
        const { startDate, endDate } = getMonthStartAndEnd();
        const formattedStartOfMonth = formatDate(startDate);
        const formattedEndOfMonth= formatDate(endDate);
        console.log(" 444",formattedStartOfMonth )
        console.log(" 555", formattedEndOfMonth)
        console.log("ffffff ",  itemDate >= formattedStartOfMonth && itemDate <= formattedEndOfMonth)
        
        return matchesQuery && matchesPlan && matchesStatus &&
          itemDate >= formattedStartOfMonth && itemDate <= formattedEndOfMonth;
  
      } else {
        return matchesQuery && matchesPlan && matchesStatus;
      }
    });
  
    console.log("filtered data: ", filtered);
    setFilteredData(filtered);
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

  const formatDate = date => {
    let datemodified = new Date(date);
    let day = datemodified.getDate();
    let month = datemodified.getMonth() + 1;
    let year = datemodified.getFullYear().toString().slice(-2);
    return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const onSubmit = data => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const selectedPlan = data.plan.toLowerCase();
    const selectedStatus = isSelect.toLowerCase();
    const selectedMothWeek = monthWeek.toLowerCase();

    if (searchQuery === "") {
      searchParams.delete("searchquery");
    } else {
      searchParams.set('searchquery', lowerCaseQuery);
    }

    if (selectedPlan === "") {
      searchParams.delete("plan");
    } else {
      searchParams.set('plan', selectedPlan);
    }
    if(selectedStatus === ""){
      searchParams.delete('status');
    }else{
      searchParams.set('status', selectedStatus);
    }
    if(selectedMothWeek === ""){
      searchParams.delete('monthweek');
    }else{
      searchParams.set('monthweek', selectedMothWeek);
    }

    navigate({ search: `?${searchParams.toString()}` });

    filterData(allFilteredData, lowerCaseQuery, selectedPlan, selectedStatus, selectedMothWeek);
  };

  const handleActiveButton = (e, token) => {
    e.preventDefault();
    setIsSelect(token);
  };

  const monthWeekHandler = (e, token) => {
    e.preventDefault();
    setMonthWeek(token);
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
                          <option value="" >Plan(all)</option>
                          <option value="free">Free</option>
                          <option value="basic">Basic</option>
                          <option value="premium">Premium</option>
                        </Form.Select>
                      }
                    />
                  </Col>            
                  <Col sm={2}>
                    <div className='grid-box-heading'>
                      <div className="boxsize boxsize-transparent">
                        <button 
                          className={isSelect === '' ? "active" : undefined}
                          onClick={(e) => handleActiveButton(e,'')}>
                          All
                        </button>
                        <button 
                          className={isSelect === 'active' ? "active" : undefined}
                          onClick={(e) => handleActiveButton(e,'active')}>
                          Active
                        </button>
                        <button 
                          className={isSelect === 'inactive' ? "active" : undefined}
                          onClick={(e) => handleActiveButton(e,'inactive')}>
                          Inactive
                        </button>
                      </div>
                    </div>
                  </Col>

                  {/* -------- this filter is pending --------- */}
                  <Col sm={2}>
                    <div className='grid-box-heading'>
                      <div className="boxsize boxsize-transparent">
                        <button 
                          className={monthWeek === '' ? "active" : undefined}
                          onClick={(e) => monthWeekHandler(e,'')}>
                          All
                        </button>
                        <button 
                          className={monthWeek === 'week' ? "active" : undefined}
                          onClick={(e) => monthWeekHandler(e,'week')}>
                          Week
                        </button>
                        <button 
                          className={monthWeek === 'month' ? "active" : undefined}
                          onClick={(e) => monthWeekHandler(e,'month')}>
                          Month
                        </button>
                      </div>
                    </div>
                  </Col>
                  {/* --------  --------- */}

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

