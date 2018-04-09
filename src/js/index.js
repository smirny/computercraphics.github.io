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

export function multiply(x, y) {
  console.log(x * y);
}

const projects = document.querySelectorAll('.project');

let current = 0;

// project switcher
// prevBtn.forEach((item, index) => {
//   item.addEventListener('click', () => {
//     projects[current].classList.remove('active');
//     current-=1;
//     if (current<0) {
//       current = projects.length - 1;
//     }
//     projects[current].classList.add('active');
//   });
// });

// nextBtn.forEach((item, index) => {
//   item.addEventListener('click', () => {
//     projects[current].classList.remove('active');
//     current+=1;
//     if (current>projects.length - 1) {
//       current = 0;
//     }
//     projects[current].classList.add('active');
//   });
// });

// project switcher hover
export function switcherHover() {
  const prevBtn = document.querySelectorAll('.prev-btn');
  const nextBtn = document.querySelectorAll('.next-btn');

  const crewBtn = document.querySelector('#crew-social');
  const elloBtn = document.querySelector('#ello-social');
  const pinterestBtn = document.querySelector('#pinterest-social');
  const instagramBtn = document.querySelector('#instagram-social');
  const facebookBtn = document.querySelector('#facebook-social');

  const btnPopup = document.querySelector('.btn-popup');

  const hoverArr = [ prevBtn[0] ,nextBtn[0] ,crewBtn ,elloBtn ,pinterestBtn ,instagramBtn ,facebookBtn ];
  const hoverArrWords = [ 'Previous project' , 'Next project' , 'Crew' , 'Ello' , 'Pinterest' , 'Instagram' , 'Facebook' ];

  hoverArr.forEach((item, index) => {
    item.addEventListener('mouseover', (e) => {
      btnPopup.innerHTML = hoverArrWords[index];
      btnPopup.classList.add('active');
    });
    item.addEventListener('mouseleave', (e) => {
      btnPopup.classList.remove('active');
    });
  })
}

// poster scroll
export function posterScrollFunc() {
  const posterScrollTop = document.querySelectorAll('.poster-scroll-top');
  const posterScrollBottom = document.querySelectorAll('.poster-scroll-bottom');

  const posterScrollBtns = document.querySelectorAll('.poster-wrapper > .poster-scroll');

  const posterScroll = document.querySelectorAll('.project.poster > .poster-wrapper > .poster');

  let scrollBtnsTop = [];
  let scrollBtnsBot = [];

  let scrollRate = [];

  posterScrollBtns.forEach((item, i) => {
    scrollBtnsTop[i] = item.children[0];
    scrollBtnsBot[i] = item.children[1];
    scrollRate[i] = 0;

    scrollBtnsTop[i].addEventListener('click', () => {
      if (scrollRate[i] <= 0) {
        scrollRate[i] = 0;
      } else {
        scrollRate[i] += -100;
      }
      scrollDiv(false, scrollBtnsTop[i].parentNode.parentNode.children[0], scrollRate[i]);
    });
    scrollBtnsBot[i].addEventListener('click', () => {
      scrollRate[i] += 100;
      scrollDiv(false, scrollBtnsBot[i].parentNode.parentNode.children[0], scrollRate[i]);
    });
  });
}

// posterScrollTop.forEach((item, index) => {
//   item.addEventListener('click', () => {
//     scrollDiv(true, item.parentNode.parentNode.children[0], 0);
//   });
// });
// posterScrollBottom.forEach((item, index) => {
//   item.addEventListener('click', () => {
//     scrollDiv(false, item.parentNode.parentNode.children[0], 20000);
//   });
// });

function scrollDiv(maxScroll, divElem, previousScrollTop) {
  if (maxScroll) {
    divElem.scrollTop = -previousScrollTop;
  }
  else {
    divElem.scrollTop = previousScrollTop;
  }
}

