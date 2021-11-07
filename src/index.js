import React from 'react';
import ReactDOM from 'react-dom';
import { Paper, Typography } from '@mui/material';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const App = (props) => {
  return (
    <Paper variant="outlined">
      <Typography variant="h1">Hello World</Typography>
    </Paper>
  );
};

if (document.getElementById('root')) {
  const props = Object.assign({}, document.getElementById('root').dataset);
  ReactDOM.render(<React.StrictMode><App {...props} /></React.StrictMode>, document.getElementById('root'));
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
