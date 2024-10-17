import express from 'express';
import cors from 'cors';
import requests from './api/requests.route.js';

// const express = require('express');
// const cors = require('cors');

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/api/requests", requests);
app.use('*', (req, res) => {
    res.status(404).json({error: "not found"});
})
// app.get('/api/requests', (req, res) => {
//   res.send('Hello from your backend!');
// });
// app.listen(port, () => {
//   console.log(`Backend listening at http://localhost:${port}`);
// });
export default app;