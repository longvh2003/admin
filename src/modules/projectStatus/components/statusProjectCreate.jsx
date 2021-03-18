import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TABLE_NAME } from '../statusProject.constants';
import { addStatusProject } from '../statusProject.services';
import { useHistory } from 'react-router-dom';
import { getData } from '../../../utils/utils';

export const StatusProjectCreate = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Choose..');

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
  const handleCancel = () => history.push('status-project');
  const handleAdd = () => {
    const data = getData(TABLE_NAME);
    if (name === '' || description === '' || status === 'Choose..') {
      alert('Please fill in missing information!!');
    } else {
      let detail = {
        name: name,
        description: description,
        status: status,
      };
      if (
        data.filter(
          element => element.name === detail.name && element.description === detail.description,
        ).length === 0
      ) {
        dispatch(addStatusProject(detail, TABLE_NAME));
        history.push('status-project');
      } else {
        alert('Status project already exist!!!');
      }
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
        <div className='groupData'>
          <label>Status:</label>
          <select className='select' name='status' value={status} onChange={handleChangeStatus}>
            <option value='0'>Choose..</option>
            <option value='active'>Active</option>
            <option value='inactive'>Inactive</option>
          </select>
        </div>
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
