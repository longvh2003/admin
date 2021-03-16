import {
  delStatusProject,
  getStatusProject,
  updateAStatusProject,
  addAStatusProject,
} from './statusProject.actions';
import { delData, updateData, addData } from '../../utils/utils';

export const delAStatusProject = (index, TABLE_NAME) => dispatch => {
  if (TABLE_NAME) {
    delData(index, TABLE_NAME);
    return dispatch(delStatusProject);
  }
};
export const getAllStatusProject = data => dispatch => {
  if (data !== 0) {
    return dispatch(getStatusProject(data));
  }
};
export const updateStatusProject = (index, detail, TABLE_NAME) => dispatch => {
  if (TABLE_NAME) {
    updateData(index, detail, TABLE_NAME);
    return dispatch(updateAStatusProject);
  }
};
export const addStatusProject = (detail, TABLE_NAME) => dispatch => {
  if (TABLE_NAME) {
    addData(detail, TABLE_NAME);
    return dispatch(addAStatusProject);
  }
};
