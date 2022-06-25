const express = require('express')
const db = require('../db')
const utils = require('../utils')

const router = express.Router()

router.get('/', (request, response) => {

    const statement = `SELECT movie_id, movie_title, movie_release_date, movie_time, director_name
                        FROM movie;`
    
    db.pool.query(statement, (error, result) => {
        response.send(utils.createResult(error, result))
    })
})

router.post('/add', (request, response) => {

    const {movie_title, movie_release_date, movie_time, director_name} = request.body

    const statement = `INSERT INTO movie(movie_title, movie_release_date, movie_time, director_name)
                        VALUES(?, ?, ?, ?)`

    db.pool.query(statement, [movie_title, movie_release_date, movie_time, director_name], (error, result) => {
        response.send(utils.createResult(error, result))
    })
})

router.put('/update/:movie_id', (request, response) => {

    const {movie_id} = request.params
    const {movie_release_date, movie_time} = request.body

    const statement = `UPDATE mvoie 
                        SET 
                            movie_release_date = ?,
                            movie_time = ?
                        WHERE movie_id = ?`

    db.pool.query(statement, [movie_id, movie_release_date, movie_time], (error, result) => {

        response.send(utils.createResult(error, result))
    })
})

router.delete('/delete/:movie_id', (request, response) => {

    const {movie_id} = request.params

    const statement = `DELETE FROM movie WHERE movie_id = ?`

    db.pool.query(statement, [movie_id], (error, result) => {

        response.send(utils.createResult(error, result))
    })
})

module.exports = router