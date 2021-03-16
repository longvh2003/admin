import {
  delTypeProject,
  getTypeProject,
  updateATypeProject,
  addATypeProject,
} from './typeProject.actions';
import { delData, updateData, addData } from '../../utils/utils';

export const delATypeProject = (index, TABLE_NAME) => dispatch => {
  if (TABLE_NAME) {
    delData(index, TABLE_NAME);
    return dispatch(delTypeProject);
  }
};
export const getAllTypeProject = data => dispatch => {
  if (data !== 0) {
    return dispatch(getTypeProject(data));
  }
};
export const updateTypeProject = (index, detail, TABLE_NAME) => dispatch => {
  if (TABLE_NAME) {
    updateData(index, detail, TABLE_NAME);
    return dispatch(updateATypeProject);
  }
};
export const addTypeProject = (detail, TABLE_NAME) => dispatch => {
  if (TABLE_NAME) {
    addData(detail, TABLE_NAME);
    return dispatch(addATypeProject);
  }
};
