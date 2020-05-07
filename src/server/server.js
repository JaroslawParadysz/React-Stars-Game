import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../components/App';

const port = 4243;
const server = express();
server.use(express.static('dist'));

server.get('/', (req, res) => {
  const initialMarkup = ReactDOMServer.renderToString(<App />);
  console.log('Derver side: ', initialMarkup);
  res.send(`
    <html>
      <head>
        <title>Sample React App</title>
      </head>
      <body>
        <div id="mountNode">${initialMarkup}</div>
        <script src="/main.js"></script>
      </body>
    </html>
  `)
});

server.listen(port, () => console.log(`Server is running on ${port}...`));