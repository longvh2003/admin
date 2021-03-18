import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TABLE_NAME } from '../typeProject.constants';
import { addTypeProject } from '../typeProject.services';
import { useHistory } from 'react-router-dom';
import { getData } from '../../../utils/utils';

export const TypeProjectCreate = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Choose..');
  const [status, setStatus] = useState('Choose..');

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeDescription = e => {
    setDescription(e.target.value);
  };

  const handleChangePriority = e => {
    setPriority(e.target.value);
  };

  const handleChangeStatus = e => {
    setStatus(e.target.value);
  };
  const history = useHistory();
  const dispatch = useDispatch();
  const handleCancel = () => history.push('type-project');
  const handleAdd = () => {
    const data = getData(TABLE_NAME);
    if (name === '' || description === '' || priority === 'Choose..' || status === 'Choose..') {
      alert('Please fill in missing information!!');
    } else {
      let detail = {
        name: name,
        description: description,
        priority: priority,
        status: status,
      };
      if (
        data.filter(
          element => element.name === detail.name && element.description === detail.description,
        ).length === 0
      ) {
        dispatch(addTypeProject(detail, TABLE_NAME));
        history.push('type-project');
      } else {
        alert('Type project already exist!!!');
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
          <label>Priority:</label>
          <select
            className='select'
            name='priority'
            value={priority}
            onChange={handleChangePriority}
          >
            <option value='0'>Choose..</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
          </select>
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
