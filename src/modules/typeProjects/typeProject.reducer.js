import produce from 'immer';
import { DELETE_TYPE_PROJECT, ADD_TYPE_PROJECT,
  GET_TYPE_PROJECT, UPDATE_TYPE_PROJECT } from 'src/modules/typeProjects/typeProject.constants';

const initState = {
  page: 0,
  data: [],
};
export const projectTypeReducer = (state = initState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case DELETE_TYPE_PROJECT:
        break;
      case ADD_TYPE_PROJECT:
        break;
      case GET_TYPE_PROJECT:
        draft.data = action.payload;
        if (action.payload.length % 3 === 0) draft.page = action.payload.length / 3;
        else draft.page = ~~(action.payload.length / 3) + 1;
        break;
      case UPDATE_TYPE_PROJECT:
        break;
      default:
        return state;
    }
  });
};
