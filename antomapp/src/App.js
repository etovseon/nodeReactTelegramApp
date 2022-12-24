import './App.css';
import { useEffect } from 'react';
import { useTelegram } from './components/hooks/useTelegram';
import Header from './components/Header/Header';
import {Route, Routes} from 'react-router-dom';
import ProductList from './components/ProductList/ProductList';
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
          <Route path='/' element={<ProductList/>}/>
          <Route path='form' element={<Form/>}/>

        
        </Routes>
    </div>
  );
}

export default App;
