import TaskList from './TaskList.vue';
import TaskEdit from './TaskEdit.vue';
import Task from './Task.vue';
import NotificationPage from './NotificationPage.vue';
import NotificationPoll from './NotificationPoll.vue';
import Prorogue from './notificationPageRoutes/Prorogue.vue';
import ProrogueSetN from './notificationPageRoutes/prorogueRoutes/ProrogueSetN.vue';
import ProrogueCases from './notificationPageRoutes/prorogueRoutes/ProrogueCases.vue';
import TaskCreate from './TaskCreate.vue';
import TaskCreated from './TaskCreated.vue';
import Page404 from './Page404.vue';

export default [
    {
        path: '/tasks', component: TaskList
    },
    {
        path: '/task/:id', component: Task, children: [
            {
                path: 'notification', component: NotificationPage, children: [
                    {
                        path: 'prorogue', component: Prorogue,  children: [
                            {
                                path: 'setN', component: ProrogueSetN
                            },
                            {
                                path: '', component: ProrogueCases
                            }
                        ],
                    },
                    {
                        path: '', component: NotificationPoll,
                    }
            ]
            },
            {
                path: '', component: TaskEdit
            }
        ]
    },
    {
        path: '/task/new', component: TaskCreate
    },
    {
        path: '/task/created', component: TaskCreated
    },
    {
        path: '*', component: Page404
    }
];
