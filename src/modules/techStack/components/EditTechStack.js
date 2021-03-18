import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getData } from '../../../utils/utils';
import { TABLE_NAME } from '../techStack.constants';
import { updateTechStack } from '../techStack.services';

export const EditTechStack = ({ index, detail, cancel }) => {
  const [name, setName] = useState(detail.name);
  const [description, setDescription] = useState(detail.description);
  const [status, setStatus] = useState(detail.status);

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
    if (detail.name === '' || detail.description === '' || detail.status === 'Choose..') {
      alert('Please fill in missing information!!');
    } else {
      name.input !== undefined ? (detail.name = name.input) : null;
      description.input !== undefined ? (detail.description = description.input) : null;
      status.input !== undefined ? (detail.status = status.input) : null;
      let techStack = {
        name: name,
        description: description,
        status: status,
      };
      if (
        data.filter(
          element => element.name === detail.name && element.description === detail.description,
        ).length === 0
      ) {
        dispatch(updateTechStack(index, techStack, TABLE_NAME));
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
