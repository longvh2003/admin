import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getData } from 'src/utils/utils';
import { TABLE_NAME } from 'src/modules/projectStatus/statusProject.constants';
import { updateStatusProject } from 'src/modules/projectStatus/statusProject.services';
import { useParams, useHistory } from 'react-router-dom';

export const EditStatusProject = () => {
  const history = useHistory();
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const data = getData(TABLE_NAME);
    setDetail(data.filter(element => element.id === id)[0]);
  }, []);

  const [name, setName] = useState(detail.name);
  const [description, setDescription] = useState(detail.description);
  const [status, setStatus] = useState(detail.status);

  useEffect(() => {
    setName(detail.name);
    setDescription(detail.description);
    setStatus(detail.status);
  }, [detail]);

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
      const statusProject = {
        name,
        description,
        status,
        id: detail.id,
      };
      if (
        listData.filter(
          element =>
            element.name === statusProject.name &&
            element.description === statusProject.description,
        ).length === 0
      ) {
        dispatch(updateStatusProject(id, statusProject, TABLE_NAME));
        history.push(`/status-project/detail/${id}`);
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
            <button className='btnCancel'
              onClick={() => history.push(`/status-project/detail/${id}`)}>
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
