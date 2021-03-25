import { TypeProjects } from 'src/pages/typeProjects/typeProjects';
import { TypeProjectCreates } from 'src/pages/typeProjects/typeProjectCreate';
import { TypeProjectDetails } from 'src/pages/typeProjects/typeProjectDetail';
import { EditTypeProjects } from 'src/pages/typeProjects/editTypeProject';
import { StatusProjects } from 'src/pages/projectStatus/projectStatus';
import { StatusProjectCreates } from 'src/pages/projectStatus/projectStatusCreate';
import { StatusProjectDetails } from 'src/pages/projectStatus/projectStatusDetail';
import { EditStatusProjects } from 'src/pages/projectStatus/editProjectStatus';
import { TechStacks } from 'src/pages/techStack/techStack';
import { TechStackCreates } from 'src/pages/techStack/techStackCreate';
import { TechStackDetails } from 'src/pages/techStack/techStackDetail';
import { EditTechStacks } from 'src/pages/techStack/editTechStack';
import { Customers } from 'src/pages/customer/customer';
import { CustomerCreates } from 'src/pages/customer/customerCreate';
import { CustomerDetails } from 'src/pages/customer/customerDetail';
import { EditCustomers } from 'src/pages/customer/editCustomer';
import { Departments } from 'src/pages/department/department';
import { DepartmentCreates } from 'src/pages/department/departmentCreate';
import { DepartmentDetails } from 'src/pages/department/departmentDetail';
import { EditDepartments } from 'src/pages/department/editDepartment';
import { Staffs } from 'src/pages/staff/staff';
import { StaffCreates } from 'src/pages/staff/staffCreate';
import { StaffDetails } from 'src/pages/staff/staffDetail';
import { EditStaffs } from 'src/pages/staff/ediStaff';
import { Projects } from 'src/pages/project/project';
import { ProjectCreates } from 'src/pages/project/projectCreate';
import { ProjectDetails } from 'src/pages/project/projectDetail';
import { EditProjects } from 'src/pages/project/editProject';

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
    path: '/type-project/detail/:id',
    component: TypeProjectDetails,
    exact: true,
  },
  {
    path: '/type-project/edit/:id',
    component: EditTypeProjects,
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
    path: '/status-project/detail/:id',
    component: StatusProjectDetails,
    exact: true,
  },
  {
    path: '/status-project/edit/:id',
    component: EditStatusProjects,
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
    path: '/tech-stack/detail/:id',
    component: TechStackDetails,
    exact: true,
  },
  {
    path: '/tech-stack/edit/:id',
    component: EditTechStacks,
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
    path: '/customer/detail/:id',
    component: CustomerDetails,
    exact: true,
  },
  {
    path: '/customer/edit/:id',
    component: EditCustomers,
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
    path: '/department/detail/:id',
    component: DepartmentDetails,
    exact: true,
  },
  {
    path: '/department/edit/:id',
    component: EditDepartments,
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
    path: '/staff/detail/:id',
    component: StaffDetails,
    exact: true,
  },
  {
    path: '/staff/edit/:id',
    component: EditStaffs,
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
    path: '/project/detail/:id',
    component: ProjectDetails,
    exact: true,
  },
  {
    path: '/project/edit/:id',
    component: EditProjects,
    exact: true,
  },
];
