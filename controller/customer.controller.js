var dbCon = require("../config/db_connection")
var connection = dbCon.getConnection();
connection.connect();

var express = require("express");

var router = express.Router();

router.get("/", (req, res) => {
    connection.query("select * from customer", (err, records, fileds) => {
        if (err) {
            console.error("Error while fetching data");
        }
        else {
            res.send(records);
        }
    })
})

router.get("/:id", (req, res) => {
    connection.query(`select * from customer where id=${req.params.id}`, (err, records, fileds) => {
        if (err) {
            console.error("Error while fetching data");
        }
        else {
            res.send(records);
        }
    })
})

router.post("/", (req, res) => {
    var id = req.body.id;
    var fname = req.body.fname;
    var lname = req.body.lname;
    var email = req.body.email;
    var phone = req.body.phone;
    
    connection.query(`insert into customer values(${id} ,'${fname}','${lname}','${email}',${phone})`, (err) => {
        if (err) {
            console.error("Error while inserting data");
        }
        else {
            res.send({insert:"Sucess"});
        }
    })
})

router.put("/", (req, res) => {   
    var  id = req.body.id;
    var fname = req.body.fname;
    connection.query(`update customer set fname='${fname}' where id=${id}`, (err) => {
        if (err) {
            console.error("Error while updating data"+err);
        }
        else {
            res.send({update:"Sucess"});
        }
    })
})

router.delete("/:id", (req, res) => {
    connection.query(`delete from customer where id=${req.params.id}`, (err) => {
        if (err) {
            console.error("Error while fetching data");
        }
        else {
            res.send({deleted:"sucess"});
        }
    })
})



module.exports = router