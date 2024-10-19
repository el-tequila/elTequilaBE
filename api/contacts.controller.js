import ContactsDAO from "../dao/contactsDAO.js";

export default class ContactsController{
    static async apiPostContact(req, res, next){
        try{
            const contactData = {
                firstName: req.body.firstname || 'no name',  // Fallback to an empty string if undefined
                lastName: req.body.lastName || 'no last name',    // Fallback to an empty string if undefined
                email: req.body.email || 'no email',          // Fallback to an empty string if undefined
                phoneNumber: req.body.phone || '00000000000', // Fallback to an empty string if undefined
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
            console.log("response " + JSON.stringify(contactsResponse, null, 2));
            var {error} = contactsResponse;
            if(error){
                res.status(500).json({error:"Unable to post comment"});
            } else{
                const code = `${res.statusCode}`;
                res.json({code: code, status:"OK"});
            }
        }  catch(e){
            res.status(500).json({error:e.message});
        }
    }
}