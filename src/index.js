import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {createStore} from "redux";
import reducer from "./reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const store = createStore(reducer,composeWithDevTools());
ReactDOM.render(
  <Provider store  = {store}>
      <MuiThemeProvider >
        <App />
      </MuiThemeProvider >
  </Provider>,
  document.getElementById('root')
);
