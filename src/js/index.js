'use strict';

import '../styles/main.scss';

document.addEventListener('DOMContentLoaded', () => {
  const projects = document.querySelectorAll('.project');

  const prevBtn = document.querySelectorAll('.prev-btn');
  const nextBtn = document.querySelectorAll('.next-btn');

  const prevBtnPopup = document.querySelector('.prev-btn-popup');
  const nextBtnPopup = document.querySelector('.next-btn-popup');

  const posterScrollTop = document.querySelectorAll('.poster-scroll-top');
  const posterScrollBottom = document.querySelectorAll('.poster-scroll-bottom');

  const posterScroll = document.querySelectorAll('.project.poster > .poster-wrapper > .poster');

  let current = 0;

  // project switcher
  prevBtn.forEach((item, index) => {
    item.addEventListener('click', () => {
      projects[current].classList.remove('active');
      current-=1;
      if (current<0) {
        current = projects.length - 1;
      }
      projects[current].classList.add('active');
    });
  });

  nextBtn.forEach((item, index) => {
    item.addEventListener('click', () => {
      projects[current].classList.remove('active');
      current+=1;
      if (current>projects.length - 1) {
        current = 0;
      }
      projects[current].classList.add('active');
    });
  });

  // project switcher hover
  prevBtn[0].addEventListener('mouseover', (e) => {
    prevBtnPopup.classList.add('active');
  });
  prevBtn[0].addEventListener('mouseleave', (e) => {
    prevBtnPopup.classList.remove('active');
  });

  nextBtn[0].addEventListener('mouseover', (e) => {
    nextBtnPopup.classList.add('active');
  });
  nextBtn[0].addEventListener('mouseleave', (e) => {
    nextBtnPopup.classList.remove('active');
  });

  // poster scroll
  posterScrollTop.forEach((item, index) => {
    item.addEventListener('click', () => {
      scrollDiv(true, item.parentNode.parentNode.children[0], 0);
    });
  });
  posterScrollBottom.forEach((item, index) => {
    item.addEventListener('click', () => {
      scrollDiv(false, item.parentNode.parentNode.children[0], 20000);
    });
  });

  function scrollDiv(maxScroll, divElem, previousScrollTop) {
    if (maxScroll) {
      divElem.scrollTop = -previousScrollTop;
    }
    else {
      divElem.scrollTop = previousScrollTop;
    }
  }

});
