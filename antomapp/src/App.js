import './App.css';
import { useEffect } from 'react';
import { useTelegram } from './components/hooks/useTelegram';
import Header from './components/Header/Header';




function App() {

    const {onTogleButton,tg} = useTelegram();
    useEffect(() => {
      tg.ready();
    },[])

  
  return (
    <div className="App">
      <Header/>
      <button onClick={onTogleButton}>tooggle</button>
    </div>
  );
}

export default App;
