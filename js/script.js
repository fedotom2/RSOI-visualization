'use strict';

function overload_handler() {
  const displays = document.querySelectorAll('.display');
  displays[0].classList.remove('on');
  displays[0].classList.add('off');
  displays[1].classList.remove('on');
  displays[1].classList.add('off');
  alert('Рух ескалаторів зупинено с технічних причин!');
}

function reverse_handler() {
  const displays = document.querySelectorAll('.display');
  const dis1 = displays[0].innerHTML;
  const dis2 = displays[1].innerHTML;
  displays[0].innerHTML = dis2;
  displays[1].innerHTML = dis1;
}

function fire_handler() {
  alert('Покиньте ескалатор!');
}
