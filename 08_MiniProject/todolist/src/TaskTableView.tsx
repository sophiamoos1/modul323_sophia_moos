import {TaskType} from "./TaskType";
import {TasklistType} from "./TasklistType";
import React, {useEffect, useState} from "react";
import {Box, Button, Checkbox, FormControlLabel, Typography} from "@mui/material";
import Grid from '@mui/material/Grid';
import {Status} from "./Status";
import {Priority} from "./Priority";
import {Category} from "./Category";

type TaskTable = {
    tasklists: TasklistType[]
    setTasklists: Function
}

enum FilterOptions {
    highPriority = "highPriority",
    mediumPriority = "mediumPriority",
    lowPriority = "lowPriority",
    todoStatus = "todoStatus",
    startedStatus = "startedStatus",
    completeStatus = "completeStatus",
    workCategory = "workCategory",
    schoolCategory = "schoolCategory",
    householdCategory = "householdCategory",
    shoppingCategory = "shoppingCategory",
    billsCategory = "billsCategory",
    familyCategory = "familyCategory",
    hobbyCategory = "hobbyCategory",
    otherCategory = "otherCategory",
}
export default function TaskTableView({tasklists, setTasklists}: TaskTable) {
    const [filteredTasks, setFilteredTasks] = useState<TaskType[]>(tasklists.map(tasklist => tasklist.tasks).flat());
    const [selectedFilterOptions, setSelectedFilterOptions] = useState<FilterOptions[]>([]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, filterOption: FilterOptions) => {

        if (selectedFilterOptions.includes(filterOption)) {
            setSelectedFilterOptions(selectedFilterOptions.filter(option => option !== filterOption))
        } else {
            setSelectedFilterOptions(prevState => [...prevState, filterOption])
        }
    };

    useEffect(() => {
        const tasks = tasklists.map(tasklist => tasklist.tasks).flat()
        const statusState = checkForSelectedStatus(selectedFilterOptions)
        const priorityState = checkForSelectedPriority(selectedFilterOptions)
        const categoryState = checkForSelectedCategory(selectedFilterOptions)
        if(selectedFilterOptions.length > 0) {
            const newFilteredTasks: TaskType[] = tasks.filter((task) => {
                const statusCheck = statusState.length === 0 || statusState.includes(task.status);
                const priorityCheck = priorityState.length === 0 || priorityState.includes(task.priority);
                const categoryCheck = categoryState.length === 0 || categoryState.includes(task.category);

                return statusCheck && priorityCheck && categoryCheck;
            })
            setFilteredTasks(newFilteredTasks)
        } else {
            setFilteredTasks(tasklists.map(tasklist => tasklist.tasks).flat());
        }
    }, [selectedFilterOptions])

    const checkForSelectedStatus = (options: FilterOptions[]) => {
        var statusSelected: Status[] = [];
        if (options.includes(FilterOptions.todoStatus)) {
            statusSelected = [...statusSelected, Status.todo]
        }
        if (options.includes(FilterOptions.startedStatus)) {
            statusSelected = [...statusSelected, Status.started]
        }
        if (options.includes(FilterOptions.completeStatus)) {
            statusSelected = [...statusSelected, Status.complete]
        }
        return statusSelected
    }

    const checkForSelectedPriority = (options: FilterOptions[]) => {
        var prioritySelected: Priority[] = [];
        if (options.includes(FilterOptions.lowPriority)) {
            prioritySelected = [...prioritySelected, Priority.low]
        }
        if (options.includes(FilterOptions.mediumPriority)) {
            prioritySelected = [...prioritySelected, Priority.medium]
        }
        if (options.includes(FilterOptions.highPriority)) {
            prioritySelected = [...prioritySelected, Priority.high]
        }
        return prioritySelected
    }

    const checkForSelectedCategory = (options: FilterOptions[]) => {
        var categorySelected: Category[] = [];
        if (options.includes(FilterOptions.workCategory)) {
            categorySelected = [...categorySelected, Category.work]
        }
        if (options.includes(FilterOptions.schoolCategory)) {
            categorySelected = [...categorySelected, Category.school]
        }
        if (options.includes(FilterOptions.householdCategory)) {
            categorySelected = [...categorySelected, Category.household]
        }
        if (options.includes(FilterOptions.shoppingCategory)) {
            categorySelected = [...categorySelected, Category.shopping]
        }
        if (options.includes(FilterOptions.billsCategory)) {
            categorySelected = [...categorySelected, Category.bills]
        }
        if (options.includes(FilterOptions.familyCategory)) {
            categorySelected = [...categorySelected, Category.family]
        }
        if (options.includes(FilterOptions.hobbyCategory)) {
            categorySelected = [...categorySelected, Category.hobby]
        }
        if (options.includes(FilterOptions.otherCategory)) {
            categorySelected = [...categorySelected, Category.other]
        }

        return categorySelected
    }

    React.useEffect(() => {
        setFilteredTasks(tasklists.map(tasklist => tasklist.tasks).flat());
    }, [tasklists]);


    return (
        <Box>
            <Box sx={{ width: "82vw"}}>
                <Grid container sx={{width: "82vw", height: "20vh", fontSize: "14px"}}>
                    <Grid item xs={6}>
                        <Typography sx={{color: "#ffffff", fontWeight: 400}}>Filter Tasks by: </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="contained" onClick={() => {setSelectedFilterOptions([])}} size="small">
                            Reset Filters
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container sx={{color: "#92c2fc", alignItems: "center"}}>
                        <Grid item xs={2}>
                            <Typography sx={{color: "#ffffff", fontWeight: 400, fontSize: "14px"}}>Priorities & Status: </Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <FormControlLabel
                                label="Low"
                                control={<Checkbox checked={selectedFilterOptions.includes(FilterOptions.lowPriority)} onChange={(event) => handleChange(event, FilterOptions.lowPriority)}  sx={{
                                    color: "#a5cbfa",
                                    '&.Mui-checked': {
                                        color: "#63a6f7",
                                    },
                                }} size="small"/>}
                            />
                        </Grid>
                            <Grid item xs={1}>
                                <FormControlLabel
                                    label="Medium"
                                    sx={{fontSize: "14px"}}
                                    control={<Checkbox checked={selectedFilterOptions.includes(FilterOptions.mediumPriority)} onChange={(event) => handleChange(event, FilterOptions.mediumPriority)}  sx={{
                                        color: "#a5cbfa",
                                        '&.Mui-checked': {
                                            color: "#63a6f7",
                                        },
                                    }} size="small"/>}
                                />
                            </Grid>
                            <Grid item xs={1}>
                                <FormControlLabel
                                    label="High"
                                    sx={{fontSize: "14px"}}
                                    control={<Checkbox checked={selectedFilterOptions.includes(FilterOptions.highPriority)} onChange={(event) => handleChange(event, FilterOptions.highPriority)}  sx={{
                                        color: "#a5cbfa",
                                        '&.Mui-checked': {
                                            color: "#63a6f7",
                                        },
                                    }} size="small"/>}
                                />
                            </Grid>
                            <Grid item xs={1}>
                                <FormControlLabel
                                    label="Todo"
                                    sx={{fontSize: "14px"}}
                                    control={<Checkbox checked={selectedFilterOptions.includes(FilterOptions.todoStatus)} onChange={(event) => handleChange(event, FilterOptions.todoStatus)}  sx={{
                                        color: "#a5cbfa",
                                        '&.Mui-checked': {
                                            color: "#63a6f7",
                                        },
                                    }} size="small"/>}
                                />
                            </Grid>
                            <Grid item xs={1}>
                                <FormControlLabel
                                    label="Started"
                                    sx={{fontSize: "14px"}}
                                    control={<Checkbox checked={selectedFilterOptions.includes(FilterOptions.startedStatus)} onChange={(event) => handleChange(event, FilterOptions.startedStatus)}  sx={{
                                        color: "#a5cbfa",
                                        '&.Mui-checked': {
                                            color: "#63a6f7",
                                        },
                                    }} size="small"/>}
                                />
                            </Grid>
                            <Grid item xs={1}>
                                <FormControlLabel
                                    label="Completed"
                                    sx={{fontSize: "14px"}}
                                    control={<Checkbox checked={selectedFilterOptions.includes(FilterOptions.completeStatus)} onChange={(event) => handleChange(event, FilterOptions.completeStatus)}  sx={{
                                        color: "#a5cbfa",
                                        '&.Mui-checked': {
                                            color: "#63a6f7",
                                        },
                                    }} size="small"/>}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container sx={{color: "#92c2fc", alignItems: "center"}}>
                        <Grid item xs={2}>
                            <Typography sx={{color: "#ffffff", fontWeight: 400, fontSize: "14px"}}>Categories: </Typography>
                        </Grid>
                            <Grid item xs={1}>
                                <FormControlLabel
                                    label="Work"
                                    sx={{fontSize: "14px"}}
                                    control={<Checkbox checked={selectedFilterOptions.includes(FilterOptions.workCategory)} onChange={(event) => handleChange(event, FilterOptions.workCategory)}  sx={{
                                        color: "#a5cbfa",
                                        '&.Mui-checked': {
                                            color: "#63a6f7",
                                        },
                                    }} size="small"/>}
                                />
                            </Grid>
                            <Grid item xs={1}>
                                <FormControlLabel
                                    label="School"
                                    sx={{fontSize: "14px"}}
                                    control={<Checkbox checked={selectedFilterOptions.includes(FilterOptions.schoolCategory)} onChange={(event) => handleChange(event, FilterOptions.schoolCategory)}  sx={{
                                        color: "#a5cbfa",
                                        '&.Mui-checked': {
                                            color: "#63a6f7",
                                        },
                                    }}size="small" />}
                                />
                            </Grid>
                            <Grid item xs={1}>
                                <FormControlLabel
                                    label="Household"
                                    sx={{fontSize: "14px"}}
                                    control={<Checkbox checked={selectedFilterOptions.includes(FilterOptions.householdCategory)} onChange={(event) => handleChange(event, FilterOptions.householdCategory)}  sx={{
                                        color: "#a5cbfa",
                                        '&.Mui-checked': {
                                            color: "#63a6f7",
                                        },
                                    }} size="small" />}
                                />
                            </Grid>
                            <Grid item xs={1}>
                                <FormControlLabel
                                    label="Shopping"
                                    sx={{fontSize: "14px"}}
                                    control={<Checkbox checked={selectedFilterOptions.includes(FilterOptions.shoppingCategory)} onChange={(event) => handleChange(event, FilterOptions.shoppingCategory)}  sx={{
                                        color: "#a5cbfa",
                                        '&.Mui-checked': {
                                            color: "#63a6f7",
                                        },
                                    }} size="small" />}
                                />
                            </Grid>
                            <Grid item xs={1}>
                                <FormControlLabel
                                    label="Bills"
                                    sx={{fontSize: "14px"}}
                                    control={<Checkbox checked={selectedFilterOptions.includes(FilterOptions.billsCategory)} onChange={(event) => handleChange(event, FilterOptions.billsCategory)}  sx={{
                                        color: "#a5cbfa",
                                        '&.Mui-checked': {
                                            color: "#63a6f7",
                                        },
                                    }} size="small" />}
                                />
                            </Grid>
                            <Grid item xs={1}>
                                <FormControlLabel
                                    label="Family"
                                    sx={{fontSize: "14px"}}
                                    control={<Checkbox checked={selectedFilterOptions.includes(FilterOptions.familyCategory)} onChange={(event) => handleChange(event, FilterOptions.familyCategory)}  sx={{
                                        color: "#a5cbfa",
                                        '&.Mui-checked': {
                                            color: "#63a6f7",
                                        },
                                    }} size="small" />}
                                />
                            </Grid>
                            <Grid item xs={1}>
                                <FormControlLabel
                                    label="Hobby"
                                    sx={{fontSize: "14px"}}
                                    control={<Checkbox checked={selectedFilterOptions.includes(FilterOptions.hobbyCategory)} onChange={(event) => handleChange(event, FilterOptions.hobbyCategory)}  sx={{
                                        color: "#a5cbfa",
                                        '&.Mui-checked': {
                                            color: "#63a6f7",
                                        },
                                    }} size="small" />}
                                />
                            </Grid>
                            <Grid item xs={1}>
                                <FormControlLabel
                                    label="Other"
                                    sx={{fontSize: "14px"}}
                                    control={<Checkbox checked={selectedFilterOptions.includes(FilterOptions.otherCategory)} onChange={(event) => handleChange(event, FilterOptions.otherCategory)}  sx={{
                                        color: "#a5cbfa",
                                        '&.Mui-checked': {
                                            color: "#63a6f7",
                                        },
                                    }} size="small" />}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        <Box sx={{width: "82vw"}}>
            <Grid container sx={{width: "70vw", ml: "6vw", mr: "6vw", paddingLeft: "1vw"}}>
                {filteredTasks.map((task: TaskType) => (
                    <Grid item xs={12}>
                        <Box sx={{bgcolor: "#002452", borderRadius: "15px", mt: "5px", height: "12vh"}}>
                        <Grid container>
                            <Grid item xs={3}>
                                <Typography sx={{fontWeight: 500, fontSize: "16px", pl: "5px", color: "#b2b9c2", pt: "2px"}} align="left">{task.name}</Typography>
                                <Typography sx={{fontWeight: 300, fontSize: "14px", pl: "5px", color: "#fff", pt: "5px"}} align="left">{task.description ?? ""}</Typography>
                            </Grid>
                            <Grid item xs={2}>

                            </Grid>
                        </Grid>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
        </Box>
    )
}
