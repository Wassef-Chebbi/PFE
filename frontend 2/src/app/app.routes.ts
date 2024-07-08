import { Routes } from '@angular/router';

import { DesignerComponent } from './pages/designer/designer.component';
import { AdminComponent } from './pages/modules/admin/admin.component';
import { UsersComponent } from './pages/modules/admin/users/users.component';
import { DashboardComponent } from './pages/modules/admin/dashboard/dashboard.component';
import { GroupsComponent } from './pages/groups/groups.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { TemplatesComponent } from './pages/templates/templates.component';
import { AutomationsComponent } from './pages/automations/automations.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { RobotsComponent } from './pages/robots/robots.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SchedulesComponent } from './pages/schedules/schedules.component';
//import { LoginComponent } from './pages/login/login.component';







export const routes: Routes = [


    {
        path: '',
        redirectTo: 'templates',
        pathMatch: 'full'

    },
    // {
    //     path: 'login',
    //     component: LoginComponent,

    // },
    {
        path: 'groups',
        component: GroupsComponent,

    },
    {
        path: 'schedules',
        component: SchedulesComponent,

    },
    {
        path: 'tasks',
        component: TasksComponent,

    },
    { path: 'tasks/:groupId', component: TasksComponent },


    {
        path: 'templates',
        component: TemplatesComponent
    },
    {
        path: 'projects',
        component: ProjectsComponent
    },
    {
        path: 'automations',
        component: AutomationsComponent
    },
    {
        path: 'jobs',
        component: JobsComponent
    },
    {
        path: 'robots',
        component: RobotsComponent
    },
    {
        path: 'designer',
        component: DesignerComponent
    },
    { path: 'designer/:id', component: DesignerComponent },
    {
        path: 'admin',
        component: AdminComponent,

        children: [
            {
                path: '',
                redirectTo: 'dashboard', pathMatch: 'full'
            },
            {
                path: 'dashboard',
                component: DashboardComponent,
                outlet: "admin",
            },
            {
                path: 'users',
                component: UsersComponent,
                outlet: "admin",
            },
            {
                path: 'groups',
                component: GroupsComponent,
                outlet: "admin",
            },
            {
                path: 'tasks',
                component: TasksComponent,
                outlet: "admin",
            },

        ]

    },




];
