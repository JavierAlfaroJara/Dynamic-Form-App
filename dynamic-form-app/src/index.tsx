import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import formReducer from './redux/formSlice';

import App from './App';
import reportWebVitals from './reportWebVitals';

// Create Redux store
const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

reportWebVitals(); 