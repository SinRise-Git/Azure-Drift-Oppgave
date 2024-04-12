const express = require('express'); 
const app = express(); 
const port = process.env.PORT || 80; 

app.get('/', (req, res) => { 
res.send('Hello, Azure! This is a Node.js application. Which do not work lol!); 
}); 

app.listen(port, () => { 
console.log(`Server is running on port ${port}`); 
}); 
