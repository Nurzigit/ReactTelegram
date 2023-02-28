import {useEffect} from 'react';
import './App.css';

function App(){

    useEffect(() => {
        tg.ready();
    }, []);


    return(
        <>
            <h1>Hello</h1>
        </>
    );          
};

export default App;