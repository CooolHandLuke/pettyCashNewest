const express = require('express');
const fs = require('fs');
const path = require('path');
const fsp = fs.promises; // Use this for promise-based operations

const app = express();
const PORT = process.env.PORT || 4000;
const imagesDir = path.join(__dirname, 'projectImages');

app.use('/projectImages', express.static(imagesDir));
app.use(express.static(path.join(__dirname, 'public'), { extensions: ['html', 'js'] }));

app.listen(PORT || 4000, () => {
  console.log(`Server is running on port ${PORT}`);
});


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/shoot/:id/images', (req, res) => {
  const shootId = req.params.id;
  const projectImagesDir = path.join(__dirname, 'public', 'projectImages');
  const shootFolder = `shoot${shootId}`;

  // Ensure the shoot folder exists
  if (!fs.existsSync(path.join(projectImagesDir, shootFolder))) {
    return res.status(404).json({ error: 'Shoot not found' });
  }

  // Read all image files in the shoot folder (excluding 'image1.jpg')
  const images = fs.readdirSync(path.join(projectImagesDir, shootFolder))
    .filter(file => file.endsWith('.jpg') && file !== 'image1.jpg')
    .map(image => path.join('/projectImages', shootFolder, image));

  // Send the images array as JSON to the client
  res.json(images);
});

// Define the API endpoint to get the posts
app.get('/api/posts', (req, res) => {
  const projectImagesDir = path.join(__dirname, 'public', 'projectImages');

  fsp.readdir(projectImagesDir)
    .then(shootFolder => {
      return Promise.all(
        shootFolder
          .filter(folder => fs.statSync(path.join(projectImagesDir, folder)).isDirectory())
          .map((folder, index) => {
            const imagePath = path.join('/public/projectImages', folder, 'image1.jpg');
            const creditsPath = path.join(projectImagesDir, folder, 'credits.txt');

            return fs.readFile(creditsPath, 'utf-8')
              .then(title => {
                const dateString = `${index + 1 < 10 ? '0' : ''}${index + 1}/10/2021`;
                return {
                  id: index + 1,
                  title: title.trim(),
                  date: dateString,
                  image: imagePath,
                };
              });
          })
      );
    })
    .then(posts => res.json(posts))
    .catch(err => {
      console.error("Error fetching posts:", err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});


