import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/plugins/global/plugins.bundle.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import {store ,persistor} from './store/userAuthenticaion';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}> 
   <PersistGate loading={null} persistor={persistor}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
   </PersistGate>
  </Provider>
 
);
reportWebVitals();
