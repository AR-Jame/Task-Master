import { createBrowserRouter } from 'react-router'
import App from '../App'
import Tasks from '../pages/tasks/Tasks'
import Users from '@/pages/users/Users'
const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {
                index: true,
                // path: '/tasks',
                Component: Tasks
            },
            {
                path: '/tasks',
                Component: Tasks
            },
            {
                path: '/users',
                Component: Users
            }
        ]
    }
])

export default router