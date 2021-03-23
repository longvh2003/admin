import React from 'react';
import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { PROJECT, STAFF, TABLE_NAME, TECH_STACK } from '../department.constants';
import { useDispatch } from 'react-redux';
import { delADepartment } from '../department.services';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getData, getIndex } from '../../../utils/utils';
import { EditDepartment } from './EditDepartment';
import { handleOutsideClick } from '../../../services/handleOutsideClick';

export const DepartmentDetail = () => {
  const [toggleDelete, setToggleDelete] = useState(false);
  const [isUpdate, setIsUpdate] = useState(true);
  const [detail, setDetail] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  useEffect(() => {
    const data = getData(TABLE_NAME);
    setDetail(data.filter(element => element.id === id)[0]);
  }, [isUpdate]);
  const deleteDepartment = (index, TABLE_NAME) => {
    dispatch(delADepartment(index, TABLE_NAME));
    history.push('/department/page/1');
  };
  const handleDetail = (element, TABLE) => {
    const index = getIndex(element, TABLE);
    switch (TABLE) {
      case TECH_STACK:
        history.push(`/tech-stack/${index}`);
        break;
      case STAFF:
        history.push(`/staff/${index}`);
        break;
      case PROJECT:
        history.push(`/project/${index}`);
        break;
    }
  };
  const ref = useRef();
  handleOutsideClick(ref, () => { if (toggleDelete) setToggleDelete(false); });
  return isUpdate ? (
    <div className='relative'>
      {toggleDelete ? <div
        className='modalConfirm'
        ref={ref}
      >
        <div className='text-center pt-4 text-4xl'>Are you sure?</div>
        <div className='text-center px-16 py-4'>
          If you proceed, you will lose your data. Are you sure you want to delete it? </div>
        <div className='groupBtn'>
          <button className='btnNo' onClick={() => setToggleDelete(false)}>
            NO
          </button>
          <button className='btnYes' onClick={() => deleteDepartment(id, TABLE_NAME)}>
            YES
          </button>
        </div>
      </div> : null}
      <div className='header'>DETAIL</div>
      <div className='my-3 mx-10'>
        <button onClick={() => history.push('/department/page/1')} className='btn'>
          Back
        </button>
      </div>
      <div className='containerDetail'>
        <div className='groupData'>
          <label className='leading-loose'>Name :</label>
          <input type='text' className='inputDetail' value={detail.name} readOnly />
        </div>
        <div className='groupData'>
          <label className='leading-loose'>Description :</label>
          <textarea type='text' className='inputDetail' value={detail.description} readOnly />
        </div>
        <div className='groupData'>
          <label className='leading-loose'>Tech Stack :</label>
          <div type='text' className='inputDetail'>
            <ul>
              {detail.techStacks !== undefined
                ? detail.techStacks.map((element, index) => (
                  <li key={index} onClick={() => handleDetail(element, TECH_STACK)}>
                    <i className='fas fa-atlas pr-2'></i>
                    {element}
                  </li>
                ))
                : null}
            </ul>
          </div>
        </div>
        <div className='groupData'>
          <label className='leading-loose'>Staff :</label>
          <div type='text' className='inputDetail'>
            <ul>
              {detail.staffs !== undefined
                ? detail.staffs.map((element, index) => (
                  <li key={index} onClick={() => handleDetail(element, STAFF)}>
                    <i className='fas fa-user pr-2'></i>
                    {element}
                  </li>
                ))
                : null}
            </ul>
          </div>
        </div>
        <div className='groupData'>
          <label className='leading-loose'>Project :</label>
          <div type='text' className='inputDetail'>
            <ul>
              {detail.projects !== undefined
                ? detail.projects.map((element, index) => (
                  <li key={index} onClick={() => handleDetail(element, PROJECT)}>
                    <i className='fas fa-tasks pr-2'></i>
                    {element}
                  </li>
                ))
                : null}
            </ul>
          </div>
        </div>
        <div>
          <div className='groupBtn'>
            <button className='btnCancel' onClick={() => setToggleDelete(true)}>
              <i className='fas fa-times px-3'></i>DELETE
            </button>
            <button className='btnConfirm' onClick={() => setIsUpdate(false)}>
              UPDATE
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <EditDepartment index={id} detail={detail} cancel={setIsUpdate} />
  );
};
