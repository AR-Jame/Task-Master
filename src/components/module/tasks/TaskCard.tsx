import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import { deleteTask, toggleComplete } from '@/redux/features/task/taskSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import type { ITask } from '@/types';
import { Trash2 } from 'lucide-react';
import UpdateTaskModal from './UpdateTaskModal';
import { userSelector } from '@/redux/features/user/userSlice';

interface IProps {
    task: ITask
}

const TaskCard = ({ task }: IProps) => {

    const dispatch = useAppDispatch();
    const users = useAppSelector(userSelector);
    const user = users.find(person => person.id === task.assignTo)

    return (
        <div className={cn(`flex justify-between items-start border py-5 px-5 rounded-md my-2`, {
            'border-green-400': task.isCompleted === true
        })}>
            <div>
                <div className="flex items-center gap-2">
                    <div className={cn("size-3 rounded-full", {
                        'bg-green-400': task.priority === 'low',
                        'bg-yellow-400': task.priority === 'medium',
                        'bg-red-400': task.priority === 'high'
                    })}></div>
                    <p>{task.title}</p>
                </div>
                <p className="mt-6">{task.description}</p>
                <p>Assign To {user ? user.name : 'No user'}</p>
            </div>
            <div className='flex flex-col items-center gap-2'>
                <div className='flex items-center gap-2'>
                    <Button onClick={() => dispatch(deleteTask(task.id))} variant='link'>
                        <Trash2 color='red' />
                    </Button>
                    <Checkbox onClick={() => dispatch(toggleComplete(task.id))} />
                </div>
                <UpdateTaskModal task={task} />
            </div>
        </div>
    );
};

export default TaskCard;