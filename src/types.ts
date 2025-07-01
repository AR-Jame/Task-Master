export interface ITask {
    id: string,
    title: string,
    description: string,
    dueDate: Date,
    isCompleted: boolean,
    priority: 'high' | 'medium' | 'low',
    assignTo: string
}

export interface IUser {
    id: string,
    name: string
}