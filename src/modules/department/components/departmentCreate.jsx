import React from 'react';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { TABLE_NAME, TECH_STACK, STAFF, PROJECT }
  from 'src/modules/department/department.constants';
import { addDepartment } from 'src/modules/department/department.services';
import { useHistory } from 'react-router-dom';
import { getData } from 'src/utils/utils';
import { handleOutsideClick } from 'src/services/handleOutsideClick';

export const DepartmentCreate = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [techStacks, setTechStack] = useState([]);
  const [staffs, setStaff] = useState([]);
  const [projects, setProject] = useState([]);
  const listTechStacks = getData(TECH_STACK);
  const [isOpenTechStack, setIsOpenTechStack] = useState(false);
  const listStaffs = getData(STAFF);
  const [isOpenStaff, setIsOpenStaff] = useState(false);
  const listProjects = getData(PROJECT);
  const [isOpenProject, setIsOpenProject] = useState(false);

  const refTechStack = useRef();
  const refStaff = useRef();
  const refProject = useRef();

  const [isNameFilled, setNameFilled] = useState(true);
  const [isDescriptionFilled, setDescriptionFilled] = useState(true);
  const [isTechStackFilled, setTechStackFilled] = useState(true);
  const [isStaffFilled, setStaffFilled] = useState(true);
  const [isProjectFilled, setProjectFilled] = useState(true);

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeDescription = e => {
    setDescription(e.target.value);
  };
  const handleSelectTechStack = element => {
    if (techStacks.indexOf(element) === -1) {
      const list = [...techStacks, element];
      setTechStack(list);
    }
    else handleDeleteTechStack(element);
  };
  const handleDeleteTechStack = element => {
    setTechStack(techStacks.filter(item => item !== element));
  };
  const handleSelectStaff = element => {
    if (staffs.indexOf(element) === -1) {
      const list = [...staffs, element];
      setStaff(list);
    }
    else handleDeleteStaff(element);
  };
  const handleDeleteStaff = element => {
    setStaff(staffs.filter(item => item !== element));
  };
  const handleSelectProject = element => {
    if (projects.indexOf(element) === -1) {
      const list = [...projects, element];
      setProject(list);
    }
    else handleDeleteProject(element);
  };
  const handleDeleteProject = element => {
    setProject(projects.filter(item => item !== element));
  };
  const dispatch = useDispatch();
  const history = useHistory();
  const handleCancel = () => history.push('department/page/1');
  const handleAdd = () => {
    const data = getData(TABLE_NAME);
    if (name === '') setNameFilled(false);
    else setNameFilled(true);
    if (description === '') setDescriptionFilled(false);
    else setDescriptionFilled(true);
    if (techStacks.length === 0) setTechStackFilled(false);
    else setTechStackFilled(true);
    if (staffs.length === 0) setStaffFilled(false);
    else setStaffFilled(true);
    if (projects.length === 0) setProjectFilled(false);
    else setProjectFilled(true);
    if (name !== '' && description !== '' &&
    techStacks.length !== 0 && staffs.length !== 0 && projects.length !== 0) {
      const detail = {
        name,
        description,
        techStacks,
        staffs,
        projects,
        id: Math.random().toString(36).substring(4),
      };
      if (
        data.filter(
          element => element.name === detail.name && element.description === detail.description,
        ).length === 0
      ) {
        dispatch(addDepartment(detail, TABLE_NAME));
        history.push('department/page/1');
      }
      else alert('Type department already exist!!!');
    }
  };
  handleOutsideClick(refTechStack, () =>
    isOpenTechStack === true ? setIsOpenTechStack(false) : null,
  );
  handleOutsideClick(refStaff, () => (isOpenStaff === true ? setIsOpenStaff(false) : null));
  handleOutsideClick(refProject, () => (isOpenProject === true ? setIsOpenProject(false) : null));
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
          <label>Tech Stack :</label>
          <div
            className='inputDetail h-10 cursor-pointer'
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
          {isOpenTechStack && listTechStacks !== undefined
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
            : null}
        </div>
        {!isTechStackFilled
          ? <div className='text-red-600'>Please choose tech stack</div> : null}
        <div className='groupData'>
          <label>Staff :</label>
          <div
            className='inputDetail h-10 cursor-pointer'
            onClick={() => {
              setIsOpenStaff(!isOpenStaff);
            }}
          >
            <div className='flex flex-auto flex-wrap'>
              {staffs.map((element, index) => (
                <div
                  key={index}
                  onClick={e => {
                    handleDeleteStaff(element);
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
        <div className={isOpenStaff === true ? 'listSelect' : null} ref={refStaff}>
          {isOpenStaff && listStaffs !== undefined
            ? listStaffs.map((element, index) => (
              <div
                key={index}
                onClick={() => handleSelectStaff(element.name)}
                className={
                  staffs.indexOf(element.name) === -1
                    ? 'selected py-1'
                    : 'selected line-through bg-gray-400 py-1'
                }
              >
                {element.name}
              </div>
            ))
            : null}
        </div>
        {!isStaffFilled
          ? <div className='text-red-600'>Please choose staff</div> : null}
        <div className='groupData'>
          <label>Project :</label>
          <div
            className='inputDetail h-10 cursor-pointer'
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
          {isOpenProject && listProjects !== undefined
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
            : null}
        </div>
        {!isProjectFilled
          ? <div className='text-red-600'>Please choose project</div> : null}
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
