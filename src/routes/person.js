const express = require("express");
const router = express.Router();

//localhost:3000/person?name=abc
router.get("/person",(req, res) => {
    if(req.query.name) {
        const name = req.query.name;
        res.send(`want a person named ${name} ?`);
    } else {
        res.send("want a person ?");
    }
});

//localhost:3000/person/abc
router.get("/person/:name",(req, res) => {
    const name = req.params.name;
    res.send(`want a person named ${name} ?`);
});

router.get("/error",() => {
    throw new Error("ERROR");
})


module.exports = router;