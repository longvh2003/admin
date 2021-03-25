import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { handleOutsideClick } from 'src/services/handleOutsideClick';
import { getData } from 'src/utils/utils';
import {
  TABLE_NAME,
  TYPE_PROJECT,
  STATUS_PROJECT,
  TECH_STACK,
  DEPARTMENT,
  STAFF,
} from '../project.constants';
import { updateProject } from '../project.services';
import { useParams, useHistory } from 'react-router-dom';

export const EditProject = () => {
  const history = useHistory();
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const data = getData(TABLE_NAME);
    setDetail(data.filter(element => element.id === id)[0]);
  }, []);

  const [name, setName] = useState(detail.name);
  const [description, setDescription] = useState(detail.description);
  const [typeProjects, setTypeProject] = useState(detail.typeProjects);
  const [statusProjects, setStatusProject] = useState(detail.statusProjects);
  const [techStacks, setTechStack] = useState(detail.techStacks);
  const [departments, setDepartment] = useState(detail.departments);
  const [staffs, setStaff] = useState(detail.staffs);
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

  useEffect(() => {
    setName(detail.name);
    setDescription(detail.description);
    setTypeProject(detail.typeProjects);
    setStatusProject(detail.statusProjects);
    setTechStack(detail.techStacks);
    setDepartment(detail.departments);
    setStaff(detail.staffs);
  }, [detail]);

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
  const handleSubmit = () => {
    const data = getData(TABLE_NAME);
    const listData = data.filter(
      element => element.name !== detail.name && element.description !== detail.description,
    );
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
      const project = {
        name,
        description,
        typeProjects,
        statusProjects,
        techStacks,
        departments,
        staffs,
        id: detail.id,
      };
      if (
        listData.filter(
          element => element.name === project.name && element.description === project.description,
        ).length === 0
      ) {
        dispatch(updateProject(id, project, TABLE_NAME));
        history.push(`/project/detail/${id}`);
      }
      else alert('Type project already exist!!!');
    }
  };
  handleOutsideClick(refTypeProject, () =>
    isOpenTypeProject === true ? setIsOpenTypeProject(false) : null,
  );
  handleOutsideClick(refStatusProject, () =>
    isOpenStatusProject === true ? setIsOpenStatusProject(false) : null,
  );
  handleOutsideClick(refTechStack, () =>
    isOpenTechStack === true ? setIsOpenTechStack(false) : null,
  );
  handleOutsideClick(refDepartment, () =>
    isOpenDepartment === true ? setIsOpenDepartment(false) : null,
  );
  handleOutsideClick(refStaff, () => (isOpenStaff === true ? setIsOpenStaff(false) : null));
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
            >
              <div className='flex flex-auto flex-wrap'>
                {typeProjects !== undefined ? typeProjects.map((element, index) => (
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
                )) : null}
              </div>
            </div>
          </div>
          <div className={isOpenTypeProject === true ? 'listSelect' : null} ref={refTypeProject}>
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
            >
              <div className='flex flex-auto flex-wrap'>
                {statusProjects !== undefined ? statusProjects.map((element, index) => (
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
                )) : null}
              </div>
            </div>
          </div>
          <div className={isOpenStatusProject === true ? 'listSelect' : null}
            ref={refStatusProject}>
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
            >
              <div className='flex flex-auto flex-wrap'>
                {techStacks !== undefined ? techStacks.map((element, index) => (
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
                )) : null}
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
            <label>Department :</label>
            <div
              className='inputDetail h-10 cursor-pointer'
              onClick={() => {
                setIsOpenDepartment(!isOpenDepartment);
              }}
            >
              <div className='flex flex-auto flex-wrap'>
                {departments !== undefined ? departments.map((element, index) => (
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
                )) : null}
              </div>
            </div>
          </div>
          <div className={isOpenDepartment === true ? 'listSelect' : null} ref={refDepartment}>
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
            >
              <div className='flex flex-auto flex-wrap'>
                {staffs !== undefined ? staffs.map((element, index) => (
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
                )) : null}
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
          <div>
            <div className='groupBtn'>
              <button className='btnCancel' onClick={() => history.push(`/project/detail/${id}`)}>
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
