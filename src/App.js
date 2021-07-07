import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import {Grid} from '@material-ui/core';

import Image from './Img/test.jpg'; // Import using relative path


const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`,
        backgroundRepeat: 'repeat-y',
        backgroundSize: 'cover'
    }
};
const App = () =>{
    return(
        <div className='App' style={styles.paperContainer}>
        <Grid container >
                <Login />
                
                <SignUp container justifyContent='flex-end' />
            </Grid>
         </div>
    );
}

export default App;