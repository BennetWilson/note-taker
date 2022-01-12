// requires
const express = require('express');
const { get } = require('express/lib/response');
// variables
const path = require('path')
const PORT = 3001
const app = express();

// code
app.use(express.static('public'));

app.get('/', (req, res) => res.send('Navigate to /notes or /index'));

app.get('/index', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/index.html'))
);
app.post('/index', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/notes.html'))
);
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/notes.html'))
);

app.listen(PORT, () =>
console.log(`Listening at http://localhost:${PORT}`)
);