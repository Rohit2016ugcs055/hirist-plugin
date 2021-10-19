import './App.css';
import "./fontello/css/fontello.css"
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'react-app-polyfill/stable';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import configureStore from './Store/index';
import Root from './components/Root';
const store = configureStore(window.__PRELOADED_STATE__);
function App() {
  return (
    <Provider store={store}>
        <Router>
          <Root/>
        </Router>
    </Provider>
   
  );
}

export default App;
