import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './App.css';
import {Box, Typography} from "@mui/material";
import TasklistTableView from "./TasklistTableView";
import {TasklistType} from "./TasklistType";
import {TasklistData} from "./TasklistData";
import TaskTableView from "./TaskTableView";
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3, }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
function App() {
    const [tasklists, setTasklists] = React.useState(
        TasklistData()
    )
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
    <div className="App">
      <Box sx={{bgcolor: "#000f21", minHeight: "100vh"}}>
        <Box sx={{bgcolor: "#000f21", height: "10vh", width: "100vw", mt: 0, mb: 0}}>
            <Typography align="center" variant="h2" sx={{color: "#0073ff", fontWeight: 500}}>
                Todo-App
            </Typography>
        </Box>
          <Box sx={{width: "86vw", mt: "5vh", mr: "7vw", ml: "7vw", bgcolor: "#001b3d", borderRadius: "15px"}}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: "#001b3d", borderTopLeftRadius: "15px", borderTopRightRadius: "15px" }}>
                  <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                      <Tab label="Tasklists Overview" {...a11yProps(0)} sx={{color: "#ffffff"}}/>
                      <Tab label="Tasks Overview" {...a11yProps(1)} sx={{color: "#ffffff"}}/>
                      <Tab label="Create new Tasklist" {...a11yProps(2)} sx={{color: "#ffffff"}}/>
                  </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                  <TasklistTableView tasklists={tasklists} setTasklists={setTasklists}/>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                  <TaskTableView tasklists={tasklists} setTasklists={setTasklists}/>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                  Item Three
              </CustomTabPanel>
          </Box>
      </Box>
    </div>
  );
}
export default App;
