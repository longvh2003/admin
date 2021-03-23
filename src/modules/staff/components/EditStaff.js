import React from 'react';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleOutsideClick } from 'src/services/handleOutsideClick';
import { validId, validName, validPhoneNumber } from 'src/services/regex';
import { getData } from 'src/utils/utils';
import { TABLE_NAME, TECH_STACK, PROJECT } from 'src/modules/staff/staff.constants';
import { updateStaff } from 'src/modules/staff/staff.services';

export const EditStaff = ({ index, detail, cancel }) => {
  const [name, setName] = useState(detail.name);
  const [date, setDate] = useState(detail.date);
  const [identificationNumber, setIdentificationNumber] = useState(detail.identificationNumber);
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

  const [isNameFilled, setNameFilled] = useState(true);
  const [isDateOfBirthFilled, setDateOfBirthFilled] = useState(true);
  const [isIdentificationNumberFilled, setIdentificationNumberFilled] = useState(true);
  const [isPhoneNumberFilled, setPhoneNumberFilled] = useState(true);
  const [isAddressFilled, setAddressFilled] = useState(true);
  const [isTechStackFilled, setTechStackFilled] = useState(true);
  const [isProjectFilled, setProjectFilled] = useState(true);

  const [isValidName, setValidName] = useState(true);
  const [isValidId, setValidId] = useState(true);
  const [isValidPhoneNumber, setValidPhoneNumber] = useState(true);

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeDate = e => {
    setDate(e.target.value);
  };
  const handleChangeId = e => {
    setIdentificationNumber(e.target.value);
  };
  const handleChangePhoneNumber = e => {
    setPhoneNumber(e.target.value);
  };
  const handleChangeAddress = e => {
    setAddress(e.target.value);
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
  const handleSubmit = () => {
    if (name === '') setNameFilled(false);
    else setNameFilled(true);
    if (date === '') setDateOfBirthFilled(false);
    else setDateOfBirthFilled(true);
    if (identificationNumber === '') setIdentificationNumberFilled(false);
    else setIdentificationNumberFilled(true);
    if (phoneNumber === '') setPhoneNumberFilled(false);
    else setPhoneNumberFilled(true);
    if (address === '') setAddressFilled(false);
    else setAddressFilled(true);
    if (techStacks.length === 0) setTechStackFilled(false);
    else setTechStackFilled(true);
    if (projects.length === 0) setProjectFilled(false);
    else setProjectFilled(true);
    if (validName(name) !== null) setValidName(true);
    else setValidName(false);
    if (validId(identificationNumber) !== null) setValidId(true);
    else setValidId(false);
    if (validPhoneNumber(phoneNumber) !== null) setValidPhoneNumber(true);
    else setValidPhoneNumber(false);
    if (name !== '' && date !== '' && identificationNumber !== '' &&
    phoneNumber !== '' && address !== '' &&
    techStacks.length !== 0 && projects.length !== 0 &&
    validName(name) !== null && validId(identificationNumber) !== null &&
    validPhoneNumber(phoneNumber) !== null) {
      const staff = {
        name,
        date,
        identificationNumber,
        phoneNumber,
        address,
        techStacks,
        projects,
        id: detail.id,
      };
      dispatch(updateStaff(index, staff, TABLE_NAME));
      cancel(true);
    }
  };
  handleOutsideClick(refTechStack, () =>
    isOpenTechStack === true ? setIsOpenTechStack(false) : null,
  );
  handleOutsideClick(refProject, () => (isOpenProject === true ? setIsOpenProject(false) : null));
  return (
    <div>
      <div className='header'>CREATE</div>
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
          {!isValidName
            ? <div className='text-red-600'>Only letter</div> : null}
          {!isNameFilled
            ? <div className='text-red-600'>Please fill in name</div> : null}
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
          {!isDateOfBirthFilled
            ? <div className='text-red-600'>Please fill in date of birth</div> : null}
          <div className='groupData'>
            <label className='leading-loose'>Identification Number :</label>
            <input
              type='text'
              className='inputDetail'
              name='id'
              value={identificationNumber}
              onChange={handleChangeId}
            />
          </div>
          {!isValidId
            ? <div className='text-red-600'>Two digit number</div> : null}
          {!isIdentificationNumberFilled
            ? <div className='text-red-600'>Please fill in identification number</div> : null}
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
          {!isValidPhoneNumber
            ? <div className='text-red-600'>The phone number is invalid (xxx-xxx-xxxx)</div> : null}
          {!isPhoneNumberFilled
            ? <div className='text-red-600'>Please fill in phone number</div> : null}
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
          {!isAddressFilled
            ? <div className='text-red-600'>Please fill in address</div> : null}
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
            {isOpenTechStack
              ? listTechStacks !== undefined && listTechStacks.map((element, index) => (
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
