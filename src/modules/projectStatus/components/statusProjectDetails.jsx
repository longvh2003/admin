import { useParams } from 'react-router-dom';
import { TABLE_NAME } from '../statusProject.constants';
import { useDispatch } from 'react-redux';
import { delAStatusProject } from '../statusProject.services';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getData } from '../../../utils/utils';
import { EditStatusProject } from './EditStatusProject';

export const StatusProjectDetail = () => {
  const [isUpdate, setIsUpdate] = useState(true);
  const [detail, setDetail] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  useEffect(() => {
    const data = getData(TABLE_NAME);
    setDetail(data[id]);
  }, [isUpdate]);
  const deleteStatusProject = (index, TABLE_NAME) => {
    dispatch(delAStatusProject(index, TABLE_NAME));
    history.push('/status-project');
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
          <label className='leading-loose'>Status :</label>
          <div className='statusTable w-16'>{detail.status}</div>
        </div>
        <div className='groupBtn'>
          <button className='btnCancel' onClick={() => deleteStatusProject(id, TABLE_NAME)}>
            <i className='fas fa-times px-3'></i>DELETE
          </button>
          <button className='btnConfirm' onClick={() => setIsUpdate(false)}>
            UPDATE
          </button>
        </div>
      </div>
    </div>
  ) : (
    <EditStatusProject index={id} detail={detail} cancel={setIsUpdate} />
  );
};
