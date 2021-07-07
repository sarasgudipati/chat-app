import {Grid,Paper, Avatar,Typography,TextField,Button} from '@material-ui/core';
import {useState} from 'react';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';

const Login = () =>{

    const paperStyle ={
        padding: '30px 20px',
        width : 300,
        margin : '90px',
        float : 'right',
        textAlign : 'center'
    }
    const marginTopStyle = {marginTop:5}
    const headerStyle = {margin : '0',fontFamily:'Georgia'}
    const avtarStyle = {backgroundColor : '#1769aa'}

    const [emailId,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const loginUser = (e) =>{
        e.preventDefault();
        const userLoginCreds = {emailId,password};
        console.log(userLoginCreds);
    }

    return(
        <Grid>
            <Paper elevation ={20} style = {paperStyle}>
            <Grid align='center'>
                <Avatar style={avtarStyle}>
                    <AddCircleOutlinedIcon/>
                </Avatar>
                <Typography variant ='caption' gutterBottom>Please Fill the form for Login</Typography>
            </Grid>
            <h2 style ={headerStyle}>Login</h2>
                <form onSubmit ={loginUser}>
                    <TextField
                        type="email"
                        required
                        fontFamily='Arial'
                        fullWidth
                        label='Email Id'
                        name="loginEmailId"
                        id="loginEmailId"
                        value ={emailId}
                        onChange = {(e)=>setEmail(e.target.value)}
                        />
                    <TextField
                    type="password"
                    required
                    fullWidth
                    fontFamily='Arial'
                    label='Password'
                    value={password}
                    onChange = {(e)=>setPassword(e.target.value)}
                    />
                    <Button style={marginTopStyle} type="submit" variant="contained" color="primary">LogIn</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Login;