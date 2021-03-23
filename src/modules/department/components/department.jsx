import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from 'src/utils/utils';
import { getAllDepartment } from 'src/modules/department/department.services';
import { TABLE_NAME, LIMIT } from 'src/modules/department/department.constants';
import { useHistory } from 'react-router-dom';

export const Department = () => {
  const { page } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const handleDetail = index => {
    history.push(`/department/${index}`);
  };
  const departments = useSelector(state => state.department.data);
  const maxPage = useSelector(state => state.department.page);
  useEffect(() => {
    const data = getData(TABLE_NAME);
    dispatch(getAllDepartment(data));
  }, []);
  const prevPage = () => {
    if (page > 1) history.push(`/department/page/${parseInt(page) - 1}`);
  };
  const nextPage = () => {
    if (page < maxPage) history.push(`/department/page/${parseInt(page) + 1}`);
  };
  const addDepartment = () => history.push('/create-department');
  const listElement = departments
    .filter((element, index) => index >= (page - 1) * LIMIT && index < page * LIMIT)
    .map((element, index) => (
      <tr
        className='rowTable'
        key={index + (page - 1) * LIMIT}
        onClick={() => handleDetail(element.id)}
      >
        <td className='py-3 px-6'>
          <div className='dataTable'>
            <span>{index + 1 + (page - 1) * LIMIT}</span>
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
      </tr>
    ));
  return (
    <div>
      <div className='header'>DEPARTMENT</div>
      <div className='my-3 mx-3 text-right'>
        <button onClick={addDepartment} className='btn'>
          Create
        </button>
      </div>
      <table className='w-full table-auto'>
        <thead>
          <tr className='rowHeader'>
            <th className='headerTable'>No.</th>
            <th className='headerTable'>Name</th>
            <th className='headerTable'>Description</th>
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
          <div className='col-span-1 px-2'>{page}</div>
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
