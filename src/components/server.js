const { endsWith } = require('core-js/core/string');
const express = require('express');

const server = express();

server.get('*', (req, res) => {
  const html = '<htm><head>Test</head><body>Hello!</body></html>';
  res.end(html);
});

server.listen(8082);