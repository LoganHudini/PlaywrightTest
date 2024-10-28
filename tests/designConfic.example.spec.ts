import { test, expect } from '@playwright/test';
const tdata =JSON.parse(JSON.stringify(require('../tests/testdata.json')))
const loginPage=require('./pages/login');
const createdesign = require('./pages/createdesignpage');
const createcomponent = require('./pages/createComponentspage');

