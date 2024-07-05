import {TaskType} from "./TaskType";

export type TasklistType = {
    id: string;
    name: string;
    createDate: Date;
    tasks: TaskType[];
}