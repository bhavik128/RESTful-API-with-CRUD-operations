const CustomerModel = require("../models/customer.model");
const express = require("express");
const router = express.Router();

// Create a new customer
router.post('/customer',(req, res) => {
    if(!req.body) {
        return res.status(400).send("Request body is missing");
    } else {
        const model = new CustomerModel(req.body);
        model.save()
            .then(doc => {
                if(!doc || doc.length === 0) {
                    return res.status(500).send(doc);
                }
                res.status(201).json(doc);
            })
            .catch(err => {
                res.status(500).json(err);
            });
    }
});

//GET request
router.get("/customer",(req, res) => {
    if(!req.query.email) {
        return res.status(400).send("missing required parameter");
    }
    CustomerModel.findOne({email:req.query.email})
        .then(customer => {res.json(customer)})
        .catch(err => {res.status(500).json(err)});
});

//PUT request
router.put("/customer",(req, res) => {
    if(!req.query.email) {
        return res.status(400).send("missing required parameter");
    }
    CustomerModel.findOneAndUpdate({email:req.query.email},req.body,{new: true})
        .then(customer => {res.json(customer)})
        .catch(err => {res.status(500).json(err)});
});

//DELETE request
router.delete("/customer",(req, res) => {
    if(!req.query.email) {
        return res.status(400).send("missing required parameter");
    }
    CustomerModel.findOneAndRemove({email:req.query.email})
        .then(customer => {res.json(customer)})
        .catch(err => {res.status(500).json(err)});
});

module.exports = router;