const {Storage} = require('@google-cloud/storage');

const storage = new Storage({
  projectId: 'golden-tempest-436716-g4',
  keyFilename: 'path/to/your/service-account-key.json'
});

const bucketName = 'el-tequila-images';   


app.get('/list-files', async (req, res) => {
  try {
    const [files] = await storage.bucket(bucketName).getFiles();
    const fileNames = files.map(file => file.name);
    res.json(fileNames);
  } catch (err) {
    console.error('ERROR:', err);
    res.status(500).send('Error listing files');
  }
});