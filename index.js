const express = require('express');
const app = express();
const cron = require('node-cron');
const axios = require('axios');
const WeatherData = require('./WeatherData');