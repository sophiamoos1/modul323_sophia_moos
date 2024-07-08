import {TasklistType} from "./TasklistType";
import {TaskType} from "./TaskType";
import {PrivateTaskData, SchoolTaskData, WorkTaskData} from "./TaskData";

export function TasklistData(): TasklistType[] {
    const tasklists: TasklistType[] = [
        {
            id: "1",
            name: "Default",
            createDate: new Date('1999-01-01'),
            tasks: []
        },
        {
            id: "tasklist1",
            name: "School stuff",
            createDate: new Date('2024-03-15'),
            tasks: SchoolTaskData()
        },
        {
            id: "tasklist2",
            name: "Private Todos",
            createDate: new Date('2023-11-11'),
            tasks: PrivateTaskData()
        },
        {
            id: "tasklist3",
            name: "Work tasks",
            createDate: new Date('2023-12-11'),
            tasks: WorkTaskData()
        }
    ]
    return tasklists
}