const express = require('express');
const path = require('path');
const app = express();

const staticPath = path.join(__dirname);
app.use(express.static(staticPath));

app.get('/', (req, res) => {
    res.sendFile(staticPath, 'index.html');
})

app.get('/api', (req, res) => {
    res.json({message: "Hello, world!"});
});

app.listen(3000);