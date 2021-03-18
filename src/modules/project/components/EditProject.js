import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleOutsideClick } from '../../../services/handleOutsideClick';
import { getData } from '../../../utils/utils';
import {
  TABLE_NAME,
  TYPE_PROJECT,
  STATUS_PROJECT,
  TECH_STACK,
  DEPARTMENT,
  STAFF,
} from '../project.constants';
import { updateProject } from '../project.services';

export const EditProject = ({ index, detail, cancel }) => {
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
  const refTypeProject = useRef();
  const refStatusProject = useRef();
  const refTechStack = useRef();
  const refDepartment = useRef();
  const refStaff = useRef();
  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeDescription = e => {
    setDescription(e.target.value);
  };
  const handleSelectTypeProject = element => {
    if (typeProjects.indexOf(element) === -1) {
      let list = [...typeProjects, element];
      setTypeProject(list);
    } else {
      handleDeleteTypeProject(element);
    }
  };
  const handleDeleteTypeProject = element => {
    setTypeProject(typeProjects.filter(item => item != element));
  };
  const handleSelectStatusProject = element => {
    if (statusProjects.indexOf(element) === -1) {
      let list = [...statusProjects, element];
      setStatusProject(list);
    } else {
      handleDeleteStatusProject(element);
    }
  };
  const handleDeleteStatusProject = element => {
    setStatusProject(statusProjects.filter(item => item != element));
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
  const handleSelectDepartment = element => {
    if (departments.indexOf(element) === -1) {
      let list = [...departments, element];
      setDepartment(list);
    } else {
      handleDeleteDepartment(element);
    }
  };
  const handleDeleteDepartment = element => {
    setDepartment(departments.filter(item => item != element));
  };
  const handleSelectStaff = element => {
    if (staffs.indexOf(element) === -1) {
      let list = [...staffs, element];
      setStaff(list);
    } else {
      handleDeleteStaff(element);
    }
  };
  const handleDeleteStaff = element => {
    setStaff(staffs.filter(item => item != element));
  };
  const dispatch = useDispatch();
  const handleSubmit = () => {
    const data = getData(TABLE_NAME);
    if (name === '' || description === '') {
      alert('Please fill in missing information!!');
    } else {
      name === undefined ? setName(detail.name) : null;
      description === undefined ? setDescription(detail.name) : null;
      let department = {
        name: name,
        description: description,
        typeProjects: typeProjects,
        statusProjects: statusProjects,
        techStacks: techStacks,
        departments: departments,
        staffs: staffs,
      };
      if (
        data.filter(element => JSON.stringify(element) === JSON.stringify(department)).length === 0
      ) {
        dispatch(updateProject(index, department, TABLE_NAME));
        cancel(true);
      } else {
        alert('Type project already exist!!!');
      }
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
        <div>
          <div className='groupData'>
            <label>Type Project :</label>
            <div
              className='inputDetail h-10'
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
            {isOpenTypeProject
              ? listTypeProjects !== undefined
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
                : null
              : null}
          </div>
          <div className='groupData'>
            <label>Status Project :</label>
            <div
              className='inputDetail h-10'
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
            {isOpenStatusProject
              ? listStatusProjects !== undefined
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
                : null
              : null}
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
            <label>Department :</label>
            <div
              className='inputDetail h-10'
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
            {isOpenDepartment
              ? listDepartments !== undefined
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
                : null
              : null}
          </div>
          <div className='groupData'>
            <label>Staff :</label>
            <div
              className='inputDetail h-10'
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
            {isOpenStaff
              ? listStaffs !== undefined
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
