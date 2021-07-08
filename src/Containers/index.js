import React from 'react';
import {Paper,Tabs,Tab} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import {useState} from 'react';

const SignInOutContainer = () =>{
    const [value,setValue] = useState(0)
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
      const paperStyle = {
          width:340,margin:"20px auto"
      }
      function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }
      
    return(
        <div>
            <Paper style={paperStyle} elevation ={20}>
                <Tabs
                value={value}
                indicatorColor = 'primary'
                textColor = 'primary'
                onChange = {handleChange}
                aria-label="Login and SignUp page">
                    <Tab label='Login'></Tab>
                    <Tab label='SignUp'></Tab>
                </Tabs>
                <TabPanel value={value} index={0}>
                <Login handleChange={handleChange}/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <SignUp/>
                </TabPanel>
            </Paper>
        </div>
    )
}

export default SignInOutContainer;