import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import Form from './components/Form/Form';
 

function App(){
    const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, []);


    return(
        <>
            <Header />
            <Routes>
                <Route index element={<ProductList />}/>
                <Route path={'/form'} element={<Form />}/>
            </Routes>
        </>
    );          
};

export default App;