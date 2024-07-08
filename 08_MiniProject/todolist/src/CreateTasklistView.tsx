import react, {useState, useEffect} from "react";
import {TasklistType} from "./TasklistType";
import React from "react";

type CreateTasklistViewProps = {
    tasklists: TasklistType[]
    setTasklists: Function
}

export default function CreateTasklistView({tasklists, setTasklists}: CreateTasklistViewProps) {
    const [newTasklist, setNewTasklist] = useState<TasklistType>({id: "", name: "", createDate: new Date(), tasks: []})
    const [tasklistNames, setTasklistNames] = useState(tasklists.map((task) => task.name))

    const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
        const name = event.target.name as keyof typeof newTasklist;
        setNewTasklist({
            ...newTasklist,
            [name]: event.target.value,
        });
    };


}