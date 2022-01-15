const express = require("express");
const res = require("express/lib/response");
const app = express();
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

app.get("/", (req, res) => {
    res.sendFile('/home.html', {
        root: __dirname
    })
});

app.get("/about", (req, res) => {
    res.sendFile('/about', {
        root: __dirname
    })
});

app.get("/contact-me", (req, res) => {
    res.sendFile('./about-me.html', {
        root: __dirname
    })
})

server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})