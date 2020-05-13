'use strict';

const { Router } = require('express');
const fs = require('fs');
const util = require('util');
const path = require('path');
const router = Router();

const appendFile = util.promisify(fs.appendFile);

router.post('/connect', async (req, res, next) => {
  try {
    const date = new Date();
    const type = 'connect';
    const name = 'Підключення';
    const { msg } = req.body;

    const data = `${date.toString()} / ${type} / ${name} / ${msg} \r\n`;

    await appendFile(path.join(__dirname, 'log.txt'), data, 'utf8');
  } catch (err) {
    console.error(err);
  }
});

router.post('/overload', async (req, res, next) => {
  try {
    const date = new Date();
    const type = 'overload';
    const name = 'Перевантаження';
    const { msg } = req.body;

    const data = `${date.toString()} / ${type} / ${name} / ${msg} \r\n`;

    await appendFile(path.join(__dirname, 'log.txt'), data, 'utf8');
  } catch (err) {
    console.error(err);
  }
});

router.post('/reverse', async (req, res, next) => {
  try {
    const date = new Date();
    const type = 'reverse';
    const name = 'Зміна руху ескалаторів';
    const { msg } = req.body;

    const data = `${date.toString()} / ${type} / ${name} / ${msg} \r\n`;

    await appendFile(path.join(__dirname, 'log.txt'), data, 'utf8');
  } catch (err) {
    console.error(err);
  }
});

router.post('/fire', async (req, res, next) => {
  try {
    const date = new Date();
    const type = 'fire';
    const name = 'Пожежа';
    const { msg } = req.body;

    const data = `${date.toString()} / ${type} / ${name} / ${msg} \r\n`;

    await appendFile(path.join(__dirname, 'log.txt'), data, 'utf8');
  } catch (err) {
    console.error(err);
  }
});

router.post('/disconnect', async (req, res, next) => {
  try {
    const date = new Date();
    const type = 'disconnect';
    const name = 'Відключення';
    const { msg } = req.body;

    const data = `${date.toString()} / ${type} / ${name} / ${msg} \r\n`;

    await appendFile(path.join(__dirname, 'log.txt'), data, 'utf8');
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
