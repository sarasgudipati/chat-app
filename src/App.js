import SignInOutContainer from './Containers/index'

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
            <SignInOutContainer/>
         </div>
    );
}

export default App;