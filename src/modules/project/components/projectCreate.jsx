import React from 'react';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  TABLE_NAME,
  TYPE_PROJECT,
  STATUS_PROJECT,
  TECH_STACK,
  DEPARTMENT,
  STAFF,
} from 'src/modules/project/project.constants';
import { addProject } from 'src/modules/project/project.services';
import { useHistory } from 'react-router-dom';
import { getData } from 'src/utils/utils';
import { handleOutsideClick } from 'src/services/handleOutsideClick';

export const ProjectCreate = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [typeProjects, setTypeProject] = useState([]);
  const [statusProjects, setStatusProject] = useState([]);
  const [techStacks, setTechStack] = useState([]);
  const [departments, setDepartment] = useState([]);
  const [staffs, setStaff] = useState([]);
  const listTypeProjects = getData(TYPE_PROJECT);
  const [isOpenTypeProject, setIsOpenTypeProject] = useState(false);
  const listStatusProjects = getData(STATUS_PROJECT);
  const [isOpenStatusProject, setIsOpenStatusProject] = useState(false);
  const listTechStacks = getData(TECH_STACK);
  const [isOpenTechStack, setIsOpenTechStack] = useState(false);
  const listDepartments = getData(DEPARTMENT);
  const [isOpenDepartment, setIsOpenDepartment] = useState(false);
  const listStaffs = getData(STAFF);
  const [isOpenStaff, setIsOpenStaff] = useState(false);
  const refTypeProject = useRef();
  const refStatusProject = useRef();
  const refTechStack = useRef();
  const refDepartment = useRef();
  const refStaff = useRef();

  const [isNameFilled, setNameFilled] = useState(true);
  const [isDescriptionFilled, setDescriptionFilled] = useState(true);
  const [isTypeProjectFilled, setTypeProjectFilled] = useState(true);
  const [isStatusProjectFilled, setStatusProjectFilled] = useState(true);
  const [isTechStackFilled, setTechStackFilled] = useState(true);
  const [isDepartmentFilled, setDepartmentFilled] = useState(true);
  const [isStaffFilled, setStaffFilled] = useState(true);

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeDescription = e => {
    setDescription(e.target.value);
  };
  const handleSelectTypeProject = element => {
    if (typeProjects.indexOf(element) === -1) {
      const list = [...typeProjects, element];
      setTypeProject(list);
    }
    else handleDeleteTypeProject(element);
  };
  const handleDeleteTypeProject = element => {
    setTypeProject(typeProjects.filter(item => item !== element));
  };
  const handleSelectStatusProject = element => {
    if (statusProjects.indexOf(element) === -1) {
      const list = [...statusProjects, element];
      setStatusProject(list);
    }
    else handleDeleteStatusProject(element);
  };
  const handleDeleteStatusProject = element => {
    setStatusProject(statusProjects.filter(item => item !== element));
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
  const handleSelectDepartment = element => {
    if (departments.indexOf(element) === -1) {
      const list = [...departments, element];
      setDepartment(list);
    }
    else handleDeleteDepartment(element);
  };
  const handleDeleteDepartment = element => {
    setDepartment(departments.filter(item => item !== element));
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
  const dispatch = useDispatch();
  const history = useHistory();
  const handleCancel = () => history.push('project/page/1');
  const handleAdd = () => {
    const detail = {
      name,
      description,
      typeProjects,
      statusProjects,
      techStacks,
      departments,
      staffs,
      id: Math.random().toString(36).substring(4),
    };
    const data = getData(TABLE_NAME);
    if (name === '') setNameFilled(false);
    else setNameFilled(true);
    if (description === '') setDescriptionFilled(false);
    else setDescriptionFilled(true);
    if (typeProjects.length === 0) setTypeProjectFilled(false);
    else setTypeProjectFilled(true);
    if (statusProjects.length === 0) setStatusProjectFilled(false);
    else setStatusProjectFilled(true);
    if (techStacks.length === 0) setTechStackFilled(false);
    else setTechStackFilled(true);
    if (departments.length === 0) setDepartmentFilled(false);
    else setDepartmentFilled(true);
    if (staffs.length === 0) setStaffFilled(false);
    else setStaffFilled(true);
    if (name !== '' && description !== '' &&
    typeProjects.length !== 0 && statusProjects !== 0 &&
    techStacks.length !== 0 && departments.length !== 0 && staffs.length !== 0) {
      if (
        data.filter(
          element => element.name === detail.name && element.description === detail.description,
        ).length === 0
      ) {
        dispatch(addProject(detail, TABLE_NAME));
        history.push('project/page/1');
      }
      else alert('Type project already exist!!!');
    }
  };
  handleOutsideClick(refTypeProject, () => setIsOpenTypeProject(false));
  handleOutsideClick(refStatusProject, () => setIsOpenStatusProject(false));
  handleOutsideClick(refTechStack, () => setIsOpenTechStack(false));
  handleOutsideClick(refDepartment, () => setIsOpenDepartment(false));
  handleOutsideClick(refStaff, () => setIsOpenStaff(false));
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
        <div>
          <div className='groupData'>
            <label>Type Project :</label>
            <div
              className='inputDetail h-10 cursor-pointer'
              onClick={() => {
                setIsOpenTypeProject(!isOpenTypeProject);
              }}
              ref={refTypeProject}
            >
              <div className='flex flex-auto flex-wrap'>
                {typeProjects.map((element, index) => (
                  <div
                    key={index}
                    onClick={e => {
                      handleDeleteTypeProject(element);
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
          <div className={isOpenTypeProject === true ? 'listSelect' : null}>
            {isOpenTypeProject && listTypeProjects !== undefined
              ? listTypeProjects.map((element, index) => (
                <div
                  key={index}
                  onClick={() => handleSelectTypeProject(element.name)}
                  className={
                    typeProjects.indexOf(element.name) === -1
                      ? 'selected py-1'
                      : 'selected line-through bg-gray-400 py-1'
                  }
                >
                  {element.name}
                </div>
              ))
              : null}
          </div>
          {!isTypeProjectFilled
            ? <div className='text-red-600'>Please choose type project</div> : null}
          <div className='groupData'>
            <label>Status Project :</label>
            <div
              className='inputDetail h-10 cursor-pointer'
              onClick={() => {
                setIsOpenStatusProject(!isOpenStatusProject);
              }}
              ref={refStatusProject}
            >
              <div className='flex flex-auto flex-wrap'>
                {statusProjects.map((element, index) => (
                  <div
                    key={index}
                    onClick={e => {
                      handleDeleteStatusProject(element);
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
          <div className={isOpenStatusProject === true ? 'listSelect' : null}>
            {isOpenStatusProject && listStatusProjects !== undefined
              ? listStatusProjects.map((element, index) => (
                <div
                  key={index}
                  onClick={() => handleSelectStatusProject(element.name)}
                  className={
                    statusProjects.indexOf(element.name) === -1
                      ? 'selected py-1'
                      : 'selected line-through bg-gray-400 py-1'
                  }
                >
                  {element.name}
                </div>
              ))
              : null}
          </div>
          {!isStatusProjectFilled
            ? <div className='text-red-600'>Please choose status project</div> : null}
          <div className='groupData'>
            <label>Tech Stack :</label>
            <div
              className='inputDetail h-10 cursor-pointer'
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
            <label>Department :</label>
            <div
              className='inputDetail h-10 cursor-pointer'
              onClick={() => {
                setIsOpenDepartment(!isOpenDepartment);
              }}
              ref={refDepartment}
            >
              <div className='flex flex-auto flex-wrap'>
                {departments.map((element, index) => (
                  <div
                    key={index}
                    onClick={e => {
                      handleDeleteDepartment(element);
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
          <div className={isOpenDepartment === true ? 'listSelect' : null}>
            {isOpenDepartment && listDepartments !== undefined
              ? listDepartments.map((element, index) => (
                <div
                  key={index}
                  onClick={() => handleSelectDepartment(element.name)}
                  className={
                    departments.indexOf(element.name) === -1
                      ? 'selected py-1'
                      : 'selected line-through bg-gray-400 py-1'
                  }
                >
                  {element.name}
                </div>
              ))
              : null}
          </div>
          {!isDepartmentFilled
            ? <div className='text-red-600'>Please choose department</div> : null}
          <div className='groupData'>
            <label>Staff :</label>
            <div
              className='inputDetail h-10 cursor-pointer'
              onClick={() => {
                setIsOpenStaff(!isOpenStaff);
              }}
              ref={refStaff}
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
          <div className={isOpenStaff === true ? 'listSelect' : null}>
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
