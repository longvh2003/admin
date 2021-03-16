import { useParams } from 'react-router-dom';
import { TABLE_NAME } from '../department.constants';
import { useDispatch } from 'react-redux';
import { delADepartment } from '../department.services';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getData } from '../../../utils/utils';
import { EditDepartment } from './EditDepartment';

export const DepartmentDetail = () => {
  const [isUpdate, setIsUpdate] = useState(true);
  const [detail, setDetail] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  useEffect(() => {
    const data = getData(TABLE_NAME);
    setDetail(data[id]);
  }, [isUpdate]);
  const deleteDepartment = (index, TABLE_NAME) => {
    dispatch(delADepartment(index, TABLE_NAME));
    history.push('/department');
  };
  return isUpdate ? (
    <div>
      <div className='header'>DETAIL</div>
      <div className='containerDetail'>
        <div className='groupData'>
          <label className='leading-loose'>Name :</label>
          <input type='text' className='inputDetail' value={detail.name} readOnly />
        </div>
        <div className='groupData'>
          <label className='leading-loose'>Description :</label>
          <textarea type='text' className='inputDetail' value={detail.description} readOnly />
        </div>
        <div className='groupData'>
          <label className='leading-loose'>Tech Stack :</label>
          <div type='text' className='inputDetail'>
            <ul>
              {detail.techStacks !== undefined
                ? detail.techStacks.map((element, index) => (
                    <li key={index}>
                      <i className='fas fa-atlas pr-2'></i>
                      {element}
                    </li>
                  ))
                : null}
            </ul>
          </div>
        </div>
        <div className='groupData'>
          <label className='leading-loose'>Staff :</label>
          <div type='text' className='inputDetail'>
            <ul>
              {detail.staffs !== undefined
                ? detail.staffs.map((element, index) => (
                    <li key={index}>
                      <i className='fas fa-user pr-2'></i>
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
                    <li key={index}>
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
            <button className='btnCancel' onClick={() => deleteDepartment(id, TABLE_NAME)}>
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
    <EditDepartment index={id} detail={detail} cancel={setIsUpdate} />
  );
};
