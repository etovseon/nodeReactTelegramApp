import './App.css';
const tg = window.Telegram.WebApp;



function App() {

    useEffect(() => {
      tg.ready();
    },[])
    const onClose = () => {
      tg.close();
    }
  return (
    <div className="App">
      ya work
      <button onClick={onClose}>close</button>
    </div>
  );
}

export default App;
