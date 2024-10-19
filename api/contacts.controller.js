import ContactsDAO from "../dao/contactsDAO.js";

export default class ContactsController{
    static async apiPostContact(req, res, next){
        console.log('in api');
        try{
            const contactData = {
                firstName: req.body.firstname || 'no name',  // Fallback to an empty string if undefined
                lastName: req.body.lastName || 'no last name',    // Fallback to an empty string if undefined
                email: req.body.email || 'no email',          // Fallback to an empty string if undefined
                phoneNumber: req.body.phone || 'no phone number', // Fallback to an empty string if undefined
                countryCode: req.body.countryCode || 'no country code',
                dob: req.body.dob,
                countryOfResidence: req.body.countryOfResidence || 'no country',
                zipCode: req.body.zipCode, 
                inquiry: req.body.inquiry,
                isLegalDrinkingAge: req.body.isLegalDrinkingAge,
                receiveMarketing: req.body.receiveMarketing
            };
            const contactsResponse = await ContactsDAO.addContact(
                contactData
            );
            console.log("response " + contactsResponse);
            res.json({status:"We will reach out to you asap"});
        }  catch(e){
            res.status(500).json({error:e.message});
        }
    }
}