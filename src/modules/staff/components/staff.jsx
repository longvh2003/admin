import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../../utils/utils';
import { getAllStaff } from '../staff.services';
import { TABLE_NAME, LIMIT } from '../staff.constants';
import { useHistory } from 'react-router-dom';

export const Staff = ({ page }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleDetail = index => {
    history.push(`/staff/${index}`);
  };
  const [indexPage, setIndexPage] = useState(page);
  const staffs = useSelector(state => state.staff.data);
  const maxPage = useSelector(state => state.staff.page);
  useEffect(() => {
    const data = getData(TABLE_NAME);
    dispatch(getAllStaff(data));
  }, []);
  const addStaff = () => history.push('/create-staff');
  const prevPage = () => {
    if (indexPage > 0) setIndexPage(indexPage - 1);
  };
  const nextPage = () => {
    if (indexPage < maxPage - 1) setIndexPage(indexPage + 1);
  };
  const listElement = staffs
    .filter((element, index) => index >= indexPage * LIMIT && index < (indexPage + 1) * LIMIT)
    .map((element, index) => (
      <tr className='rowTable' key={index + indexPage * 3} onClick={() => handleDetail(element.id)}>
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
            <span>{element.date}</span>
          </div>
        </td>
      </tr>
    ));
  return (
    <div>
      <div className='header'>STAFF</div>
      <div className='my-3 mx-3 text-right'>
        <button onClick={addStaff} className='btn'>
          Create
        </button>
      </div>
      <table className='w-full table-auto'>
        <thead>
          <tr className='rowHeader'>
            <th className='headerTable'>No.</th>
            <th className='headerTable'>Name</th>
            <th className='headerTable'>Date of Birth</th>
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
