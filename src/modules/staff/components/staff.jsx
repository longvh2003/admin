import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from 'src/utils/utils';
import { getAllStaff } from 'src/modules/staff/staff.services';
import { TABLE_NAME, LIMIT } from 'src/modules/staff/staff.constants';
import { useHistory } from 'react-router-dom';

export const Staff = () => {
  const { page } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const handleDetail = index => {
    history.push(`/staff/detail/${index}`);
  };
  const staffs = useSelector(state => state.staff.data);
  const maxPage = useSelector(state => state.staff.page);
  useEffect(() => {
    const data = getData(TABLE_NAME);
    dispatch(getAllStaff(data));
  }, []);
  const addStaff = () => history.push('/create-staff');
  const prevPage = () => {
    if (page > 1) history.push(`/staff/page/${parseInt(page) - 1}`);
  };
  const nextPage = () => {
    if (page < maxPage) history.push(`/staff/page/${parseInt(page) + 1}`);
  };
  const listElement = staffs
    .filter((element, index) => index >= (page - 1) * LIMIT && index < page * LIMIT)
    .map((element, index) => (
      <tr className='rowTable' key={index + (page - 1) * 3}
        onClick={() => handleDetail(element.id)}>
        <td className='py-3 px-14'>
          <div className='dataTable'>
            <span>{index + 1 + (page - 1) * LIMIT}</span>
          </div>
        </td>
        <td className='py-3 px-12'>
          <div className='dataTable'>
            <span>{element.name}</span>
          </div>
        </td>
        <td className='py-3 px-8'>
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
            <th className='py-3 text-left text-gray-600 px-14'>No.</th>
            <th className='py-3 text-left text-gray-600 px-12'>Name</th>
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
