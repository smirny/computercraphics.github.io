'use strict';

import '../styles/main.scss';

document.addEventListener('DOMContentLoaded', () => {
  const projects = document.querySelectorAll('.project');

  const prevBtn = document.querySelectorAll('.prev-btn');
  const nextBtn = document.querySelectorAll('.next-btn');

  let current = 0;

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
});
