var express =require("express");

var app = express();
app.use(express.urlencoded({extended:true}))
app.use(express.json())

var  customerApi = require("./controller/customer.controller")
app.use("/api/customer",customerApi);

app.listen(8080);

console.log("Server is running on 8080");