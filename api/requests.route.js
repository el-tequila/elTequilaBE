import express from 'express';

const router = express.Router();

router.route("/contacts").post(ContactsController.apiPostContact);
