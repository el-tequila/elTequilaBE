const express = require('express');
const app = express();
const port = process.env.PORT || 3001; // Use environment variable for port or default to 3001

app.get('/', (req, res) => {
  res.send('Hello from your backend!');
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});