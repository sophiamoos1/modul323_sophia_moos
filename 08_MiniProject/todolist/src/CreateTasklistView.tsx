import react, {useState, useEffect} from "react";
import {TasklistType} from "./TasklistType";
import React from "react";
import {TaskType} from "./TaskType";
import {Box, Button, TextField} from "@mui/material";

type CreateTasklistViewProps = {
    tasklists: TasklistType[]
    setTasklists: Function
}

export default function CreateTasklistView({tasklists, setTasklists}: CreateTasklistViewProps) {
    const [newTasklist, setNewTasklist] = useState<TasklistType>({id: "", name: "", createDate: new Date(), tasks: []})
    const [tasklistNames, setTasklistNames] = useState(tasklists.map((task) => task.name.toUpperCase()))

    const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
        const name = event.target.name as keyof typeof newTasklist;
        setNewTasklist({
            ...newTasklist,
            [name]: event.target.value,
        });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if(tasklistNames.includes(newTasklist.name)){
            alert('Invalid Form, Tasklist with this name alteady exists')
        } else {
            setNewTasklist({...newTasklist, id: `${newTasklist.name}`})
            setTasklists([...tasklists, newTasklist])
            alert('Created new Tasklist')
            console.log(newTasklist);
        }
    };

    useEffect(() => {
        setTasklistNames(tasklists.map((task) => task.name.toUpperCase()))
    }, [tasklists])

    return (
        <Box>
            <Box sx={{width: "46vw", ml: "20vw", mr: "20vw", borderRadius: "15px", bgcolor: "#a5cbfa"}}>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Name"
                        name="name"
                        value={newTasklist.name}
                        onChange={handleChange}
                        error={tasklistNames.includes(newTasklist.name)}
                        required
                        helperText={newTasklist.name === "" ? 'Empty field!' : tasklistNames.includes(newTasklist.name.toUpperCase()) ? 'Tasklist with this name already exists!' : ' '}
                        margin="normal"
                        sx={{width: "20vw", mr: "3vw"}}
                    />
                    <Button type="submit" variant="contained" color="primary" sx={{width: "20vw", height: "5vh", mt: "1.5vh"}}>
                        Submit
                    </Button>
                    </form>
            </Box>
        </Box>
)

}