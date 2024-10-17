import ContactsDAO from "../dao/contactsDAO.js";

export default class ContactsController{
    static async apiPostContact(req, res, next){
        console.log('in api');
        try{
            const name = req.body.name;
            // const userInfo = {
            //     name: req.body.name,
            //     _id:req.body.user_id
            // }
            const date = new Date();
            const contactsResponse = await ContactsDAO.addContact(
                // recipeId,
                // userInfo,
                name,
                date
            );
            var {error} = contactsResponse;
            console.log(name);
            if(error){
                res.status(500).json({error:"Unable to post contact"});
            } else{
                res.json({status:"We will reach out to you asap"});
            }
        } catch(e){
            res.status(500).json({error:e.message});
        }
    }
}