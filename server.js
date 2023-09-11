const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = process.env.PORT;
const imagesDir = path.join(__dirname, 'projectImages');

app.use('/projectImages', express.static(imagesDir));
app.use(express.static(path.join(__dirname, 'public'), { extensions: ['html', 'js'] }));


app.listen(PORT || 3000, () => {
  console.log(`Server is running on port ${PORT}`);
});


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/shoot/:shootId', async (req, res) => {
  const shootId = req.params.shootId;
  const shootDir = path.join(imagesDir, shootId);

  try {
    const creditsPath = path.join(shootDir, 'credits.txt');
    const creditsText = await fs.readFile(creditsPath, 'utf-8');

    // Collect image/video paths in the shoot directory
    const mediaFiles = await fs.readdir(shootDir);
    const mediaPaths = mediaFiles.filter(file => !file.includes('credits.txt'));

    res.render('shoot', { shootId, mediaPaths, creditsText });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error loading shoot gallery');
  }
});

app.get('/shoots', async (req, res) => {
  try {
    const shootFolders = await fs.readdir(imagesDir);
    const shootDataList = [];

    for (const shootFolder of shootFolders) {
      const shootDir = path.join(imagesDir, shootFolder);

      try {
        const creditsPath = path.join(shootDir, 'credits.txt');
        const creditsText = await fs.readFile(creditsPath, 'utf-8');

        const mediaFiles = await fs.readdir(shootDir);
        const mediaPaths = mediaFiles.filter(file => !file.includes('credits.txt'));

        shootDataList.push({
          id: shootFolder,
          thumbnailPath: path.join('/projectImages', shootFolder, mediaPaths[0]),
          firstLineText: creditsText.split('\n')[0], // Extract the first line from credits.txt
        });
      } catch (error) {
        console.error(`Error reading data for ${shootFolder}: ${error}`);
      }
    }

    res.json(shootDataList);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching shoot data');
  }
});

