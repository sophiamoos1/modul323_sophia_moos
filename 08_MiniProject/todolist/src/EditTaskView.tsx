import react, {useState, useEffect} from 'react';
import {TasklistType} from "./TasklistType";
import {TaskType} from "./TaskType";
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
import {Priority} from "./Priority";
import {Status} from "./Status";
import {Category} from "./Category";

type EditTaskViewProps = {
    tasklists: TasklistType[]
    setTasklists: Function
}

export default function EditTaskView({tasklists, setTasklists}: EditTaskViewProps) {
    const [taskIsSelected, setTaskIsSelected] = useState<[boolean, TaskType | undefined]>([false, undefined])
    const [tasks, setTasks] = useState(tasklists.map(tasklist => tasklist.tasks).flat())
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
    const [taskNames, setTaskNames] = useState(tasklists.map(tasklist => tasklist.tasks).flat().map((task) => task.name))

    // useEffect verwendet eine Pipeline, um die Aufgaben- und Listen-Namen zu setzen.
    useEffect(() => {
        setTasks(tasklists.map(tasklist => tasklist.tasks).flat())
        setTasklistNames(tasklists.map((task) => task.name))
        setTaskNames(tasklists.map(tasklist => tasklist.tasks).flat().map((task) => task.name))
    }, [tasklists])

    useEffect(() => {
        if (taskIsSelected[0]) {
            setNewTask(taskIsSelected[1]!)
        }
    }, [taskIsSelected])

    // Higher-Order-Function: handleChange ist eine Funktion, die eine andere Funktion (setNewTask) aufruft.
    const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
        const name = event.target.name as keyof typeof newTask;
        setNewTask({
            ...newTask,
            [name]: event.target.value,
        });
    };

    // Higher-Order-Function: handleSelectChange ist eine Funktion, die eine andere Funktion (setNewTask) aufruft.
    const handleSelectChange = (event: SelectChangeEvent, valueName: string) => {
        const name = valueName as keyof typeof newTask;
        setNewTask({
            ...newTask,
            [name]: event.target.value,
        });
    }

    // Higher-Order-Function: handleSelectedTaskChange ist eine Funktion, die eine andere Funktion (setTaskIsSelected) aufruft.
     const handleSelectedTaskChange = (event: SelectChangeEvent) => {
         const selectedTask = findTask(0, event.target.value) ?? tasks[0]
        setTaskIsSelected([true, selectedTask])
     }

    // Rekursive Funktion zum Finden einer Aufgabe anhand ihres Namens
    const findTask = (taskListIndex: number, taskName: string): TaskType | undefined => {
        if(tasklists[taskListIndex]) {
            const thisTaskList = tasklists[taskListIndex]
            for (let task of thisTaskList.tasks) {
                if (task.name === taskName) {
                    return task;
                }
            }
            return findTask(taskListIndex + 1, taskName)
        } else {
            return undefined;
        }
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const selectedTasklist = tasklists.find((tasklist) => tasklist.name === nameOfSelectedTasklist) ?? tasklists[0]
        const createdTask: TaskType = {
            id: taskIsSelected[1]?.id!,
            name: newTask.name,
            description: newTask.description,
            priority: newTask.priority,
            status: newTask.status,
            category: newTask.category,
            estimatedWorkingHours: newTask.estimatedWorkingHours,
            estimatedWorkingDays: newTask.estimatedWorkingDays,
            startDate: newTask.status === Status.started ? taskIsSelected[1]!.status === Status.started ? new Date() : undefined : undefined,
            finishDate: newTask.status === Status.complete ? taskIsSelected[1]!.status !== Status.complete ? new Date() : undefined : undefined,
            deadline: newTask.deadline,
        }
        // immutable Daten: setTasklists erzeugt eine neue Liste von Tasklists.
        setTasklists([...tasklists.filter(tasklist => tasklist.id !== selectedTasklist.id), {...selectedTasklist, tasks: [...selectedTasklist.tasks.filter(task => task !== taskIsSelected[1]!), createdTask]}])
        alert('Edited Task')
        console.log(newTask);
    };

    return (
        <Box>
            <Box sx={{width: "46vw", ml: "20vw", mr: "20vw", borderRadius: "15px", bgcolor: "#a5cbfa"}}>
                <form onSubmit={handleSubmit}>
                    <FormControl margin="normal" sx={{width: "20vw", mr: "3vw"}}>
                        <InputLabel>Edit Task</InputLabel>
                        <Select
                            required
                            name="task"
                            value={taskIsSelected[1]?.id ?? ""}
                            onChange={(event) => handleSelectedTaskChange(event)}
                        >
                            {Object.values(taskNames).map((name) => (
                                <MenuItem key={name} value={name}>
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                        <FormHelperText>Task to edit</FormHelperText>
                    </FormControl>
                    <TextField
                        label="Name"
                        name="name"
                        value={newTask.name}
                        onChange={handleChange}
                        required
                        margin="normal"
                        sx={{width: "20vw"}}
                    />
                    <TextField
                        label="Description"
                        name="description"
                        value={newTask.description}
                        onChange={handleChange}
                        sx={{width: "20vw", mr: "3vw"}}
                        margin="normal"
                    />
                    <FormControl margin="normal" sx={{width: "20vw"}}>
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
                    <FormControl margin={"normal"} sx={{width: "20vw", mr: "3vw"}}>
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
                    <FormControl margin="normal" sx={{width: "20vw"}}>
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
                    <FormControl margin="normal" sx={{width: "20vw", mr: "3vw"}}>
                        <InputLabel>Status</InputLabel>
                        <Select
                            name="status"
                            value={newTask.status}
                            onChange={(event) => handleSelectChange(event, "status")}
                        >
                            {Object.values(Status).map((status) => (
                                <MenuItem key={status} value={status}>
                                    {status}
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