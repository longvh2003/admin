import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleOutsideClick } from '../../../services/handleOutsideClick';
import { getData } from '../../../utils/utils';
import { TABLE_NAME, TECH_STACK, STAFF, PROJECT } from '../department.constants';
import { updateDepartment } from '../department.services';

export const EditDepartment = ({ index, detail, cancel }) => {
  const [name, setName] = useState(detail.name);
  const [description, setDescription] = useState(detail.description);
  const [techStacks, setTechStack] = useState(detail.techStacks);
  const [staffs, setStaff] = useState(detail.staffs);
  const [projects, setProject] = useState(detail.projects);
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
        techStacks: techStacks,
        staffs: staffs,
        projects: projects,
      };
      if (
        data.filter(element => JSON.stringify(element) === JSON.stringify(department)).length === 0
      ) {
        dispatch(updateDepartment(index, department, TABLE_NAME));
        cancel(true);
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
      <div className='header'>DETAIL</div>
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
