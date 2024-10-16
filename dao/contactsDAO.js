import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;

let contacts;

export default class ContactsDAO {
    static async injectDB(conn) {
        if (contacts) {
            return;
        }
        try {
            contacts = await conn.db(process.env.TEQUILAAPP_NS)
                .collection('contacts');
        } catch (e) {
            console.error(`Unable to connect in ContactsDAO: ${e}`);
        }
    }
    static async addContact(name, date){
        try {
          const contactDoc = {
              name: contact.name,
            //   user_id: user._id,
            //   meal: meal,
            //   difficulty: difficulty,
            //   dietary: dietary,
            //   picture: picture,
              content: content,
            //   recipe_name: recipe_name,
              date:date
          }
          return await contacts.insertOne(contactDoc);
      }
      catch(e) {
          console.error(`Unable to post contact: ${e}`)
          return { error: e };
      }
      }
  
}
