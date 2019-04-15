require('dotenv').config()

let bot = require('./src/puppeteer');
let cnf = require('./config/config.js');

bot();
setInterval(bot, cnf.settings.run_every_x_hours * 3600000);

