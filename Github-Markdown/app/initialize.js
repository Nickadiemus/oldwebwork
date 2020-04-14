import ReactDOM from 'react-dom';
import React from 'react';
import marded from 'marked'
import App from 'components/App';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  ReactDOM.render(<App />, app );
});
