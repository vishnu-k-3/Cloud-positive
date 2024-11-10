import './App.css';
import TabelComponent from './Components/tabelComponent';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <TabelComponent />
      </Provider>
    </div>
  );
}

export default App;
