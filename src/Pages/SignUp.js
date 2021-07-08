import {useState} from 'react';
import '../index.css';
import {Grid,Paper, Avatar,Typography,TextField,Button} from '@material-ui/core';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const SignUp = ()=>{
    const registerUser =(e) =>{
        e.preventDefault();
        const user = {firstName,lastName,phoneNumber,emailId,dob,password,gender};
        console.log(user);
    }
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [phoneNumber,setPhoneNumber] = useState('');
    const [emailId,setEmailId] = useState('');
    const [dob,setDob] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [gender,setGender] = useState('female');

    let today = new Date();
    const todayDate =today.getFullYear()+'-'+today.getMonth()+'-'+today.getDate();
    const paperStyle ={
        padding: 20,
        width : 300,
        margin : '0 auto',
        textAlign : 'center'
    }
    const marginTopStyle = {marginTop:5}
    const headerStyle = {margin : '0',fontFamily:'Georgia'}
    const avtarStyle = {backgroundColor : '#1769aa'}
    return(
        <Grid>
            <Paper style = {paperStyle}>
            <Grid align='center'>
                <Avatar style={avtarStyle}>
                    <AddCircleOutlinedIcon/>
                </Avatar>
                <Typography variant ='caption' gutterBottom>Please Fill the form for Sign Up</Typography>
            </Grid>
            <h2 style ={headerStyle}>SignUp</h2>
            <form onSubmit ={registerUser}>
                <TextField
                    required
                    fullWidth
                    label='First Name'
                    value ={firstName}
                    onChange = {(e)=>setFirstName(e.target.value)}
                    />
                <TextField
                required
                fullWidth
                label='Last Name'
                value={lastName}
                onChange = {(e)=>setLastName(e.target.value)}
                />
                <TextField
                required
                label='Phone Number'
                value={phoneNumber}
                fullWidth
                type='number'
                pattern = '[6-9]{1}[0-9]{9}'
                onChange = {(e)=>setPhoneNumber(e.target.value)}
                />
                <TextField
                required
                fullWidth
                label='Email'
                value={emailId}
                onChange = {(e)=>setEmailId(e.target.value)}
                />
                   <TextField
                        required
                        label="Birthday"
                        type="date"
                        value={dob}
                        fullWidth
                        max = {todayDate}
                        onChange={(e) => setDob(e.target.value)}
                        InputLabelProps={{
                            shrink: true,
                          }}
                     />
                     <TextField label="Password"
                      type="password"
                      value={password}
                      fullWidth
                      onChange={(e) => setPassword(e.target.value)}
                      />
                       <TextField label="Confirm Password"
                      type="password"
                      value={confirmPassword}
                      fullWidth
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                      <FormControl component="fieldset" fullWidth style={marginTopStyle}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" row value={gender} onChange = {(e)=>setGender(e.target.value)}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                <Button type="submit" variant="contained" color="primary">Sign Up</Button>
            </form>
            </Paper>
        </Grid> 
        
    );
}

export default SignUp;