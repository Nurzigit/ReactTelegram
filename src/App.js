import {useEffect} from 'react';
import './App.css';
const tg = window.Telegram.WebApp;

function App(){

    useEffect(() => {
        tg.ready();
    }, []);

    const onClass = () => {
        tg.close();
    }


    return(
        <>
            <h1>Hello</h1>
            <button onClick={onClass}>Закрыть</button>
        </>
    );          
};

export default App;