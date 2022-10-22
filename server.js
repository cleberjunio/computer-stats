const http = require('http');

http.createServer((req, res) => {

    return res.end('enviando')


}).listen(5000, () => {
    console.log('rodando...');
});