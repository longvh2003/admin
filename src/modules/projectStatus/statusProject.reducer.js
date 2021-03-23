import produce from 'immer';
import { DELETE_STATUS_PROJECT, ADD_STATUS_PROJECT, GET_STATUS_PROJECT, UPDATE_STATUS_PROJECT }
  from 'src/modules/projectStatus/statusProject.constants';

const initState = {
  page: 0,
  data: [],
};
export const projectStatusReducer = (state = initState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case DELETE_STATUS_PROJECT:
        break;
      case ADD_STATUS_PROJECT:
        break;
      case GET_STATUS_PROJECT:
        draft.data = action.payload;
        if (action.payload.length % 3 === 0) draft.page = action.payload.length / 3;
        else draft.page = ~~(action.payload.length / 3) + 1;
        break;
      case UPDATE_STATUS_PROJECT:
        break;
      default:
        return state;
    }
  });
};
