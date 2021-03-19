import { useParams } from 'react-router-dom';
import { TABLE_NAME } from '../techStack.constants';
import { useDispatch } from 'react-redux';
import { delATechStack } from '../techStack.services';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getData } from '../../../utils/utils';
import { EditTechStack } from './EditTechStack';

export const TechStackDetail = () => {
  const [isUpdate, setIsUpdate] = useState(true);
  const [detail, setDetail] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  useEffect(() => {
    const data = getData(TABLE_NAME);
    setDetail(data.filter(element => element.id === id)[0]);
  }, [isUpdate]);
  const deleteTechStack = (index, TABLE_NAME) => {
    dispatch(delATechStack(index, TABLE_NAME));
    history.push('/tech-stack');
  };
  return isUpdate ? (
    <div>
      <div className='header'>DETAIL</div>
      <div className='my-3 mx-10'>
        <button onClick={() => history.push('/tech-stack')} className='btn'>
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
          <button className='btnCancel' onClick={() => deleteTechStack(id, TABLE_NAME)}>
            <i className='fas fa-times px-3'></i>DELETE
          </button>
          <button className='btnConfirm' onClick={() => setIsUpdate(false)}>
            UPDATE
          </button>
        </div>
      </div>
    </div>
  ) : (
    <EditTechStack index={id} detail={detail} cancel={setIsUpdate} />
  );
};
