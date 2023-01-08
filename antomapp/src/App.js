import './App.css';
import { useEffect } from 'react';
import Header from './components/Header/Header';
import {Route, Routes} from 'react-router-dom';
import ProductList from './components/ProductList/ProductList';
import Form from './components/Form/Form';
import { useTelegram } from './components/hooks/useTelegram';
import {First_frame} from './components/First_frame/First_frame'

function App() {

  const {onTogleButton,tg} = useTelegram();
  useEffect(() => {
    tg.ready();
  },[])

  
  return (
 
    <div className="App">
      <Header/>
      <Routes>
        <Route index element={<ProductList/>}/>
        <Route path='menu' element={<First_frame/>}/>
        <Route path='form' element={<Form/>}/>
      </Routes>
    </div>
  );
}

export default App;
