'use strict';

const url = 'http://localhost:8000/';

async function connect() {
  const data = { msg: 'Користувач підключився до панелі керування!' };

  await fetch(url + 'connect', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
  });
}

async function overload_handler() {
  const data = { msg: 'Рух ескалаторів зупинено с технічних причин!' };

  const displays = document.querySelectorAll('.display');
  displays[0].classList.remove('on');
  displays[0].classList.add('off');
  displays[1].classList.remove('on');
  displays[1].classList.add('off');

  await fetch(url + 'overload', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
  });

  alert(data.msg);
}

async function reverse_handler() {
  const data = { msg: 'Реверс руху ескалаторів!' };

  const displays = document.querySelectorAll('.display');
  const dis1 = displays[0].innerHTML;
  const dis2 = displays[1].innerHTML;
  displays[0].innerHTML = dis2;
  displays[1].innerHTML = dis1;

  await fetch(url + 'reverse', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
  })
}

async function fire_handler() {
  const data = { msg: 'Покиньте ескалатор!' };
  await fetch(url + 'fire', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
  })

  alert('Покиньте ескалатор!');
}

connect();

window.addEventListener('beforeunload', async function (e) { 
  e.preventDefault();

  const data = { msg: 'Користувач відключився від панелі керування!' };

  await fetch(url + 'disconnect', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
  })
    
}, false);
