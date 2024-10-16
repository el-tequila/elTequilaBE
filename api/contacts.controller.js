import ContactsDAO from "../dao/contactsDAO.js";

export default class ContactsController{
    static async apiPostComment(req, res, next){
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
            console.log(error);
            if(error){
                res.status(500).json({error:"Unable to post contact"});
            } else{
                res.json({status:"success"});
            }
        } catch(e){
            res.status(500).json({error:e.message});
        }
    }
}