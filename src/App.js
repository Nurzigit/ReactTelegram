import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
 

function App(){
    const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, []);


    return(
        <>
            <button onClick={onToggleButton}>Toggle</button>
        </>
    );          
};

export default App;