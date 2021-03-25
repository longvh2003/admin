import React from 'react';
import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { TABLE_NAME } from 'src/modules/techStack/techStack.constants';
import { useDispatch } from 'react-redux';
import { delATechStack } from 'src/modules/techStack/techStack.services';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getData } from 'src/utils/utils';
import { handleOutsideClick } from 'src/services/handleOutsideClick';

export const TechStackDetail = () => {
  const [toggleDelete, setToggleDelete] = useState(false);
  const [detail, setDetail] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  useEffect(() => {
    const data = getData(TABLE_NAME);
    setDetail(data.filter(element => element.id === id)[0]);
  }, []);
  const deleteTechStack = (index, TABLE_NAME) => {
    dispatch(delATechStack(index, TABLE_NAME));
    history.push('/tech-stack/page/1');
  };
  const ref = useRef();
  handleOutsideClick(ref, () => { if (toggleDelete) setToggleDelete(false); });
  return (
    <div className='relative'>
      {toggleDelete ? <div
        className='modalConfirm'
        ref={ref}
      >
        <div className='text-center pt-4 text-4xl'>Are you sure?</div>
        <div className='text-center px-16 py-4'>
          If you proceed, you will lose your data. Are you sure you want to delete it? </div>
        <div className='groupBtn'>
          <button className='btnNo' onClick={() => setToggleDelete(false)}>
            NO
          </button>
          <button className='btnYes' onClick={() => deleteTechStack(id, TABLE_NAME)}>
            YES
          </button>
        </div>
      </div> : null}
      <div className='header'>DETAIL</div>
      <div className='my-3 mx-10'>
        <button onClick={() => history.push('/tech-stack/page/1')} className='btn'>
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
          <label className='leading-loose'>Status :</label>
          <div className='statusTable w-16'>{detail.status}</div>
        </div>
        <div className='groupBtn'>
          <button className='btnCancel' onClick={() => setToggleDelete(true)}>
            <i className='fas fa-times px-3'></i>DELETE
          </button>
          <button className='btnConfirm' onClick={() => history.push(`/tech-stack/edit/${id}`)}>
            UPDATE
          </button>
        </div>
      </div>
    </div>
  );
};
