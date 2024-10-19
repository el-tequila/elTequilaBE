import express from 'express';
import cors from 'cors';
import requests from './api/requests.route.js';

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/api/requests", requests);
app.use('*', (req, res) => {
    res.status(404).json({error: "not found, use the correct url"});
})
export default app;