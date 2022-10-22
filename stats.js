const os = require('os');
const log = require('./logger');
setInterval(() => {
    const { freemem, totalmem } = os;


    const free = parseInt(freemem() / 1024 / 1024);
    const total = parseInt(totalmem() / 1024 / 1024);
    const percents = parseInt((free / total) * 100);

    const stats = {
        free: `${free} MB`,
        total: `${total} MB`,
        usage: `${percents} %`
    }

    console.clear()
    console.log('-----PC STATS----');
    console.table(stats);
    log(`${JSON.stringify(stats)}\n`)
}, 2000)