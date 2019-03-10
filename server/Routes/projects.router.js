const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();


router.get('/', (req, res) => {
    const queryText = 'SELECT *, "tags"."name" AS "tag_name","projects"."name" AS "project_name" FROM "projects" JOIN "tags" ON "projects"."tag_id" = "tags"."id"';
    pool.query(queryText)
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
            console.log('Error completing SELECT projects query', err);
            res.sendStatus(500);
        })
});




router.delete('/:id', (req, res) => {
    console.log('/ DELETE request was hit');
    console.log('req.params', req.params);
    pool.query(`DELETE FROM "projects" WHERE "id"=$1;`, [req.params.id])
        .then(() => {
            res.sendStatus(204);
        }).catch(error => {
            console.log('there was an error on the delete query', error);
            res.sendStatus(500);
        });
});


router.post('/', (req, res) => {
    const newProject = req.body;
    const queryText = `INSERT INTO projects ("name", "description", "website", "github", "date_completed", "tag_id", "thumbnail")
                    VALUES ($1, $2, $3, $4, $5, $6, $7)`;
    const queryValues = [
        newProject.name,
        newProject.description,
        newProject.website,
        newProject.github,
        newProject.date_completed,
        newProject.tag,
        newProject.thumbnail
       
    ];
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(201); })
        .catch((err) => {
            console.log('Error completing SELECT plant query', err);
            res.sendStatus(500);
        });
});
module.exports = router;

