import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { selectTasks, updateFilter } from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

const Tasks = () => {
    const tasks = useAppSelector(selectTasks);
    const dispatch = useAppDispatch();
    // console.log(tasks);
    return (
        <section className="max-w-7xl mx-auto">
            <div className="flex justify-between my-4">
                <h3>Tasks</h3>
                <Tabs defaultValue="all">
                    <TabsList>
                        <TabsTrigger onClick={() => dispatch(updateFilter('all'))} value="all">All</TabsTrigger>
                        <TabsTrigger onClick={() => dispatch(updateFilter('low'))} value="low">low</TabsTrigger>
                        <TabsTrigger onClick={() => dispatch(updateFilter('medium'))} value="medium">medium</TabsTrigger>
                        <TabsTrigger onClick={() => dispatch(updateFilter('high'))} value="high">high</TabsTrigger>
                    </TabsList>
                </Tabs>
                <AddTaskModal />
            </div>
            {
                tasks.map(task => (
                    <TaskCard key={task.id} task={task} />
                ))
            }
        </section>
    );
};
export default Tasks;