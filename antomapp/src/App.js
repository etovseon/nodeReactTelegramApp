import './App.css';
import { useEffect } from 'react';
import { useTelegram } from './components/hooks/useTelegram';




function App() {

    const {onTogleButton,tg} = useTelegram();
    useEffect(() => {
      tg.ready();
    },[])

  
  return (
    <div className="App">
      
      <button onClick={onTogleButton}>tooggle</button>
    </div>
  );
}

export default App;
