
'use strict';

const express = require('express');
const knex = require('../knex');

const router = express.Router();

// YOUR CODE HERE

////////////////////////
//////// GET ALL 
////////////////////////
router.get('/', function(req, res, next) {
  knex('classifieds')
  .select('id', 'title', 'description', 'price', 'item_image')
  .orderBy('id')
  .then((result) => {
    res.send(result);
  })
  .catch((err) => {
    next(err);
  });
});

////////////////////////
//////// GET SINGLE 
////////////////////////
router.get('/:id', function(req, res, next) {
  knex('classifieds')
    .select('id', 'title', 'description', 'price', 'item_image')
    .where({id: req.params.id})
    .first()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      next(err);
    });
});

////////////////////////
//////// POST
////////////////////////
router.post('/', function(req, res, next) {
  knex('classifieds')
    .insert({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      item_image: req.body.item_image
    }, '*')
    .then((result) => {
      const return_result = result[0];
      delete return_result.created_at;
      delete return_result.updated_at;
      res.send(return_result);
    })
    .catch((err) => {
      next(err);
    });
})

////////////////////////
//////// PATCH
////////////////////////
router.patch('/:id', function(req, res, next) {
  knex('classifieds')
    .where({id: req.params.id})
    .first()
    .update({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      item_image: req.body.item_image
    }, '*')
    .then ((result) => {
      let return_result = result[0];
      delete return_result.created_at;
      delete return_result.updated_at;
      res.send(return_result);
    })
    .catch((err) => {
      next(err);
    });
});

////////////////////////
//////// DELETE
////////////////////////
router.delete('/:id', function(req, res, next) {
    let message;
    knex('classifieds')
        .select('id', 'title', 'description', 'item_image', 'price')
        .where({
            id: req.params.id
        })
        .first()
        .then((delete_item) => {
            message = delete_item;
            return knex('classifieds')
                .del()
                .where({
                    id: req.params.id
                })
                .then((result) => {
                    // console.log(result);
                    // console.log(result[0]);
                    res.send(message);
                })
                .catch((err) => {
                    next(err);
                });
        })
        .catch((err) => {
            next(err);
        });
});

module.exports = router;
