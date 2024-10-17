// const {Storage} = require('@google-cloud/storage');

// const storage = new Storage({
//   projectId: 'golden-tempest-436716-g4',
//   keyFilename: 'path/to/your/service-account-key.json'
// });

// const bucketName = 'el-tequila-images';   


// app.get('/list-files', async (req, res) => {
//   try {
//     const [files] = await storage.bucket(bucketName).getFiles();
//     const fileNames = files.map(file => file.name);
//     res.json(fileNames);
//   } catch (err) {
//     console.error('ERROR:', err);
//     res.status(500).send('Error listing files');
//   }
// });

import app from './server.js'; 
// import mongodb from "mongodb";
import dotenv from "dotenv";
// import CommentsDAO from './dao/commentsDAO.js';
// import RecipesDAO from './dao/recipesDAO.js';
// import SavedDAO from './dao/savedDAO.js';
// declared async to use the asynchronous await keyword
async function main(){ 
    dotenv.config(); 
    // const client = new mongodb.MongoClient(
    //     process.env.RECIPEAPP_DB_URI
    // )
    const port = process.env.PORT || 8000;

    try { 
        //Connect to MongoDB server for every DAO
        // await client.connect();
        // await RecipesDAO.injectDB(client);
        // await CommentsDAO.injectDB(client);
        // await SavedDAO.injectDB(client);

        app.listen(port, () => { 
            console.log('Server is running on port: .'+port);
        })
    } catch(e){
        // throw exception:
        console.error(e);
        process.exit(1);
    }
}
main().catch(console.error);