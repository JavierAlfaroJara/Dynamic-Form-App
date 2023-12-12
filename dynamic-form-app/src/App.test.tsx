import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import formReducer from './redux/formSlice';

// Create Redux store
const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

test('renders Dynamic Form link', () => {
  render(
      <Provider store={store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Provider>
    );
  const linkElement = screen.getByText(/Dynamic Form/i);
  expect(linkElement).toBeInTheDocument();
});