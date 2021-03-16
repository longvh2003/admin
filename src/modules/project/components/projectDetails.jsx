import { useParams } from 'react-router-dom';
import { TABLE_NAME } from '../project.constants';
import { useDispatch } from 'react-redux';
import { delAProject } from '../project.services';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getData } from '../../../utils/utils';
import { EditProject } from './EditProject';

export const ProjectDetail = () => {
  const [isUpdate, setIsUpdate] = useState(true);
  const [detail, setDetail] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  useEffect(() => {
    const data = getData(TABLE_NAME);
    setDetail(data[id]);
  }, [isUpdate]);
  const deleteProject = (index, TABLE_NAME) => {
    dispatch(delAProject(index, TABLE_NAME));
    history.push('/project');
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
          <label className='leading-loose'>Type Project :</label>
          <div type='text' className='inputDetail'>
            <ul>
              {detail.typeProjects !== undefined
                ? detail.typeProjects.map((element, index) => (
                    <li key={index}>
                      <i className='fas fa-stream pr-2'></i>
                      {element}
                    </li>
                  ))
                : null}
            </ul>
          </div>
        </div>
        <div className='groupData'>
          <label className='leading-loose'>Status Project :</label>
          <div type='text' className='inputDetail'>
            <ul>
              {detail.statusProjects !== undefined
                ? detail.statusProjects.map((element, index) => (
                    <li key={index}>
                      <i className='fas fa-file-alt pr-2'></i>
                      {element}
                    </li>
                  ))
                : null}
            </ul>
          </div>
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
          <label className='leading-loose'>Department :</label>
          <div type='text' className='inputDetail'>
            <ul>
              {detail.departments !== undefined
                ? detail.departments.map((element, index) => (
                    <li key={index}>
                      <i className='fas fa-code-branch pr-2'></i>
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
        <div>
          <div className='groupBtn'>
            <button className='btnCancel' onClick={() => deleteProject(id, TABLE_NAME)}>
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
    <EditProject index={id} detail={detail} cancel={setIsUpdate} />
  );
};
