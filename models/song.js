const db = require('../config/db');

const Song = {
    // Retrieve all songs
    getAll: (callback) => {
        db.query('SELECT * FROM songs', callback);
    },

    // Add a new song
    add: (songData, callback) => {
        // Expect songData to include artist, title, lyrics, music, image, created_at, updated_at
        db.query('INSERT INTO songs SET ?', songData, callback);
    },

    // Delete a song by ID
    delete: (id, callback) => {
        db.query('DELETE FROM songs WHERE id = ?', [id], callback);
    },

    // Update a song by ID
    update: (id, songData, callback) => {
        // Include updated_at in songData to track when a song is updated
        db.query('UPDATE songs SET ? WHERE id = ?', [songData, id], callback);
    },

    // Retrieve a song by ID
    getById: (id, callback) => {
        db.query('SELECT * FROM songs WHERE id = ?', [id], callback);
    },
};

module.exports = Song;
