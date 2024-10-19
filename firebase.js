import admin from 'firebase-admin';
import { readFileSync } from 'fs';

// Initialize Firebase with your service account credentials
const serviceAccount = JSON.parse(
  readFileSync('./creds.json', 'utf8')
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Initialize Firestore
const db = admin.firestore();

console.log ("database id" + db.databaseId )
// const docRef = await db.collection("eltequilacontacts").doc("contact").set({firstName: "Veronica"});
// console.log("document id " + docRef.id);

export default db 

