import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getData } from '../../../utils/utils';
import { TABLE_NAME } from '../typeProject.constants';
import { updateTypeProject } from '../typeProject.services';

export const EditTypeProject = ({ index, detail, cancel }) => {
  const [name, setName] = useState(detail.name);
  const [description, setDescription] = useState(detail.description);
  const [priority, setPriority] = useState(detail.priority);
  const [status, setStatus] = useState(detail.status);

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
  const dispatch = useDispatch();
  const handleSubmit = () => {
    const data = getData(TABLE_NAME);
    if (name === '' || description === '') {
      alert('Please fill in missing information!!');
    } else {
      name === undefined ? setName(detail.name) : null;
      description === undefined ? setDescription(detail.description) : null;
      priority === undefined ? setPriority(detail.priorityNumber) : null;
      status === undefined ? setStatus(detail.status) : null;
      let typeProject = {
        name: name,
        description: description,
        priority: priority,
        status: status,
      };
      if (
        data.filter(element => JSON.stringify(element) === JSON.stringify(typeProject)).length === 0
      ) {
        dispatch(updateTypeProject(index, typeProject, TABLE_NAME));
        cancel(true);
      } else {
        alert('Type project already exist!!!');
      }
    }
  };
  return (
    <div>
      <div className='header'>EDIT</div>
      <div className='containerDetail'>
        <div className='groupData'>
          <label className='leading-loose'>Name :</label>
          <input
            type='text'
            className='inputDetail'
            name='name'
            value={name}
            onChange={handleChangeName}
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
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
          </select>
          <label>Status:</label>
          <select className='select' name='status' value={status} onChange={handleChangeStatus}>
            <option value='active'>Active</option>
            <option value='inactive'>Inactive</option>
          </select>
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