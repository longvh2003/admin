import { delProject, getProject, updateAProject, addAProject } from './project.actions';
import { delData, updateData, addData } from '../../utils/utils';

export const delAProject = (index, TABLE_NAME) => dispatch => {
  if (TABLE_NAME) {
    delData(index, TABLE_NAME);
    return dispatch(delProject);
  }
};
export const getAllProject = data => dispatch => {
  if (data !== 0) {
    return dispatch(getProject(data));
  }
};
export const updateProject = (index, detail, TABLE_NAME) => dispatch => {
  if (TABLE_NAME) {
    updateData(index, detail, TABLE_NAME);
    return dispatch(updateAProject);
  }
};
export const addProject = (detail, TABLE_NAME) => dispatch => {
  if (TABLE_NAME) {
    addData(detail, TABLE_NAME);
    return dispatch(addAProject);
  }
};
