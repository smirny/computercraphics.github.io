'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import request from 'superagent';

import Main from './components/Main';

import '../styles/main.scss';

document.addEventListener('DOMContentLoaded', () => {
  var mainApp = document.querySelector('#page-wrapper');

  request
    .get('/data/index.json')
    .end((err, res) => {
      if (err) {
        console.log(err);
      } else {
        const response = res.text;
        const data = JSON.parse(response);

        if (mainApp) {
          ReactDOM.render(<Main data={data.projects}/>, mainApp);
        }
      }
    });
});
