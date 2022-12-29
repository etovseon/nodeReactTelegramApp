import './App.css';
import { useEffect } from 'react';
import { useTelegram } from './components/hooks/useTelegram';
import Header from './components/Header/Header';
import {Route, Routes} from 'react-router-dom';
import ProductList from './ProductList/ProductList';
import Form from './components/Form/Form';
import {BrowserRouter as Router} from 'react-router-dom';
function App() {

  const {onTogleButton,tg} = useTelegram();
  useEffect(() => {
    tg.ready();
  },[])

  
  return (
 
    <div className="App">
      <Header/>
      <Routes>
        <Route index element={<Form/>}/>
        <Route path='form' element={<ProductList/>}/>
      </Routes>
    </div>
  );
}

export default App;
