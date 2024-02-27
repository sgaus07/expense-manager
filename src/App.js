import './App.css';
import Router from './Routes/Router';
import { Provider } from 'react-redux';
import store from './Shared/Store';

function App() {
  return (
    <>
    <Provider store={store}>
      <Router/>
    </Provider>
    </>
  );
}

export default App;
