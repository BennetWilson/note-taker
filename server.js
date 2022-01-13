// requires
const express = require('express');
const db = require('./db/db.json')
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// variables
const path = require('path')
const PORT = process.env.PORT || 3001;
const app = express();

// Intercode? Or something
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// code
app.use(express.static('public'));

// app.get('/', (req, res) => res.send('Navigate to /notes or /index'));

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, './public/index.html'))
);

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/notes.html'))
);

app.get('/api/notes', (req, res) => {
    res.json(db)
});

app.post('/api/notes', (req, res) => {
    req.body.id = uuidv4();
    db.push(req.body)
    fs.writeFileSync('./db/db.json', JSON.stringify(db,null,'\t'))
    res.json(db)
});

app.delete('/api/notes/:id', (req, res) => {
    for (let i = 0; i < db.length; i++) {
        if (db[i].id === req.params.id){
            db.splice(i,1)
        }
    }
    fs.writeFileSync('./db/db.json', JSON.stringify(db,null,'\t'))
    res.json(db)
})

app.listen(PORT, () =>
console.log(`Listening at http://localhost:${PORT}`)
);

