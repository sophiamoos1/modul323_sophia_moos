import {useEffect, useState} from "react";
import {TasklistType} from "./TasklistType";
import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField
} from "@mui/material";
import {TaskType} from "./TaskType";
import {Priority} from "./Priority";
import {Status} from "./Status";
import {Category} from "./Category";

type CreateTaskViewProps = {
    tasklists: TasklistType[]
    setTasklists: Function
}

export default function CreateTaskView({tasklists, setTasklists}: CreateTaskViewProps) {
    const [newTask, setNewTask] = useState<Omit<TaskType, 'id' | 'startDate' | 'finishDate'>>({
        name: '',
        description: '',
        priority: Priority.medium,
        status: Status.todo,
        category: Category.work,
        estimatedWorkingHours: undefined,
        estimatedWorkingDays: undefined,
        deadline: undefined,
    });
    const [nameOfSelectedTasklist, setNameOfSelectedTasklist] = useState<string>("");
    const [tasklistNames, setTasklistNames] = useState<string[]>([]);

    useEffect(() => {
        setTasklistNames(tasklists.map((task) => task.name))
    }, [tasklists])

    const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {

        const name = event.target.name as keyof typeof newTask;
        setNewTask({
            ...newTask,
            [name]: event.target.value,
        });
    };

    const handleSelectChange = (event: SelectChangeEvent, valueName: string) => {
        const name = valueName as keyof typeof newTask;
        setNewTask({
            ...newTask,
            [name]: event.target.value,
        });
    }

    const handleSubmit = (event: React.FormEvent) => {

        event.preventDefault();
        const selectedTasklist = tasklists.find((tasklist) => tasklist.name === nameOfSelectedTasklist) ?? tasklists[0]
        const createdTask: TaskType = {
            id: createIdOfTask(nameOfSelectedTasklist, "task", selectedTasklist.tasks.length + Math.floor(Math.random())),
            name: newTask.name,
            description: newTask.description,
            priority: newTask.priority,
            status: newTask.status,
            category: newTask.category,
            estimatedWorkingHours: newTask.estimatedWorkingHours,
            estimatedWorkingDays: newTask.estimatedWorkingDays,
            deadline: newTask.deadline,
        }
        setTasklists([...tasklists.filter(tasklist => tasklist.id !== selectedTasklist.id), {...selectedTasklist, tasks: [...selectedTasklist.tasks, createdTask]}])
        alert('Created new Task')
        console.log(newTask);
    };

    const createIdOfTask = (tasklistName: string, defaultId: string, idNumber: number) => {
        const newId = tasklistName.charAt(0).toLowerCase() + defaultId + idNumber.toString()
        return newId
    }

    return (
        <Box>
            <Box sx={{width: "46vw", ml: "20vw", mr: "20vw", borderRadius: "15px", bgcolor: "#a5cbfa"}}>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Name"
                    name="name"
                    value={newTask.name}
                    onChange={handleChange}
                    required
                    margin="normal"
                    sx={{width: "20vw", mr: "3vw"}}
                />
                <TextField
                    label="Description"
                    name="description"
                    value={newTask.description}
                    onChange={handleChange}
                    sx={{width: "20vw"}}
                    margin="normal"
                />
                <FormControl margin="normal" sx={{width: "20vw", mr: "3vw"}}>
                    <InputLabel>Tasklist</InputLabel>
                    <Select
                        required
                        name="tasklist"
                        value={nameOfSelectedTasklist}
                        onChange={(event) => setNameOfSelectedTasklist(event.target.value)}
                    >
                        {Object.values(tasklistNames).map((name) => (
                            <MenuItem key={name} value={name}>
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                    <FormHelperText>Taskliste auswählen</FormHelperText>
                </FormControl>
                <FormControl margin={"normal"} sx={{width: "20vw"}}>
                    <InputLabel>Priority</InputLabel>
                    <Select
                        name="priority"
                        value={newTask.priority}
                        onChange={(event) => handleSelectChange(event, "priority")}
                    >
                        {Object.values(Priority).map((priority) => (
                            <MenuItem key={priority} value={priority}>
                                {priority}
                            </MenuItem>
                        ))}
                    </Select>
                    <FormHelperText>Priorität auswählen</FormHelperText>
                </FormControl>
                <FormControl margin="normal" sx={{width: "20vw", mr: "3vw"}}>
                    <InputLabel>Category</InputLabel>
                    <Select
                        name="category"
                        value={newTask.category}
                        onChange={(event) => handleSelectChange(event, "category")}
                    >
                        {Object.values(Category).map((category) => (
                            <MenuItem key={category} value={category}>
                                {category}
                            </MenuItem>
                        ))}
                    </Select>
                    <FormHelperText>Kategorie auswählen</FormHelperText>
                </FormControl>
                <TextField
                    label="Estimated Working Hours"
                    name="estimatedWorkingHours"
                    type="number"
                    value={newTask.estimatedWorkingHours}
                    onChange={handleChange}
                    sx={{width: "20vw"}}
                    margin="normal"
                />
                <TextField
                    label="Estimated Working Days"
                    name="estimatedWorkingDays"
                    type="number"
                    value={newTask.estimatedWorkingDays}
                    onChange={handleChange}
                    sx={{width: "20vw", mr: "3vw"}}
                    margin="normal"
                />
                <TextField
                    label="Deadline"
                    name="deadline"
                    type="date"
                    value={newTask.deadline ? newTask.deadline.toISOString().split('T')[0] : ''}
                    onChange={(e) => handleChange({
                        target: {
                            name: 'deadline',
                            value: new Date(e.target.value),
                        },
                    } as React.ChangeEvent<{ name?: string; value: unknown }>)}
                    sx={{width: "20vw"}}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <Button type="submit" variant="contained" color="primary" sx={{width: "20vw", height: "5vh", mt: "1.5vh"}}>
                    Submit
                </Button>
            </form>
            </Box>
        </Box>
    )
}