const router = require('express').Router();
const {
    readFromFile,
    readAndAppend,
    writeToFile,
  } = require('../helpers/fsUtils');

  router.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });

  router.post('/', (req, res) => {
    console.log(req.body);
  
    const { text, title, } = req.body;
  
    if (req.body) {
      const newNote = {
        text,
        title,
      };
  
      readAndAppend(newNote, './db/db.json');
      res.json(`Note added successfully 🚀`);
    } else {
      res.error('Error in adding note');
    }
  });










module.exports = router;
