import React, { useEffect, useRef, useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import { useDispatch } from "react-redux";
import { utils } from "../Components/Store/Utils";

const Paginate = ({
  tasksPerPage,
  totalTasks,
  data,
  newCurrentPage,
  page
}) => {
  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(
    newCurrentPage ? parseInt(newCurrentPage) : 1
  );
  let currentTask = []
  const indexOfLastPost = currentPage * tasksPerPage;
  const indexOfFirstPost = indexOfLastPost - tasksPerPage;
  const numberOfPage = Math.ceil(totalTasks / tasksPerPage);
  const pageNumbers = [...Array(numberOfPage + 1).keys()].slice(1);
  const num = useRef(null)
  currentTask = data.slice(indexOfFirstPost, indexOfLastPost);
  dispatch(utils.displayTaskhandler(currentTask))
  dispatch(utils.handleIndex(indexOfFirstPost))

  useEffect(() => {
    if (page === true && currentPage > num.current) {
      setCurrentPage(1)
    } else if (page === true) {
      setCurrentPage(1)
    }
    // eslint-disable-next-line
  }, [page, num.current])

  const paginate = (pageNum) => {
    setCurrentPage(pageNum);
  }

  const nextPage = () => {
    if (currentPage !== numberOfPage) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <div>
      <Pagination>
        <Pagination.Prev onClick={() => prevPage()} />
        {pageNumbers.map((number, index) => {
          num.current = number
          return (
            <Pagination.Item
              onClick={() => paginate(number)}
              key={index}
              active={number === currentPage}
            >
              {number}
            </Pagination.Item>
          );
        })}
        <Pagination.Next onClick={() => nextPage()} />
      </Pagination>
    </div>
  );
};

export default Paginate;
