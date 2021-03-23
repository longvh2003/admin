import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { projectTypeReducer } from 'src/modules/typeProjects/typeProject.reducer';
import { projectStatusReducer } from 'src/modules/projectStatus/statusProject.reducer';
import { techStackReducer } from 'src/modules/techStack/techStack.reducer';
import { customerReducer } from 'src/modules/customer/customer.reducer';
import { departmentReducer } from 'src/modules/department/department.reducer';
import { staffReducer } from 'src/modules/staff/staff.reducer';
import { projectReducer } from 'src/modules/project/project.reducer';

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
