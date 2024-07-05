import { Priority } from "./Priority";
import { Status } from "./Status";
import {Category} from "./Category";

export type TaskType = {
    id: string;
    name: string;
    description?: string;
    priority: Priority;
    status: Status;
    category: Category;
    estimatedWorkingHours?: number;
    estimatedWorkingDays?: number;
    startDate?: Date;
    finishDate?: Date;
    deadline?: Date;
}