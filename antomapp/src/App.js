import './App.css';
import { useEffect } from 'react';
import Header from './components/Header/Header';
import {Route, Routes} from 'react-router-dom';
import ProductList from './components/ProductList/ProductList';
import Form from './components/Form/Form';
import { useTelegram } from './components/hooks/useTelegram';
// import { FirstFrame } from './components/FirstFrame/FirstFrame';
import FirstFrame from './components/FirstFrame/FirstFrame'
// import { GeneralFrame } from './components/FirstFrame/FirstFrame'
// const menu = require('./components/FirstFrame/FirstFrame')


function App() {

  const {onTogleButton,tg} = useTelegram();
  useEffect(() => {
    tg.ready();
  },[])

  
  return (
 
    <div className="App">
      <Header/>
      <Routes>
        <Route index element={<FirstFrame/>}/>
        <Route path='order' element={<ProductList/>}/>
        <Route path='form' element={<Form/>}/>
      </Routes>
    </div>
  );
}

export default App;
