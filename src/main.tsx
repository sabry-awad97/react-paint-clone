import '@fortawesome/fontawesome-free/css/all.css';
import './index.css';

import { Provider } from 'react-redux';

import ReactDOM from 'react-dom/client';

import App from './App';
import configureStore from './redux/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={configureStore()}>
    <App />
  </Provider>
);
