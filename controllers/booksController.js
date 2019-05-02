const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Book.find(req.query)
        .then(results => res.json(results))
        .catch(err => res.json(err));
    },
    findById: function(req, res) {
        db.Book.findById(req.params.id)
        .then(results => res.json(results))
        .catch(err => res.json(err));
    },
    create: function(req, res) {
        db.Book.create(req.body)
        .then(results => res.json(results))
        .catch(err => res.json(err));
    },
    update: function(req, res) {
        db.Book.findOneAndUpdate({
            _id: req.params.id
        }, req.body)
        .then(results => res.json(results))
        .catch(err => res.json(err));
    },
    remove: function(req, res) {
        db.Book.findById({_id: req.params.id})
        .then(results => results.remove())
        .then(results => res.json(results))
        .catch(err => res.json(err));
    }
};