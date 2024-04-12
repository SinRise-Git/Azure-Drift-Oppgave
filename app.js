const express = require('express'); 
const path = require('path'); 
const staticPath = path.join(__dirname, '/public');

const app = express(); 
app.use(express.static(staticPath));
const port = process.env.PORT || 3000; 


app.get('/', (req, res) => { 
    res.sendFile(path.join(staticPath,  'index.html')); 
}); 

app.get('/movie', (req, res) => {
    res.sendFile(path.join(staticPath, 'movie.html'));
})

app.get('/api', (req, res) => {
    res.json({message: "Hello, Azure! This is a Node.js application. Which do not work lol!"})
})

app.listen(port, () => { 
console.log(`Server is running on port ${port}`); 
}); 
