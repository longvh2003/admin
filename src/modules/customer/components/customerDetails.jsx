import React from 'react';
import { useParams } from 'react-router-dom';
import { TABLE_NAME } from '../customer.constants';
import { useDispatch } from 'react-redux';
import { delACustomer } from '../customer.services';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getData } from '../../../utils/utils';
import { EditCustomer } from './EditCustomer';

export const CustomerDetail = () => {
  const [isUpdate, setIsUpdate] = useState(true);
  const [detail, setDetail] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  useEffect(() => {
    const data = getData(TABLE_NAME);
    setDetail(data.filter(element => element.id === id)[0]);
  }, [isUpdate]);
  const deleteCustomer = (id, TABLE_NAME) => {
    dispatch(delACustomer(id, TABLE_NAME));
    history.push('/customer');
  };
  return isUpdate ? (
    <div>
      <div className='header'>DETAIL</div>
      <div className='my-3 mx-10'>
        <button onClick={() => history.push('/customer')} className='btn'>
          Back
        </button>
      </div>
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
          <label className='leading-loose'>Priority number :</label>
          <input type='text' className='inputDetail' value={detail.priority} readOnly />
        </div>
        <div className='groupData'>
          <label className='leading-loose'>Status :</label>
          <div className='statusTable w-16'>{detail.status}</div>
        </div>
        <div className='groupBtn'>
          <button className='btnCancel' onClick={() => deleteCustomer(id, TABLE_NAME)}>
            <i className='fas fa-times px-3'></i>DELETE
          </button>
          <button className='btnConfirm' onClick={() => setIsUpdate(false)}>
            UPDATE
          </button>
        </div>
      </div>
    </div>
  ) : (
    <EditCustomer index={id} detail={detail} cancel={setIsUpdate} />
  );
};
