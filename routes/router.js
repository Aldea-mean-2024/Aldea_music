const express = require('express');
const multer = require('multer');
const router = express.Router();
const songsController = require('../controller/songController');

// Setup for file storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/audio'); // Adjust the path as necessary
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); // Save file with the original name
    }
});

const upload = multer({ storage: storage });

router.get('/', songsController.index); // Route to get all songs
router.get('/add', songsController.add); // Route to add a song
router.post('/add', upload.single('audioFile'), songsController.create); // Route to handle the song addition
router.get('/edit/:id', songsController.edit); // Route to edit a song
router.post('/edit/:id', upload.single('audioFile'), songsController.update); // Route to update the song
router.post('/delete/:id', songsController.delete); // Route to delete a song

module.exports = router;
