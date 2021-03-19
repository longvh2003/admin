import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { TABLE_NAME, TECH_STACK, PROJECT } from '../staff.constants';
import { addStaff } from '../staff.services';
import { useHistory } from 'react-router-dom';
import { getData } from '../../../utils/utils';
import { handleOutsideClick } from '../../../services/handleOutsideClick';

export const StaffCreate = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [id, setId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [techStacks, setTechStack] = useState([]);
  const [projects, setProject] = useState([]);
  const listTechStacks = getData(TECH_STACK);
  const [isOpenTechStack, setIsOpenTechStack] = useState(false);
  const listProjects = getData(PROJECT);
  const [isOpenProject, setIsOpenProject] = useState(false);
  const refTechStack = useRef();
  const refProject = useRef();
  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeDate = e => {
    setDate(e.target.value);
  };
  const handleChangeId = e => {
    setId(e.target.value);
  };
  const handleChangePhoneNumber = e => {
    setPhoneNumber(e.target.value);
  };
  const handleChangeAddress = e => {
    setAddress(e.target.value);
  };
  const handleSelectTechStack = element => {
    if (techStacks.indexOf(element) === -1) {
      let list = [...techStacks, element];
      setTechStack(list);
    } else {
      handleDeleteTechStack(element);
    }
  };
  const handleDeleteTechStack = element => {
    setTechStack(techStacks.filter(item => item != element));
  };
  const handleSelectProject = element => {
    if (projects.indexOf(element) === -1) {
      let list = [...projects, element];
      setProject(list);
    } else {
      handleDeleteProject(element);
    }
  };
  const handleDeleteProject = element => {
    setProject(projects.filter(item => item != element));
  };
  const dispatch = useDispatch();
  const history = useHistory();
  const handleCancel = () => history.push('staff');
  const handleAdd = () => {
    let detail = {
      name: name,
      date: date,
      id: id,
      phoneNumber: phoneNumber,
      address: address,
      techStacks: techStacks,
      projects: projects,
    };
    const data = getData(TABLE_NAME);
    if (detail.name === '' || detail.description === '') {
      alert('Please fill in missing information!!');
    } else {
      if (data.filter(element => JSON.stringify(element) === JSON.stringify(detail)).length === 0) {
        dispatch(addStaff(detail, TABLE_NAME));
        history.push('staff');
      } else {
        alert('Type staff already exist!!!');
      }
    }
  };
  handleOutsideClick(refTechStack, () =>
    isOpenTechStack === true ? setIsOpenTechStack(false) : null,
  );
  handleOutsideClick(refProject, () => (isOpenProject === true ? setIsOpenProject(false) : null));
  return (
    <div>
      <div className='header'>DETAIL</div>
      <div className='containerDetail'>
        <div>
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
            <label className='leading-loose'>Date of Birth :</label>
            <input
              type='date'
              className='inputDetail'
              name='date'
              value={date}
              onChange={handleChangeDate}
            />
          </div>
          <div className='groupData'>
            <label className='leading-loose'>Id :</label>
            <input
              type='text'
              className='inputDetail'
              name='id'
              value={id}
              onChange={handleChangeId}
            />
          </div>
          <div className='groupData'>
            <label className='leading-loose'>Phone Number :</label>
            <input
              type='text'
              className='inputDetail'
              name='phoneNumber'
              value={phoneNumber}
              onChange={handleChangePhoneNumber}
            />
          </div>
          <div className='groupData'>
            <label className='leading-loose'>Address :</label>
            <input
              type='text'
              className='inputDetail'
              name='address'
              value={address}
              onChange={handleChangeAddress}
            />
          </div>
          <div className='groupData'>
            <label>Tech Stack :</label>
            <div
              className='inputDetail h-10'
              onClick={() => {
                setIsOpenTechStack(!isOpenTechStack);
              }}
            >
              <div className='flex flex-auto flex-wrap'>
                {techStacks.map((element, index) => (
                  <div
                    key={index}
                    onClick={e => {
                      handleDeleteTechStack(element);
                      e.stopPropagation();
                    }}
                    className='multiSelect'
                  >
                    {element}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={isOpenTechStack === true ? 'listSelect' : null} ref={refTechStack}>
            {isOpenTechStack
              ? listTechStacks !== undefined
                ? listTechStacks.map((element, index) => (
                    <div
                      key={index}
                      onClick={() => handleSelectTechStack(element.name)}
                      className={
                        techStacks.indexOf(element.name) === -1
                          ? 'selected py-1'
                          : 'selected line-through bg-gray-400 py-1'
                      }
                    >
                      {element.name}
                    </div>
                  ))
                : null
              : null}
          </div>
          <div className='groupData'>
            <label>Project :</label>
            <div
              className='inputDetail h-10'
              onClick={() => {
                setIsOpenProject(!isOpenProject);
              }}
            >
              <div className='flex flex-auto flex-wrap'>
                {projects.map((element, index) => (
                  <div
                    key={index}
                    onClick={e => {
                      handleDeleteProject(element);
                      e.stopPropagation();
                    }}
                    className='multiSelect'
                  >
                    {element}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={isOpenProject === true ? 'listSelect' : null} ref={refProject}>
            {isOpenProject
              ? listProjects !== undefined
                ? listProjects.map((element, index) => (
                    <div
                      key={index}
                      onClick={() => handleSelectProject(element.name)}
                      className={
                        projects.indexOf(element.name) === -1
                          ? 'selected py-1'
                          : 'selected line-through bg-gray-400 py-1'
                      }
                    >
                      {element.name}
                    </div>
                  ))
                : null
              : null}
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
    </div>
  );
};
