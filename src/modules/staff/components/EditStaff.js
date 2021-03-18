import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleOutsideClick } from '../../../services/handleOutsideClick';
import { getData } from '../../../utils/utils';
import { TABLE_NAME, TECH_STACK, PROJECT } from '../staff.constants';
import { updateStaff } from '../staff.services';

export const EditStaff = ({ index, detail, cancel }) => {
  const [name, setName] = useState(detail.name);
  const [date, setDate] = useState(detail.date);
  const [id, setId] = useState(detail.id);
  const [phoneNumber, setPhoneNumber] = useState(detail.phoneNumber);
  const [address, setAddress] = useState(detail.address);
  const [techStacks, setTechStack] = useState(detail.techStacks);
  const [projects, setProject] = useState(detail.projects);
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
  const handleSubmit = () => {
    const data = getData(TABLE_NAME);
    if (name === '' || date === '' || id === '' || phoneNumber === '' || address === '') {
      alert('Please fill in missing information!!');
    } else {
      name === undefined ? setName(detail.name) : null;
      date === undefined ? setDate(detail.dateOfBirth) : null;
      id === undefined ? setId(detail.id) : null;
      phoneNumber === undefined ? setPhoneNumber(detail.phoneNumber) : null;
      address === undefined ? setAddress(detail.address) : null;
      let staff = {
        name: name,
        date: date,
        id: id,
        phoneNumber: phoneNumber,
        address: address,
        techStacks: techStacks,
        projects: projects,
      };
      console.log(date);
      if (data.filter(element => JSON.stringify(element) === JSON.stringify(staff)).length === 0) {
        dispatch(updateStaff(index, staff, TABLE_NAME));
        cancel(true);
      } else {
        alert('Type project already exist!!!');
      }
    }
  };
  handleOutsideClick(refTechStack, () => setIsOpenTechStack(false));
  handleOutsideClick(refProject, () => setIsOpenProject(false));
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
              ref={refTechStack}
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
          <div className={isOpenTechStack === true ? 'listSelect' : null}>
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
              ref={refProject}
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
          <div className={isOpenProject === true ? 'listSelect' : null}>
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
    </div>
  );
};
