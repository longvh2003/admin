import { useParams } from 'react-router-dom';
import { TABLE_NAME, TECH_STACK, PROJECT } from '../staff.constants';
import { useDispatch } from 'react-redux';
import { delAStaff } from '../staff.services';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getData, getIndex } from '../../../utils/utils';
import { EditStaff } from './EditStaff';

export const StaffDetail = () => {
  const [isUpdate, setIsUpdate] = useState(true);
  const [detail, setDetail] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  useEffect(() => {
    const data = getData(TABLE_NAME);
    setDetail(data[id]);
  }, [isUpdate]);
  const deleteStaff = (index, TABLE_NAME) => {
    dispatch(delAStaff(index, TABLE_NAME));
    history.push('/staff');
  };
  const handleDetail = (element, TABLE) => {
    const index = getIndex(element, TABLE);
    switch (TABLE) {
      case TECH_STACK:
        history.push(`/tech-stack/${index}`);
        break;
      case PROJECT:
        history.push(`/project/${index}`);
        break;
    }
  };
  return isUpdate ? (
    <div>
      <div className='header'>DETAIL</div>
      <div className='my-3 mx-10'>
        <button onClick={() => history.push('/staff')} className='btn'>
          Back
        </button>
      </div>
      <div className='containerDetail'>
        <div className='groupData'>
          <label className='leading-loose'>Name :</label>
          <input type='text' className='inputDetail' value={detail.name} readOnly />
        </div>
        <div className='groupData'>
          <label className='leading-loose'>Date of Birth :</label>
          <input type='text' className='inputDetail' value={detail.date} readOnly />
        </div>
        <div className='groupData'>
          <label className='leading-loose'>Identification Number :</label>
          <input type='text' className='inputDetail' value={detail.id} readOnly />
        </div>
        <div className='groupData'>
          <label className='leading-loose'>Phone Number :</label>
          <input type='text' className='inputDetail' value={detail.phoneNumber} readOnly />
        </div>
        <div className='groupData'>
          <label className='leading-loose'>Address :</label>
          <input type='text' className='inputDetail' value={detail.address} readOnly />
        </div>
        <div className='groupData'>
          <label className='leading-loose'>Tech Stack :</label>
          <div type='text' className='inputDetail'>
            <ul>
              {detail.techStacks !== undefined
                ? detail.techStacks.map((element, index) => (
                    <li key={index} onClick={() => handleDetail(element, TECH_STACK)}>
                      <i className='fas fa-atlas pr-2'></i>
                      {element}
                    </li>
                  ))
                : null}
            </ul>
          </div>
        </div>
        <div className='groupData'>
          <label className='leading-loose'>Project :</label>
          <div type='text' className='inputDetail'>
            <ul>
              {detail.projects !== undefined
                ? detail.projects.map((element, index) => (
                    <li key={index} onClick={() => handleDetail(element, PROJECT)}>
                      <i className='fas fa-tasks pr-2'></i>
                      {element}
                    </li>
                  ))
                : null}
            </ul>
          </div>
        </div>
        <div>
          <div className='groupBtn'>
            <button className='btnCancel' onClick={() => deleteStaff(id, TABLE_NAME)}>
              <i className='fas fa-times px-3'></i>DELETE
            </button>
            <button className='btnConfirm' onClick={() => setIsUpdate(false)}>
              UPDATE
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <EditStaff index={id} detail={detail} cancel={setIsUpdate} />
  );
};
