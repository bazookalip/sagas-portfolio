const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.post('/', (req, res) => {
    const newProject = req.body;
    const queryText = `INSERT INTO projects ("name", "date", "tag_id" , "website", "github", "description"  )
                    VALUES ($1, $2, $3, $4, $5, $6)`;
    const queryValues = [
        newProject.name,
        newProject.date,
        newProject.tag_id,
        newProject.website,
        newProject.github,
        newProject.description,
       
    ];
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(201); })
        .catch((err) => {
            console.log('Error completing SELECT plant query', err);
            res.sendStatus(500);
        });
});



router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM "projects"';
    pool.query(queryText)
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
            console.log('Error completing SELECT projects query', err);
            res.sendStatus(500);
        })
});
module.exports = router;