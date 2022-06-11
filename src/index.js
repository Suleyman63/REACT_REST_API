import './index.css';
import {BrowserRouter as Router} from "react-router-dom"
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import productsReducer, { productsFetch } from "./redux/productsSlice";
import cartReducer, { getTotals } from "./redux/cartSlice";
import { productsApi } from "./redux/productsApi";


const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

store.dispatch(productsFetch());
store.dispatch(getTotals());



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

