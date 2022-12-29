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
    <BrowserRouter>
    <Header />
    
     <Routes>
         <Route path="/" element={<ProductList/>} />
         <Route path="/form" element={<Form/>} />
     </Routes>
    </BrowserRouter>
   

  );
}

export default App;
