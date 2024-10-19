// import mongodb from "mongodb";
// const ObjectId = mongodb.ObjectId;
import db from '../firebase.js';

let contacts;

export default class ContactsDAO {
  
    static async addContact(contactData){
        console.log("in add contact " + contactData.firstName);
        try {
          // return await db.collection("eltequilacontacts").add(
          //   { firstName: contactData.firstName, 
          //     lastName: contactData.lastName
          //   });
            return await db.collection("eltequilacontacts").add(
              { contactData
              });
      }
      catch(e) {
          console.error(`Unable to post contact: ${e}`)
          return { error: e };
      }
  }
}
