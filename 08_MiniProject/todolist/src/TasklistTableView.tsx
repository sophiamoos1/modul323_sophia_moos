import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { TasklistType } from './TasklistType';
import { Status } from "./Status";

type Row = {
    id: string;
    name: string;
    tasks: number;
    opentasks: number;
    startedtasks: number;
    completedtasks: number;
    creationdate: Date;
}

type TasklistTable = {
    tasklists: TasklistType[];
    setTasklists: Function;
}

enum FilterCases {
    none = "none",
    startedTasks = "startedTasks",
    openTasks = "openTasks",
    completedTasks = "completedTasks",
    tasks = "tasks",
    dateOfCreation = "dateOfCreation"
}

export default function TasklistTableView({ tasklists, setTasklists }: TasklistTable) {
    const [filter, setFilter] = React.useState<FilterCases>(FilterCases.none);
    const [filteredTasklists, setFilteredTasklists] = React.useState<TasklistType[]>(tasklists);
    const [rows, setRows] = React.useState<Row[]>([]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilter((event.target as HTMLInputElement).value as FilterCases);
    }

    React.useEffect(() => {
        setFilteredTasklists(tasklists);
    }, [tasklists]);

    React.useEffect(() => {
        const filteredRows = filteredTasklists.map(tasklist => createRow(tasklist));
        setRows(filteredRows);
    }, [filteredTasklists]);

    React.useEffect(() => {
        let newFilteredTasklist: TasklistType[] = [];
        switch (filter) {
            case FilterCases.openTasks:
                newFilteredTasklist = sortTasklistsByTaskStatus(Status.todo);
                break;
            case FilterCases.startedTasks:
                newFilteredTasklist = sortTasklistsByTaskStatus(Status.started);
                break;
            case FilterCases.completedTasks:
                newFilteredTasklist = sortTasklistsByTaskStatus(Status.complete);
                break;
            case FilterCases.tasks:
                newFilteredTasklist = sortTasklistsByTask();
                break;
            case FilterCases.dateOfCreation:
                newFilteredTasklist = sortTasklistsByCreationDate();
                break;
            case FilterCases.none:
                newFilteredTasklist = tasklists;
                break;
            default:
                newFilteredTasklist = tasklists;
                break;
        }
        setFilteredTasklists(newFilteredTasklist);
    }, [filter]);

    const sortTasklistsByTaskStatus = (statusToSort: Status): TasklistType[] => {
        return [...tasklists].sort((a, b) => {
            const countA = a.tasks.filter(task => task.status === statusToSort).length;
            const countB = b.tasks.filter(task => task.status === statusToSort).length;
            return countB - countA;
        });
    }

    const sortTasklistsByTask = (): TasklistType[] => {
        return [...tasklists].sort((a, b) => {
            return b.tasks.length - a.tasks.length;
        });
    }

    const sortTasklistsByCreationDate = (): TasklistType[] => {
        return [...tasklists].sort((a, b) => {
            return new Date(a.createDate).getTime() - new Date(b.createDate).getTime();
        });
    }

    const createRow = (tasklist: TasklistType): Row => {
        const tasks = tasklist.tasks.length;
        const opentasks = tasklist.tasks.filter(task => task.status === Status.todo).length;
        const startedtasks = tasklist.tasks.filter(task => task.status === Status.started).length;
        const completedtasks = tasklist.tasks.filter(task => task.status === Status.complete).length;
        return {
            id: tasklist.id,
            name: tasklist.name,
            tasks,
            opentasks,
            startedtasks,
            completedtasks,
            creationdate: tasklist.createDate
        };
    }

    return (
        <Box>
            <Box sx={{ width: "82vw", textColor: "#ffffff", borderRadius: "15px" }}>
                <FormControl sx={{width: "82vw"}}>
                    <FormLabel id="tasklist-filter-label" sx={{ color: "#a5cbfa", width: "82vw", fontWeight: 500 }}>Filter by:</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="tasklist-filter-label"
                        name="tasklist-filter"
                        onChange={handleChange}
                        sx={{ color: "#92c2fc", fontSize: "9px", width: "82vw", paddingLeft: "10px"}}
                    >
                        <FormControlLabel value="none" control={
                            <Radio sx={{
                                color: "#a5cbfa",
                                '&.Mui-checked': {
                                    color: "#63a6f7"
                                }
                            }} />
                        } label="None" />
                        <FormControlLabel value="openTasks" control={
                            <Radio sx={{
                                color: "#a5cbfa",
                                '&.Mui-checked': {
                                    color: "#63a6f7"
                                }
                            }} />
                        } label="Open Tasks" />
                        <FormControlLabel value="startedTasks" control={
                            <Radio sx={{
                                color: "#a5cbfa",
                                '&.Mui-checked': {
                                    color: "#63a6f7"
                                }
                            }} />
                        } label="Started Tasks" />
                        <FormControlLabel value="completedTasks" control={
                            <Radio sx={{
                                color: "#a5cbfa",
                                '&.Mui-checked': {
                                    color: "#63a6f7"
                                }
                            }} />
                        } label="Completed Tasks" />
                        <FormControlLabel value="tasks" control={
                            <Radio sx={{
                                color: "#a5cbfa",
                                '&.Mui-checked': {
                                    color: "#63a6f7"
                                }
                            }} />
                        } label="Tasks" />
                        <FormControlLabel value="dateOfCreation" control={
                            <Radio sx={{
                                color: "#a5cbfa",
                                '&.Mui-checked': {
                                    color: "#63a6f7"
                                }
                            }} />
                        } label="Date of creation" />
                    </RadioGroup>
                </FormControl>
            </Box>
            <TableContainer component={Paper} sx={{width: "82vw", mt: "15px", borderRadius: "15px"}}>
                <Table sx={{ maxWidth: "82vw", borderRadius: "15px" }} aria-label="table">
                    <TableHead sx={{borderTopLeftRadius: "15px", borderTopRightRadius: "15px"}}>
                        <TableRow>
                            <TableCell sx={{bgcolor: "#002657", color: "#ffffff"}}>Tasklist name</TableCell>
                            <TableCell align="right" sx={{bgcolor: "#002657", color: "#ffffff"}}>Total tasks</TableCell>
                            <TableCell align="right" sx={{bgcolor: "#002657", color: "#ffffff"}}>Open tasks</TableCell>
                            <TableCell align="right" sx={{bgcolor: "#002657", color: "#ffffff"}}>Started tasks</TableCell>
                            <TableCell align="right" sx={{bgcolor: "#002657", color: "#ffffff"}}>Completed tasks</TableCell>
                            <TableCell align="right" sx={{bgcolor: "#002657", color: "#ffffff"}}>Created on</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row: Row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.tasks}</TableCell>
                                <TableCell align="right">{row.opentasks}</TableCell>
                                <TableCell align="right">{row.startedtasks}</TableCell>
                                <TableCell align="right">{row.completedtasks}</TableCell>
                                <TableCell align="right">{new Date(row.creationdate).toLocaleDateString()}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}