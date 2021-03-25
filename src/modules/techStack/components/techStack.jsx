import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from 'src/utils/utils';
import { getAllTechStack } from 'src/modules/techStack/techStack.services';
import { TABLE_NAME, LIMIT } from 'src/modules/techStack/techStack.constants';
import { useHistory } from 'react-router-dom';

export const TechStack = () => {
  const { page } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const handleDetail = index => {
    history.push(`/tech-stack/detail/${index}`);
  };
  const techStacks = useSelector(state => state.techStack.data);
  const maxPage = useSelector(state => state.techStack.page);
  useEffect(() => {
    const data = getData(TABLE_NAME);
    dispatch(getAllTechStack(data));
  }, []);
  const addTechStack = () => history.push('/create-tech-stack');
  const prevPage = () => {
    if (page > 1) history.push(`/tech-stack/page/${parseInt(page) - 1}`);
  };
  const nextPage = () => {
    if (page < maxPage) history.push(`/tech-stack/page/${parseInt(page) + 1}`);
  };
  const listElement = techStacks
    .filter((element, index) => index >= (page - 1) * LIMIT && index < page * LIMIT)
    .map((element, index) => (
      <tr
        className='rowTable'
        key={index + (page - 1) * LIMIT}
        onClick={() => handleDetail(element.id)}
      >
        <td className='py-3 px-8'>
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
        <td className='py-3 px-6 text-left'>
          <span className='statusTable'>{element.status}</span>
        </td>
      </tr>
    ));
  return (
    <div>
      <div className='header'>TECH STACK</div>
      <div className='my-3 mx-3 text-right'>
        <button onClick={addTechStack} className='btn'>
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
