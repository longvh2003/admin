import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../../utils/utils';
import { getAllStatusProject } from '../statusProject.services';
import { TABLE_NAME, LIMIT } from '../statusProject.constants';
import { useHistory } from 'react-router-dom';

export const StatusProject = ({ page }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleDetail = index => {
    history.push(`/status-project/${index}`);
  };
  const [indexPage, setIndexPage] = useState(page);
  const statusProjects = useSelector(state => state.projectStatus.data);
  const maxPage = useSelector(state => state.projectStatus.page);
  useEffect(() => {
    const data = getData(TABLE_NAME);
    dispatch(getAllStatusProject(data));
  }, []);
  const prevPage = () => {
    indexPage > 0 ? setIndexPage(indexPage - 1) : null;
  };
  const nextPage = () => {
    indexPage < maxPage - 1 ? setIndexPage(indexPage + 1) : null;
  };
  const addStatusProject = () => history.push('/create-status-project');
  const listElement = statusProjects
    .filter((element, index) => index >= indexPage * LIMIT && index < (indexPage + 1) * LIMIT)
    .map((element, index) => (
      <tr
        className='rowTable'
        key={index + indexPage * LIMIT}
        onClick={() => handleDetail(element.id)}
      >
        <td className='py-3 px-6'>
          <div className='dataTable'>
            <span>{index + 1 + indexPage * LIMIT}</span>
          </div>
        </td>
        <td className='py-3 px-6'>
          <div className='dataTable'>
            <span>{element.name}</span>
          </div>
        </td>
        <td className='py-3 px-6'>
          <div className='dataTable'>
            <span>{element.description}</span>
          </div>
        </td>
        <td className='py-3 px-6 text-center'>
          <span className='statusTable '>{element.status}</span>
        </td>
      </tr>
    ));
  return (
    <div>
      <div className='header'>PROJECT STATUS</div>
      <div className='my-3 mx-3 text-right'>
        <button onClick={addStatusProject} className='btn'>
          Create
        </button>
      </div>
      <table className='w-full table-auto'>
        <thead>
          <tr className='rowHeader'>
            <th className='headerTable'>No.</th>
            <th className='headerTable'>Name</th>
            <th className='headerTable'>Description</th>
            <th className='headerTable'>Status</th>
          </tr>
        </thead>
        <tbody>{listElement}</tbody>
      </table>
      <div className='py-4 grid grid-cols-11'>
        <div className='col-span-5'></div>
        <div className='col-span-1 grid grid-cols-3'>
          <div className='col-span-1'>
            <button onClick={prevPage} className='focus:outline-none'>
              <i className='fas fa-long-arrow-left'></i>
            </button>
          </div>
          <div className='col-span-1 px-2'>{indexPage + 1}</div>
          <div className='col-span-1'>
            <button onClick={nextPage} className='focus:outline-none'>
              <i className='fas fa-long-arrow-right pl-2'></i>
            </button>
          </div>
        </div>
        <div className='col-span-5'></div>
      </div>
    </div>
  );
};
