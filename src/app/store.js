import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { projectTypeReducer } from '../modules/typeProjects/typeProject.reducer';
import { projectStatusReducer } from '../modules/projectStatus/statusProject.reducer';
import { techStackReducer } from '../modules/techStack/techStack.reducer';
import { customerReducer } from '../modules/customer/customer.reducer';
import { departmentReducer } from '../modules/department/department.reducer';
import { staffReducer } from '../modules/staff/staff.reducer';
import { projectReducer } from '../modules/project/project.reducer';

const rootReducer = combineReducers({
  projectType: projectTypeReducer,
  projectStatus: projectStatusReducer,
  techStack: techStackReducer,
  customer: customerReducer,
  department: departmentReducer,
  staff: staffReducer,
  project: projectReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
