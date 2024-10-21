import db from '../firebase.js';

let contacts;

export default class ContactsDAO {
  
    static async addContact(contactData){
        console.log("in add contact " + contactData.firstName);
        try {
          // const formattedDate = currentDate.toLocaleString('en-US', {
          //   year: 'numeric',
          //   month: 'long',
          //   day: 'numeric',
          //   hour: '2-digit',
          //   minute: '2-digit',
          //   second: '2-digit',
          // });
          
          // console.log(formattedDate);
            const currentDate = new Date();

            const year = currentDate.getFullYear();
            const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
            const day = String(currentDate.getDate()).padStart(2, '0');
            const hours = String(currentDate.getHours()).padStart(2, '0');
            const minutes = String(currentDate.getMinutes()).padStart(2, '0');
            const seconds = String(currentDate.getSeconds()).padStart(2, '0');
            const randomNumber = Math.floor(Math.random() * 1000);
            const docId = `${year}${month}${day}${hours}${minutes}${seconds}-${randomNumber}`
            console.log(docId); 
            const docRef = db.collection("eltequilacontacts").doc(docId);
            // Add data to the document
            return await docRef.set(            
            // return await db.collection("eltequilacontacts").doc("currentDate"+currentDate.toUTCString).add(
              { firstName: contactData.firstName, 
                lastName: contactData.lastName,
                email: contactData.email,
                phoneNumber: contactData.phoneNumber,
                countryCode: contactData.countryCode,
                dob: contactData.dob,
                countryOfResidence: contactData.countryOfResidence,
                zipCode: contactData.zipCode, 
                inquiry: contactData.inquiry,
                isLegalDrinkingAge: contactData.isLegalDrinkingAge,
                receiveMarketing: contactData.receiveMarketing
              });
      }
      catch(e) {
          console.error(`Unable to post contact: ${e}`)
          return { error: e };
      }
  }
}
