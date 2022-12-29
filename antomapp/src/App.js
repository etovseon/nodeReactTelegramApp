import './App.css';
import { useEffect } from 'react';
import { useTelegram } from './components/hooks/useTelegram';
import Header from './components/Header/Header';
import {Route, Routes} from 'react-router-dom';
import ProductList from './ProductList/ProductList';
import Form from './components/Form/Form';

function App() {

  const {onTogleButton,tg} = useTelegram();
  useEffect(() => {
    tg.ready();
  },[])

  
  return (
 
    <div className="App">
      <Header/>
      <Routes>
      <Route path='form' element={<ProductList/>}/>
        <Route index element={<Form/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
