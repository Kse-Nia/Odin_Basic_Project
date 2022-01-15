const express = require("express");
require('dotenv').config();
const http = require("http");
const port = process.env.PORT;

const server = http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.write('Hello World!');
    res.end();
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})