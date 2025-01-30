const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('This is my application with version tag v1.0.6');
});

app.get('/about', (req, res) => {
  res.send('About page');
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});