import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getData } from 'src/utils/utils';
import { TABLE_NAME } from 'src/modules/techStack/techStack.constants';
import { updateTechStack } from 'src/modules/techStack/techStack.services';

export const EditTechStack = ({ index, detail, cancel }) => {
  const [name, setName] = useState(detail.name);
  const [description, setDescription] = useState(detail.description);
  const [status, setStatus] = useState(detail.status);

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

  const dispatch = useDispatch();
  const handleSubmit = () => {
    const data = getData(TABLE_NAME);
    const listData = data.filter(
      element => element.name !== detail.name && element.description !== detail.description,
    );
    if (name === '') { setIsNameFilled(false); }
    else setIsNameFilled(true);
    if (description === '') setDescriptionFilled(false);
    else setDescriptionFilled(true);
    if (status === 'Choose..') setStatusFilled(false);
    else setStatusFilled(true);
    if (name !== '' && description !== '' && status !== 'Choose..') {
      const techStack = {
        name,
        description,
        status,
        id: detail.id,
      };
      if (
        listData.filter(
          element =>
            element.name === techStack.name && element.description === techStack.description,
        ).length === 0
      ) {
        dispatch(updateTechStack(index, techStack, TABLE_NAME));
        cancel(true);
      }
      else alert('Type project already exist!!!');
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
        {!isNameFilled
          ? <div className='text-red-600'>Please fill in name</div> : null}
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
          {!isStatusFilled
            ? <div className='text-red-600'>Please choose priority number</div> : null}
        </div>
        <div>
          <div className='groupBtn'>
            <button className='btnCancel' onClick={() => cancel(true)}>
              <i className='fas fa-times px-3'></i>CANCEL
            </button>
            <button className='btnConfirm' onClick={handleSubmit}>
              UPDATE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
