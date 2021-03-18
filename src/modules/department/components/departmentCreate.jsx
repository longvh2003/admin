import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { TABLE_NAME, TECH_STACK, STAFF, PROJECT } from '../department.constants';
import { addDepartment } from '../department.services';
import { useHistory } from 'react-router-dom';
import { getData } from '../../../utils/utils';
import { handleOutsideClick } from '../../../services/handleOutsideClick';

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
  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeDescription = e => {
    setDescription(e.target.value);
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
  const handleCancel = () => history.push('department');
  const handleAdd = () => {
    let detail = {
      name: name,
      description: description,
      techStacks: techStacks,
      staffs: staffs,
      projects: projects,
    };
    const data = getData(TABLE_NAME);
    if (detail.name === '' || detail.description === '') {
      alert('Please fill in missing information!!');
    } else {
      if (
        data.filter(
          element => element.name === detail.name && element.description === detail.description,
        ).length === 0
      ) {
        dispatch(addDepartment(detail, TABLE_NAME));
        history.push('department');
      } else {
        alert('Type department already exist!!!');
      }
    }
  };
  handleOutsideClick(refTechStack, () => setIsOpenTechStack(false));
  handleOutsideClick(refStaff, () => setIsOpenStaff(false));
  handleOutsideClick(refProject, () => setIsOpenProject(false));
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
