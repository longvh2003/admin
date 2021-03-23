import { delTechStack, getTechStack, updateATechStack, addATechStack }
  from 'src/modules/techStack/techStack.actions';
import { delData, updateData, addData } from 'src/utils/utils';

export const delATechStack = (index, TABLE_NAME) => dispatch => {
  if (TABLE_NAME) {
    delData(index, TABLE_NAME);
    return dispatch(delTechStack);
  }
};
export const getAllTechStack = data => dispatch => {
  if (data !== 0) {
    return dispatch(getTechStack(data));
  }
};
export const updateTechStack = (index, detail, TABLE_NAME) => dispatch => {
  if (TABLE_NAME) {
    updateData(index, detail, TABLE_NAME);
    return dispatch(updateATechStack);
  }
};
export const addTechStack = (detail, TABLE_NAME) => dispatch => {
  if (TABLE_NAME) {
    addData(detail, TABLE_NAME);
    return dispatch(addATechStack);
  }
};
