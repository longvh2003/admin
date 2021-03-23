import { TypeProjects } from './pages/typeProjects/typeProjects';
import { TypeProjectCreates } from './pages/typeProjects/typeProjectCreate';
import { TypeProjectDetails } from './pages/typeProjects/typeProjectDetail';
import { StatusProjects } from './pages/projectStatus/projectStatus';
import { StatusProjectCreates } from './pages/projectStatus/projectStatusCreate';
import { StatusProjectDetails } from './pages/projectStatus/projectStatusDetail';
import { TechStacks } from './pages/techStack/techStack';
import { TechStackCreates } from './pages/techStack/techStackCreate';
import { TechStackDetails } from './pages/techStack/techStackDetail';
import { Customers } from './pages/customer/customer';
import { CustomerCreates } from './pages/customer/customerCreate';
import { CustomerDetails } from './pages/customer/customerDetail';
import { Departments } from './pages/department/department';
import { DepartmentCreates } from './pages/department/departmentCreate';
import { DepartmentDetails } from './pages/department/departmentDetail';
import { Staffs } from './pages/staff/staff';
import { StaffCreates } from './pages/staff/staffCreate';
import { StaffDetails } from './pages/staff/staffDetail';
import { Projects } from './pages/project/project';
import { ProjectCreates } from './pages/project/projectCreate';
import { ProjectDetails } from './pages/project/staffDetail';

export const routes = [
  {
    path: '/type-project/page/:page',
    component: TypeProjects,
    exact: true,
  },
  {
    path: '/create-type-project',
    component: TypeProjectCreates,
    exact: true,
  },
  {
    path: '/type-project/:id',
    component: TypeProjectDetails,
    exact: true,
  },
  {
    path: '/status-project/page/:page',
    component: StatusProjects,
    exact: true,
  },
  {
    path: '/create-status-project',
    component: StatusProjectCreates,
    exact: true,
  },
  {
    path: '/status-project/:id',
    component: StatusProjectDetails,
    exact: true,
  },
  {
    path: '/tech-stack/page/:page',
    component: TechStacks,
    exact: true,
  },
  {
    path: '/create-tech-stack',
    component: TechStackCreates,
    exact: true,
  },
  {
    path: '/tech-stack/:id',
    component: TechStackDetails,
    exact: true,
  },
  {
    path: '/customer/page/:page',
    component: Customers,
    exact: true,
  },
  {
    path: '/create-customer',
    component: CustomerCreates,
    exact: true,
  },
  {
    path: '/customer/:id',
    component: CustomerDetails,
    exact: true,
  },
  {
    path: '/department/page/:page',
    component: Departments,
    exact: true,
  },
  {
    path: '/create-department',
    component: DepartmentCreates,
    exact: true,
  },
  {
    path: '/department/:id',
    component: DepartmentDetails,
    exact: true,
  },
  {
    path: '/staff/page/:page',
    component: Staffs,
    exact: true,
  },
  {
    path: '/create-staff',
    component: StaffCreates,
    exact: true,
  },
  {
    path: '/staff/:id',
    component: StaffDetails,
    exact: true,
  },
  {
    path: '/project/page/:page',
    component: Projects,
    exact: true,
  },
  {
    path: '/create-project',
    component: ProjectCreates,
    exact: true,
  },
  {
    path: '/project/:id',
    component: ProjectDetails,
    exact: true,
  },
];
