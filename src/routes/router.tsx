import { createBrowserRouter } from 'react-router'
import App from '../App'
import Tasks from '../pages/tasks/Tasks'
const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {
                path: '/tasks',
                Component: Tasks
            }
        ]
    }
])

export default router