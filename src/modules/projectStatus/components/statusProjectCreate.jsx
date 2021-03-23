import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TABLE_NAME } from 'src/modules/projectStatus/statusProject.constants';
import { addStatusProject } from 'src/modules/projectStatus/statusProject.services';
import { useHistory } from 'react-router-dom';
import { getData } from 'src/utils/utils';

export const StatusProjectCreate = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Choose..');

  const [isNameFilled, setIsNameFilled] = useState(true);
  const [isDescriptionFilled, setDescriptionFilled] = useState(true);
  const [isStatusFilled, setStatusFilled] = useState(true);

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeDescription = e => {
    setDescription(e.target.value);
  };

  const handleChangeStatus = e => {
    setStatus(e.target.value);
  };
  const history = useHistory();
  const dispatch = useDispatch();
  const handleCancel = () => history.push('status-project/page/1');
  const handleAdd = () => {
    const data = getData(TABLE_NAME);
    if (name === '') { setIsNameFilled(false); }
    else setIsNameFilled(true);
    if (description === '') setDescriptionFilled(false);
    else setDescriptionFilled(true);
    if (status === 'Choose..') setStatusFilled(false);
    else setStatusFilled(true);
    if (name !== '' && description !== '' && status !== 'Choose..') {
      const detail = {
        name,
        description,
        status,
        id: Math.random().toString(36).substring(4),
      };
      if (
        data.filter(
          element => element.name === detail.name && element.description === detail.description,
        ).length === 0
      ) {
        dispatch(addStatusProject(detail, TABLE_NAME));
        history.push('status-project/page/1');
      }
      else alert('Status project already exist!!!');
    }
  };
  return (
    <div>
      <div className='header'>CREATE</div>
      <div className='containerDetail'>
        <div className='groupData'>
          <label className='leading-loose'>Name :</label>
          <input
            type='text'
            className='inputDetail'
            name='name'
            value={name}
            onChange={handleChangeName}
            autoFocus
          />
        </div>
        {!isNameFilled ? <div className='text-red-600'>Please fill in name</div> : null}
        <div className='groupData'>
          <label className='leading-loose'>Description :</label>
          <textarea
            type='text'
            className='inputDetail'
            name='description'
            value={description}
            onChange={handleChangeDescription}
          />
        </div>
        {!isDescriptionFilled
          ? <div className='text-red-600'>Please fill in description</div> : null}
        <div className='groupData'>
          <label>Status:</label>
          <select className='select' name='status' value={status} onChange={handleChangeStatus}>
            <option value='Choose..'>Choose..</option>
            <option value='active'>Active</option>
            <option value='inactive'>Inactive</option>
          </select>
        </div>
        {!isStatusFilled
          ? <div className='text-red-600'>Please choose status</div> : null}
        <div>
          <div className='groupBtn'>
            <button className='btnCancel' onClick={handleCancel}>
              <i className='fas fa-times px-3'></i>CANCEL
            </button>
            <button className='btnConfirm' onClick={handleAdd}>
              ADD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
