import produce from 'immer';
import { DELETE_PROJECT, ADD_PROJECT, GET_PROJECT, UPDATE_PROJECT }
  from 'src/modules/project/project.constants';

const initState = {
  page: 0,
  data: [],
};
export const projectReducer = (state = initState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case DELETE_PROJECT:
        break;
      case ADD_PROJECT:
        break;
      case GET_PROJECT:
        draft.data = action.payload;
        if (action.payload.length % 3 === 0) draft.page = action.payload.length / 3;
        else draft.page = ~~(action.payload.length / 3) + 1;
        break;
      case UPDATE_PROJECT:
        break;
      default:
        return state;
    }
  });
};
