import express from 'express';
import ContactsController from './contacts.controller.js';

const router = express.Router();

router.route("/contacts").post(ContactsController.apiPostContact);
console.log ("here in requests.route");

export default router;
