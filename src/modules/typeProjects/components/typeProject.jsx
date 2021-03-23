import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from 'src/utils/utils';
import { getAllTypeProject } from 'src/modules/typeProjects/typeProject.services';
import { TABLE_NAME, LIMIT } from 'src/modules/typeProjects/typeProject.constants';
import { useHistory } from 'react-router-dom';

export const TypeProject = () => {
  const { page } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const handleDetail = index => {
    history.push(`/type-project/${index}`);
  };
  const typeProjects = useSelector(state => state.projectType.data);
  const maxPage = useSelector(state => state.projectType.page);
  useEffect(() => {
    const data = getData(TABLE_NAME);
    dispatch(getAllTypeProject(data));
  }, []);
  const addTypeProject = () => history.push('/create-type-project');
  const prevPage = () => {
    if (page > 1) history.push(`/type-project/page/${parseInt(page) - 1}`);
  };
  const nextPage = () => {
    if (page < maxPage) history.push(`/type-project/page/${parseInt(page) + 1}`);
  };
  const listElement = () =>
    typeProjects
      .filter((element, index) => index >= (page - 1) * LIMIT && index < (page) * LIMIT)
      .map((element, index) => (
        <tr
          className='rowTable grid-cols-11'
          key={index + (page - 1) * LIMIT}
          onClick={() => handleDetail(element.id)}
        >
          <td className='py-3 px-6 col-span-1'>
            <div className='dataTable'>
              <span>{index + 1 + (page - 1) * LIMIT}</span>
            </div>
          </td>
          <td className='py-3 px-6 col-span-3'>
            <div className='dataTable'>
              <span>{element.name}</span>
            </div>
          </td>
          <td className='py-3 px-6 col-span-3'>
            <div className='dataTable'>
              <span>{element.description}</span>
            </div>
          </td>
          <td className='py-3 px-6 col-span-2'>
            <div className='dataTable'>{element.priority}</div>
          </td>
          <td className='py-3 px-6 text-center col-span-2'>
            <span className='statusTable '>{element.status}</span>
          </td>
        </tr>
      ));
  return (
    <div>
      <div className='header'>PROJECT TYPE</div>
      <div className='my-3 mx-3 text-right'>
        <button onClick={addTypeProject} className='btn'>
          Create
        </button>
      </div>
      <table className='w-full table-auto'>
        <thead>
          <tr className='rowHeader grid-cols-11'>
            <th className='headerTable col-span-1'>No.</th>
            <th className='headerTable col-span-3'>Name</th>
            <th className='headerTable col-span-3'>Description</th>
            <th className='headerTable col-span-2'>Priority Number</th>
            <th className='headerTable col-span-2'>Status</th>
          </tr>
        </thead>
        <tbody>{listElement()}</tbody>
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
